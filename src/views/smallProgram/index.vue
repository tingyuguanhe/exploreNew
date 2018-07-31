<template>
    <div class="program_page">
        <div class="banner">
            <div class="nr_wrap">
                <img class="banner_img f_l" src="../../assets/program/banner.png" alt="">
                <div class="text">
                    <div class="banner_ad">友好速搭小程序,App 般的体验</div>
                    <div class="banner_text">一键开通，5 端同步，为你链接整个世界</div>
                </div>
            </div>
        </div>
        <!-- 品牌展示 -->
        <div class="nr_wrap brand">
            <div class="head">品牌展示</div>
            <div class="sub_head">来自深圳的互联网营销解决方案，让商业更简单</div>
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
        <!-- 案例 -->
        <div class="cases">
            <div class="nr_wrap">
                <div class="head">友好速搭小程序的案例</div>
                <div class="sub_head">来自深圳的互联网营销解决方案，让商业更简单</div>
                <ul class="clearfix">
                    <li><img src="../../assets/program/img1.png" alt=""></li>
                    <li><img src="../../assets/program/img2.png" alt=""></li>
                    <li><img src="../../assets/program/img3.png" alt=""></li>
                </ul>
            </div>
        </div>
        <!-- 小程序的核心场景 -->
        <div class="core">
            <div class="nr_wrap">
                <div class="head">小程序的核心场景</div>
                <div class="sub_head">做企业、个人、网店、手机微信网站样样行，小程序、APP一键生成即刻拥有！内置超多丰富营销推广工具，超64种营销应用</div>
                <img src="../../assets/program/show.png" alt="">
            </div>
        </div>
        <!-- 步骤 -->
        <div class="step">
            <div class="nr_wrap">
                <div class="head">个性化的互联网解决方案</div>
                <div class="sub_head">来自深圳的互联网营销解决方案，让商业更简单</div>
                <div>
                    <img src="../../assets/program/step.png" alt="">
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
                        name:'丰富灵活的主题',
                        imgUrl: require('../../assets/program/1.png'),
                        intro:'多行业主题，可视化编辑，流畅的体验'
                    },
                    {
                        name:'5端同时拥有',
                        imgUrl: require('../../assets/program/2.png'),
                        intro:'小程序、PC、平板、手机、微站一次拥有'
                    },
                    {
                        name:'同步更新',
                        imgUrl: require('../../assets/program/3.png'),
                        intro:'商品、文章、活动统一管理，同步更新'
                    },
                    {
                        name:'一站管理所有客户',
                        imgUrl: require('../../assets/program/4.png'),
                        intro:'打通 5 端会员与订单体系，客户无需注册多个账号'
                    },
                    {
                        name:'自带流量',
                        imgUrl: require('../../assets/program/5.png'),
                        intro:'附近小程序、微信搜索等功能让你轻松获取流量'
                    },
                    {
                        name:'丰富的营销玩法',
                        imgUrl: require('../../assets/program/6.png'),
                        intro:'自带丰富的营销功能，助你引流转化'
                    }
                ],
            }
        }
    }
</script>
<style lang="scss">
    .program_page{
        .banner{
            background: #39C19A;
            height: 400px;
            .nr_wrap{
                position: relative;
                height: 400px;
            }   
            .banner_img{
                position: absolute;
                left: -70px;
                bottom: 0;
            }
            .banner_ad{
                font-size: 47px;
                font-weight: 600;
            }
            .text{
                position: absolute;
                left: 45%;
                top:150px;
                color:#fff;
                font-size: 20px;
            }
        }

        .brand{
            padding: 70px 0;
            ul{
                margin: 70px 0 0 0;
                li{
                    float: left;
                    width: 200px;
                    padding: 0 26px;
                    box-sizing: border-box;
                }

            }
            .name{
                font-size: 18px;
                margin: 20px 0 10px 0;
            }
            .intro{
                font-size: 12px;
                color:#ABABAB;
            } 
        }
        .cases{
            background: #F5F5F5;
            padding: 70px 0;
            ul{
                margin: 50px 0 0 0;
                li{
                    float: left;
                    width: 32%;
                    margin-right: 15px; 
                    img{
                        width: 100%;
                    }
                    &:last-child{
                        margin-right:0; 
                    }
                }
            }
        }

        .core{
            padding: 80px 0;
            img{
                margin: 40px 0 0 0;
            }
        }
        .step{
            padding: 80px 0;
            width: 100%;
            height: 526px;
            background: url('../../assets/program/bg.png') no-repeat;
            background-position: center center;
            background-size: cover;
            color:#fff;
            box-sizing: border-box;
            .sub_head{
                color:#fff;
            }
            img{
                margin-top: 90px;
                width: 70%;
            }

        }
    }
</style>