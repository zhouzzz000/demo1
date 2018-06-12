new Vue({
    el:'#herderLabel',
    data:{
        curAvator:curAvator,
    },
    methods:{
        label1Click:function (e) {
            alert(e.target.innerText);
        },
    },
});

new Vue({
    el:'#search',
    mounted:function() {
        this.searchArr = getSearchArr();
    },
    data:{
        inputText:'',
        searchArr: '',
    },
    methods:{
        fun:function (index) {
            self.location = '../item/index.html?itemID='+index;
        },
        clickForSearch:function () {
            if(this.inputText!==null)
            {
                var that = this;
                var teInfo = this.searchArr.filter(function (item) {
                    return item.name.toLowerCase().indexOf(that.inputText.toLowerCase()) > -1;
                })
                if(teInfo.length === 1)
                {
                    if(teInfo[0].id === 0){
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



new Vue({
    el:'#forth',
    data:{
        isSettle:true,
        hotestItem:'',
        newestItem:'',
        showItem: '',
    },
    mounted:function()
    {
        var  id = getQueryString('id');
        id = parseInt(id);
        if(id === 1)
        {
            this.showItem = getHotestItem();;
        }else if (id === 2)
        {
            this.showItem = getNewestItem();
        }
    },
    methods:{
        clickForItem:function (id) {
            self.location = "../item/index.html?itemID="+id;
        }
    }
})

$('#mySlider').flexslider({
    playAfterPaused: 4000,
    before: function(slider) {
        if (slider._pausedTimer) {
            window.clearTimeout(slider._pausedTimer);
            slider._pausedTimer = null;
        }
    },
    after: function(slider) {
        var pauseTime = slider.vars.playAfterPaused;
        if (pauseTime && !isNaN(pauseTime) && !slider.playing) {
            if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
                slider._pausedTimer = window.setTimeout(function() {
                    slider.play();
                }, pauseTime);
            }
        }
    }
    // 设置其他参数
});