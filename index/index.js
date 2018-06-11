new Vue({
    el:'#herderLabel',
    methods:{
        label1Click:function (e) {
            alert(e.target.innerText);
        }
    }
});

new Vue({
    el:'#mySlider',
    data:{
        silder_total:5,
        silder:[
            {
                id:4,
                url:'./img/liushu.jpg',
                description:'柳树'
            },
            {
                id:5,
                url:'./img/mei.jpg',
                description:'梅'
            },
            {
                id:7,
                url:'./img/songshu.jpg',
                description:'松树'
            },
            {
                id:6,
                url:'./img/rongshu.jpg',
                description:'榕树'
            },
            {
                id:3,
                url:'./img/zhuzi.jpg',
                description:'竹子'
            }
        ]
    },
    methods:{
        clickSilder:function (id) {
            self.location = "../item/index.html?itemID="+id;
        }
    }
});

new Vue({
    el:'#forth',
    data:{
        but1Style:'white',
        but2Style:'',
        isSettle:true,
        lastestItem:[
            {
                id:1,
                img:'img/guihuashu1.jpg',
                name:'桂花树',
                englishName:'guihuashu.jpg',
                desc:'我是桂花树'
            },
            {
                id:2,
                img:'./img/liulianshu1.jpg',
                name:'榴莲树',
                englishName:'liulianshu.jpg',
                desc:'我是榴莲树'
            },
            {
                id:3,
                img:'./img/zhuzi1.jpg',
                name:'竹子',
                englishName:'zhuzi',
                desc:'我是竹子'
            },
            {
                id:4,
                img:'./img/liushu1.jpg',
                name:'柳树',
                englishName:'liushu',
                desc:'我是柳树'
            },
            {
                id:5,
                img:'./img/mei1.jpg',
                name:'梅',
                englishName:'mei',
                desc:'我是梅'
            },
            {
                id:6,
                img:'./img/rongshu1.jpg',
                name:'榕树',
                englishName:'rongshu',
                desc:'我是rong树'
            },
            {
                id:7,
                img:'./img/songshu1.jpg',
                name:'松树',
                englishName:'songshu',
                desc:'我是松树'
            },
        ],
        newestItem:'',
        showItem: '',
    },
    mounted:function()
    {
        this.showItem = this.lastestItem;
        this.newestItem = new Array();
        var x = 6;
        for(item in this.lastestItem)
        {
            this.newestItem[x--] = this.lastestItem[item];
        }
        console.log(this.newestItem);
        console.log(this.lastestItem);
    },
    methods:{
        forthButClick:function (cur) {
            if(cur == 1)
            {
                this.but1Style = 'white';
                this.but2Style = '';
                this.showItem = this.lastestItem;
            }else{
                this.showItem = this.newestItem;
                this.but2Style = 'white';
                this.but1Style = '';
            }
        },
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