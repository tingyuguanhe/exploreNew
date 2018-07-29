<template>
    <div class="home_page">
        <div class="banner"></div> 
        <div class="nr_wrap">
            <ul class="clearfix range">
                <li v-for="(item,index) in list" :key="index">
                    <div><img :src="item.imgUrl" alt=""></div>
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
                        <img src="../../assets/home/5.png" alt="">
                    </div>
                    <ul class="f_r clearfix right">

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
                list:[
                    {
                        name:'企业站',
                        intro:'以突出品牌官网特性为宗旨，定制专属设计方案',
                        imgUrl: require('../../assets/home/4.png')
                    },
                    {
                        name:'电商站',
                        intro:'自己的电商平台，搭建独立商城系统，轻松开展线上零售业务',
                        imgUrl: require('../../assets/home/1.png')
                    },
                    {
                        name:'微信小程序',
                        intro:'打造小程序+公众号一体化微信商城，小程序开发简单',
                        imgUrl: require('../../assets/home/2.png')
                    },
                    {
                        name:'快速分销商品',
                        intro:'多种角色与利益分配，引爆品牌销量',
                        imgUrl: require('../../assets/home/3.png')
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.home_page{
    .banner{
       width:100%;
       height: 575px;
       background: url('../../assets/home/banner.png') no-repeat;
       background-size: cover;
       background-position:center center;
    }
    ul.range{
        li{
            float: left;
            width: 25%;
            height: 220px;
            margin: 80px 0 0 0;
            padding: 0 64px;
            box-sizing: border-box;
            .name{
                font-size: 18px;
                margin: 10px 0;
            }
            .intro{
                color:#ABABAB;
                font-size: 12px;
            }
        }
    }

    .superiority{
        width: 100%;
        height: 730px;
        background: url('../../assets/home/bg.png') no-repeat;
        background-size: cover;
        background-position:center center;
        .nr_wrap{
            padding: 70px 0;
        }
        .head{
            font-size: 28px;
        }
        .sub_head{
            color:#9D9D9D;
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
                    margin: 30px 0 10px 0;
                    padding: 0 48px;
                    box-sizing: border-box;
                }
                .tip{
                    font-size: 12px;
                    text-align: left;
                    padding: 0 48px;
                    box-sizing: border-box;
                    margin-bottom: 50px;
                }
            }
           ul .right{

           }
        }
    }
}
</style>