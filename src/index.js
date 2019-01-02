import vuejsLoading from './App.vue'

vuejsLoading.install = (Vue, globalOption) => {

    //用于将option合并到组件中的data
    let merge = (data, option) => {
        let source = option || {};
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    data[prop] = value;
                }
            }
        }
        return data;
    }

    let instance;
    //extend 是构造一个组件的语法器
    let Loadingconstructor = Vue.extend(vuejsLoading);

    let initInstance = () => {
        //实例化组件
        instance = new Loadingconstructor({
            el: document.createElement('div')
        });
        //合并全局option
        merge(instance.$data, globalOption);
        //添加到body
        document.body.appendChild(instance.$el);
    }

    let Loading = {
        show(option) {
            if(window.$isLoading === undefined) {
                //组件仅初始化一次
                initInstance();
            }
            else if(window.$isLoading) {
                return;
            }
            //合并option
            merge(instance.$data, option);
            //显示loading组件
            instance.state = true;
            window.$isLoading = true;
        },
        close() {
            window.$isLoading = false;
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