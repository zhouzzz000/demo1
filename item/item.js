new Vue({
    el:'#div-1',
    mounted:function () {
        var id = getQueryString('itemID');
        id = parseInt(id);
        this.itemInfo = getItemByID(id);
        this.comments = getComments(1);
        this.searchArr = getSearchArr();
        if(id > 1000)
        {
            this.title2 = '生活习惯';
        }
    },
    data:{
        inputText:'',
        searchArr: '',
        title2:'生长习性',
        itemInfo:'',
        comments:'',
        newComment:'',
        curAvator:curAvator,
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
        },
    fun:function (index) {
        self.location = '../item/index.html?itemID='+index;
    },
    clickForSearch:function () {
        if (this.inputText !== null) {
            var that = this;
            var teInfo = this.searchArr.filter(function (item) {
                return item.name.toLowerCase().indexOf(that.inputText.toLowerCase()) > -1;
            })
            if (teInfo.length === 1) {
                if (teInfo[0].id === 0) {
                    self.location = './index.html';
                }
                else
                    this.fun(teInfo[0].id);
            }
        }
     }
    },
    computed:{
        sArr:function () {
            var ss = this.inputText;
            if (ss) {
                return this.searchArr.filter(function(product) {
                    return Object.keys(product).some(function(key) {
                        return String(product[key]).toLowerCase().indexOf(ss) > -1
                    })
                })
            }
            else {
                if(searchArr.length > 10) return searchArr.slice(0,10);
                return this.searchArr;
            }
        }
    }
});

