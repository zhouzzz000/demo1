new Vue({
    el:'#div-1',
    mounted:function () {
        var id = getQueryString('itemID');
        id = parseInt(id);
        this.itemInfo = getItemByID(id);
        this.comments = getComments(1);
    },
    data:{
        itemInfo:'',
        comments:'',
        newComment:''
    },
    methods:{
        label1Click:function () {

        },
        clickForComment:function () {
            if(this.newComment!=='') {
                var count = this.comments.length;
                console.log(count);
                var myDate = new Date();
                var minutes = myDate.getMinutes();
                if(minutes < 10)
                {
                    minutes = '0'+minutes;
                }
                var time = myDate.getFullYear() + '-' + myDate.getMonth() + '-' + myDate.getDate() + ' ' + myDate.getHours() + ":" + minutes;
                var ttt = {
                    avator: '../img/cat.jpg',
                    name: '猫萌萌',
                    text: this.newComment,
                    time: time,
                    id: count + 1,
                }
                this.newComment = '';
                Vue.set(this.comments,count,ttt);
                setComments(1,this.comments);
            }
        }
    }
});