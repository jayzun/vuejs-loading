import vuejsLoading from './App.vue'

vuejsLoading.install = (Vue, defaultOption) => {

    //用于将option合并到组件中的data
    let merge = (data, ...option) => {
        for (let i = 0; i < option.length; i++) {
            let source = option[i] || {};
            for (let prop in source) {
                if (source.hasOwnProperty(prop)) {
                    let value = source[prop];
                    // if (value !== undefined) {
                        data[prop] = value;
                    // }
                }
            }
        }
        return data;
    }

    //配置默认option
    let defaults = merge({
        text: '加载中...',
        duration: undefined,
        callback: undefined,
        mask: true
    }, defaultOption);

    let instance;
    //extend 是构造一个组件的语法器
    let Loadingconstructor = Vue.extend(vuejsLoading);

    let initInstance = () => {
        //实例化组件
        instance = new Loadingconstructor({
            el: document.createElement('div')
        });
        //合并全局option
        merge(instance.$data, defaults);
        //添加到body
        document.body.appendChild(instance.$el);
    }

    let Loading = {
        show(option) {
            if (!instance) {
                //组件仅初始化一次
                initInstance();
            } else if (instance.state) {
                return;
            }
            //合并option
            merge(instance.$data, defaults, option);
            //显示loading组件
            instance.state = true;
        },
        close() {
            //隐藏loading组件
            instance.state = false;
        }
    }

    //注册全局组件
    Vue.component(vuejsLoading.name, Loading);

    //添加全局api
    Vue.prototype.$loading = Loading;
}

export default vuejsLoading.install;