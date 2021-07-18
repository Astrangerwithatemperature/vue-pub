Vue.component("buttonCounter",{
    data:function(){
        return {
          list:[]
        }
    },
    props:["count","jkOld"],
template:`<button v-on:click="$emit('click-text',count+1)">You clicked me {{ count }} times.{{jkOld}}<slot></slot></button>`,
});
Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    computed: {
      inputListeners: function () {
        var vm = this
        // `Object.assign` 将所有的对象合并为一个新对象
        return Object.assign({},
          // 我们从父级添加所有的监听器
          this.$listeners,
          // 然后我们添加自定义监听器，
          // 或覆写一些监听器的行为
          {
            // 这里确保组件配合 `v-model` 的工作
            input: function (event) {
              vm.$emit('input', event.target.value)
            }
          }
        )
      }
    },
    template: `
      <label>
        {{ label }}
        <input
          v-bind="$attrs"
          v-bind:value="value"
          v-on="inputListeners"
        >
      </label>
    `
  });
  Vue.component('anchored-heading', {
    render: function (createElement) {
      debugger
      return createElement(
        'h' + this.level,   // 标签名称
        this.$slots.default // 子节点数组
      )
    },
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  })
  var TestComponent={
    // inheritAttrs:false,
    template:`<input ></input>`
};
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];
const router = new VueRouter({
  routes // short for `routes: routes`
});

var vm = new Vue({
    el:"#testApp",
    data:{
        count:7,
        jk:89,
    },
    components:{
        'test-component':TestComponent
    },
    computed:{
    },
    methods:{
        onFocus:()=>{
            console.log("sffffffssss");
        },
        uui:()=>{
          var op={
            title:""
          };
        },
    },
    router
});
