<template>
    <div class="marketing_page">
        <div class="banner">
            <div class="nr_wrap">
                <img class="banner_img f_l" src="../../assets/marketing/banner.png" alt="">
                <div class="text">
                    <div class="banner_ad">网站绝非企业营销附属器</div>
                    <div class="banner_text">它是打动客户的营销工具，将你的故事装进客户的心里</div>
                </div>
            </div>
        </div>

        <div class="nr_wrap brand">
            <ul class="clearfix">
                <li v-for="(item,index) in brandData" :key="index">
                    <div>
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="name">{{item.name}}</div>
                    <div class="intro">{{item.intro}}</div>
                </li>
            </ul>
        </div>

        <!-- 优势 -->
        <div class="superiority">
            <div class="nr_wrap">
                <div class="head">友好速搭网站建设营销优势</div>
                <div class="sub_head">来自深圳的互联网营销解决方案，让商业更简单</div>
                <div class="clearfix content">
                    <div class="f_l left">
                        <div class="title">丰富的营销推广</div>
                        <div class="tip">口碑营销、精准营销、百科营销、社群推广、SEO 优化等五大营销体系，更优惠的价格更优质的服务</div>
                        <img src="../../assets/marketing/icon.png" alt="">
                    </div>
                    <ul class="f_r clearfix right">
                        <li v-for="(item, index) in superiorityDataList" :key="index">
                            <div class="clearfix">
                                <span class="name f_l">{{item.name}}</span>
                                <img class="f_l" :src="item.imgUrl" alt="">
                            </div>
                            <div class="intro">{{item.intro}}</div>
                        </li>  
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                brandData:[
                    {
                        name:'灵活的主题编辑',
                        imgUrl: require('../../assets/website/3.png'),
                        intro:'使用模板、拖拽、代码编辑或风格切换，快速定位品牌特色'
                    },
                    {
                        name:'强大的品牌轻博客',
                        imgUrl: require('../../assets/website/4.png'),
                        intro:'文字、图片、视频、音频聚合编辑，用合适的方式撰写品牌故事'
                    },
                    {
                        name:'完善的内容管理',
                        imgUrl: require('../../assets/website/2.png'),
                        intro:'文章创作、图片分享、视频发布、营销页制作等轻松实现，让顾客实时了解品牌动态'
                    },
                    {
                        name:'视频与直播',
                        imgUrl: require('../../assets/website/1.png'),
                        intro:'高性能视频传输与直播支持，访客实时互动，每时每刻为品牌刷存在'
                    }
                ],
                superiorityDataList:[
                    {
                        name:'精准营销',
                        intro:'百度推广，腾讯广点通，微博粉丝通锁定目标人群，实现精准营销',
                        imgUrl: require('../../assets/home/6.png')
                    },
                    {
                        name:'口碑营销',
                        intro:'增加网络曝光与知名度，提升企业形象，建立品牌信任度，促进消费转化',
                        imgUrl: require('../../assets/home/8.png')
                    },
                    {
                        name:'社交推广',
                        intro:'朋友圈、微博、QQ空间，真人分享有效触达25W+传播个体',
                        imgUrl: require('../../assets/home/7.png')
                    },
                    {
                        name:'百科营销',
                        intro:'权威平台展示，建立品牌公信力，增强用户对品牌信任',
                        imgUrl: require('../../assets/home/9.png')
                    },
                    {
                        name:'微信无缝对接',
                        intro:'全面整合微信营销，数据对接微信互动与分享',
                        imgUrl: require('../../assets/home/11.png')
                    },
                    {
                        name:'SEO优化',
                        intro:'布局关键内容，捕获精准流量，用户更容易发现你的品牌',
                        imgUrl: require('../../assets/home/10.png')
                    }

                ],
            }
        }
    }
</script>
<style lang="scss">
.marketing_page{
    .banner{
        background: #39C19A;
        height: 400px;
        .nr_wrap{
            position: relative;
            height: 400px;
        }   
        .banner_img{
            position: absolute;
            left: 0px;
            bottom: 0;
        }
        .banner_ad{
            font-size: 49px;
            font-weight: 600;
        }
        .text{
            position: absolute;
            left: 55%;
            text-align: left;
            top:150px;
            color:#fff;
            font-size: 20px;
        }
    }

    .name{
        font-size: 18px;
        margin: 20px 0 10px 0;
    }
    .intro{
        font-size: 12px;
        color:#ABABAB;
        margin: 10px 0 0 0;
        line-height: 22px;
    }

    .brand{
        padding: 50px 0;
        ul{
            margin: 40px 0 0 0;
            li{
                float: left;
                width: 25%;
                padding: 0 35px;
                box-sizing: border-box;
            }
        }
    }

    .superiority{
        width: 100%;
        height: 730px;
        background: url('../../assets/marketing/bg.png') no-repeat;
        background-size: cover;
        background-position:center center;
        .nr_wrap{
            padding: 70px 0;
        }
        .content{
            margin-top: 50px;
            .left{
                width:285px;
                height: 465px;
                background: #39C19A;
                color:#fff;
                padding: 30px 0;
                box-sizing: border-box;
                .title{
                    font-size: 25px;
                    text-align: left;
                    margin: 30px 0 2px 0;
                    padding: 0 48px;
                    box-sizing: border-box;
                }
                .tip{
                    font-size: 12px;
                    text-align: left;
                    padding: 0 48px;
                    box-sizing: border-box;
                    margin-bottom: 50px;
                    line-height: 22px;
                }
            }
           ul.right{
                width: 900px;
                li{
                    float: left;
                    background: #fff;
                    width: 32%;
                    margin: 0 14px 14px 0;
                    padding: 70px 40px;
                    box-sizing: border-box;
                    height: 225px;
                    text-align:left;
                    &:nth-child(3n){
                        margin-right:0; 
                    }
                    .name{
                        font-size: 16px;
                        margin: 3px 10px 0 0;
                    }
                }
           }
        }
    }
}
</style>