
Vue.component(
    'todo-item',
    {
        props:['content','index'],
        template:'<li @click="handleDelete">{{content}}{{index}}</li>',
        methods:{
            handleDelete:function () {
                this.$emit('delete',this.index);
            }
        }
    },
);


var vm = new Vue({
    el:'#app',
    data:{
        message: 'hello world',
        title:"this is hello world",
        firstName:'',
        lastName:'',
        count:0,
        show:false,
        list:[],
        inputValue:'hello',
        template:'<h1>hello world</h1>'
    },
    computed:{
        fullName:function () {
            return this.firstName+''+this.lastName;
        }
    },
    watch:{
        fullName:function () {
            this.count++;
        }
    },
    methods:{
        handleClick:function () {
            vm.message = "hello world";
        },
        hiddenClick:function () {
            this.show = !this.show;
        },
        handleSubmit:function () {
            this.list.push(this.inputValue);
            this.inputValue = "";
        },
        handleDelete:function (index) {
            this.list.splice(index,1);
        }
    }
});
vm.$data['message'] = 'hello';