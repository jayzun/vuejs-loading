#

## Installation

```bash
npm i vuejs-loading --save
```

## Usage

```javascript
//main.js
import Loading from 'vuejs-loading';

Vue.use(Loading);

//.vue files
/*show component*/
this.$loading.show({text:'hello world'});
/*close component*/
this.$loading.close();
```

## Preview

![vuejs-loading](https://s2.ax1x.com/2019/01/02/FI3GE8.gif)

## Option

use option to custom the component.  
option is an object.  
Use option in the following ways:

```javascript
this.$loading.show(option);
```

or

```javascript
Vue.use(Loading, option);
```

option available:

| key | type | default | description |
| :-: | :-: | :-: | ------ |
| text | string | "加载中..." | loading text |
| mask | boolean | true | whether to show a fullscreen,transparent mask |
| callback | function |  | function to call when loading is closed |
| duration | number |  | auto close time, 1000 = 1 second; without duration, loading exists permanently |

## License

The MIT License