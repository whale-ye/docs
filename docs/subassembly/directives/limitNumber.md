# 限制数字的输入
::: tip 
自定义指令限制数字的输入范围以及允许的小数位数
:::

## 使用
```vue
<el-input
	v-limit-number="{ decimal: 0, min: 0, max: 100 }"
	v-model="formData.min_show_ratio"
></el-input>
```

## props
| 属性      | 说明                                      | 默认值    | 类型    |
| --------- | ----------------------------------------- | --------- | ------- |
| min       | 限制输入的最小值                          | -Infinity | Number  |
| max       | 限制输入的最大值                          | Infinity  | Number  |
| decimal   | 限制输入的小数点几位                      | 0         | Number  |
| onlyMinus | 是否允许只输入负号,true 允许，false不允许 | false     | Boolean |

### 5435
### 代码
```js
/*
* 自定义指令限制数字的输入范围以及允许的小数位数
* 以上得到的 比如 5.0得到的是5 如果想强制保留以为小数，请额外写blur方法
* 如果最后的输入结果为 - 或者 . 在回车或者失焦后会变成 ''
* 当输入 -.5 或者 .5 的时候会自动补充0 变成 -0.5 或者 0.5
* 允许输入中文 。 会自动变成 .
* 如果以 . 结尾,比如 5. 会自动变成 5
* 如果中间出现 - 号如何处理，有两种处理，只需打开相应的注释即可
* 1. 如果输入4-5 则不允许输入- 变成45
* 2. 如果输入 4-5 自动变成 -45
* 最后输入框的绑定值类型是 string 类型
* v-limit-number="{
    min: -100, 限制输入的最小值
    max: 100, 限制输入的最大值
    decimal:3 限制输入的小数点几位
    onlyMinus: false 默认 不允许只输入负号 true 允许
  }"
*/
export default {
  inserted(el, binding, vnode) {
    const decimal = binding.value.decimal || 0;
    const min = binding.value.min === undefined ? -Infinity : binding.value.min;
    const max = binding.value.max === undefined ? Infinity : binding.value.max;
    const onlyMinus = binding.value.onlyMinus === undefined ? false : binding.value.onlyMinus;
    // eslint-disable-next-line no-param-reassign, func-names
    el.handlerCompositionend = function (event) {
      // eslint-disable-next-line no-param-reassign
      vnode.inputLocking = false;
      const input = event.target;
      let value = input.value;
      const oldValue = input.value;
      if (min >= 0 && !onlyMinus) {
        value = value.replace(/[^\d.。]/g, '');
      } else {
        value = value.replace(/[^-\d.。]/g, '');
      }
       // 判断是否需要更新，避免进入死循环
       if (oldValue.toString() !== value.toString()) {
         input.value = value;
        //  手动触发 input 事件以确保数据和视图同步 不然会出现当页面为55，且最大值为100的时候，再输入一个5，页面会呈现100，但是实际值为555，会页面与值不同步
        input.dispatchEvent(new Event('input'));
      }
    };
    // eslint-disable-next-line no-param-reassign, func-names
    el.handlerCompositionstart = function () {
      // eslint-disable-next-line no-param-reassign
      vnode.inputLocking = true;
    };
    // eslint-disable-next-line no-param-reassign, func-names
    el.handlerInput = function (event) {
      if (vnode.inputLocking) {
        return;
      }
      const input = event.target;
      let value = input.value;
      const oldValue = input.value;

      // 移除非数字、负号、小数点的字符
      value = value.replace(/[^-\d.。]/g, '');
      if (min >= 0 && !onlyMinus) {
        value = value.replace(/[^\d.。]/g, '');
      } else {
        value = value.replace(/[^-\d.。]/g, '');
      }
      // 连续的两个 - 换成一个 -
      value = value.replace(/-{2,}/g, '-')
      // 处理负号位置，确保只有一个负号
        .replace(/(\d+)?-+(\d+)?/, (_, num1, num2) => { // 当有 - 符号出现时候
        if (num1 === undefined) {
          return `-${num2 || ''}`;
        }
        //  return (num1||'') + (num2||''); // 如果输入4-5 则不允许输入- 变成45
          return `-${num1 || ''}${num2 || ''}`; // 如果输入 4-5 自动变成 -45
      })
      .replace(/。/g, '.') //  将中文。转换为.
      .replace(/\.{2,}/g, '.') // 连续的两个 . 换成一个 .
      .replace('.', '$#$')
      .replace(/\./g, '')
      .replace('$#$', '.') // 只允许出现一次 .
      .replace('-', '$#$')
      .replace(/-/g, '')
      .replace('$#$', '-'); // 只允许出现一次 -

      // jenkins不支持 后行断言
      // value = value.replace(/(?<=^-?)(\.\d+)|[^-\d.]/g, match => {
      //   // 如果匹配到的是小数点和数字，且小数点后只有一个数字，补充零
      //   if (match.startsWith('.') && match.length === 2) {
      //     return `0${match}`;
      //   }
      //   return match;
      // });
      value = value.replace(/(^-?\d*\.\d+$)|(^-?\d+$)|[^-\d.]/g, (match) => {
        // 如果匹配到的是以负号开头的小数或整数，补充零
        if (match.startsWith('.') && match.length === 2) {
          return `0${match}`;
        }
        return match;
      });

      // 处理小数点的位置，确保只有一个小数点且小数位数不超过指定值
      const decimalIndex = value.indexOf('.');
      if (decimalIndex > -1) {
        if (decimal) {
          let decimalPart = value.substring(decimalIndex + 1);
          if (decimalPart.length > decimal) {
            decimalPart = decimalPart.substring(0, decimal);
            value = value.substring(0, decimalIndex + 1) + decimalPart;
          }
        } else {
          value = value.substring(0, decimalIndex);
        }
      }

      // 转换为数字之后不为NaN
      if (!isNaN(Number(value))) {
        // 在确认的时候在进行判断最大最小值，以防止删除时候小于最小值而不能设置
        if (+value > max || (+value < min && min >= 0 && +value < 0)) {
          // 处理最大值和最小值
          value = Math.min(Math.max(value, min), max);
        } else if (+value < min && min < 0) {
          value = Math.max(value, min);
        }
      }

      // 判断是否需要更新，避免进入死循环
      if (oldValue.toString() !== value.toString()) {
        input.value = value;
        //  手动触发 input 事件以确保数据和视图同步 不然会出现当页面为55，且最大值为100的时候，再输入一个5，页面会呈现100，但是实际值为555，会页面与值不同步
        input.dispatchEvent(new Event('input'));
      }
    };
    // eslint-disable-next-line func-names, no-param-reassign
    el.handlerChange = function (event) {
      if (vnode.inputLocking) {
        return;
      }
      const input = event.target;
      let value = input.value;
      const oldValue = input.value;
      // 当输入框失去焦点或者回车的时候，如果不能转换成数字类型，则置为空 比如 - . -.
      if (isNaN(Number(value)) && !onlyMinus) {
        value = '';
      }
      value = value.replace(/\.$/g, ''); // 以小数点结尾将小数点置为空
      value = value.replace(/-0\b/g, '0');

      value = value === '' || (value === '-' && onlyMinus) ? value : Number(value);
      if (!(onlyMinus && value === '-')) {
        if (+value < min && value !== '') {
          // 处理最大值和最小值
          value = Math.max(value, min);
        }
      }
       // 判断是否需要更新，避免进入死循环
      input.value = value;
       if (oldValue.toString() !== value.toString()) {
        //  手动触发 input 事件以确保数据和视图同步 不然会出现当页面为''，实际值为 -
        input.dispatchEvent(new Event('input'));
      }
    };

    el.addEventListener('input', el.handlerInput);
    el.addEventListener('change', el.handlerChange);
    el.addEventListener('compositionstart', el.handlerCompositionstart);
    el.addEventListener('compositionend', el.handlerCompositionend);
  },
  unmounted(el) {
    el.removeEventListener('input', el.handlerInput);
    el.removeEventListener('change', el.handlerChange);
    el.removeEventListener('compositionstart', el.handlerCompositionstart);
    el.removeEventListener('compositionend', el.handlerCompositionend);
  }
};
```
**全局注册**
```js
import directiveConfig from '@/directives/number-input';
Vue.directive('limitNumber', directiveConfig.default || directiveConfig);
```

## 43543
#### 435435