//vue 插件必须具备install 函数
function Installer(){
//自身初始化

}

Installer.install = function (Vue){
    //接受Vue的构造函数，给原型挂载属性或注册全局组件或过滤器
    console.log(Vue);

    //1、注册全局组件
    Vue.component('test', { 
        template:'<h1>{{message}}</h1>',
        data: function () {
            return {
                message : '哈哈哈'
            }
        }
    
    });
    //自定义log
    let log = function () {
        console.log('我自定义的log函数')
    };
    //2、挂载属性 （不会改变更安全）
    Object.defineProperty(Vue.prototype ,'$log',{
        set: function (newV){
            console.log('你做梦吧');
            // log = newV ;
        },
        get: function (){
            return log ;
        }
    })

}


export default Installer ;