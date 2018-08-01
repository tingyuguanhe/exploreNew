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

        <!-- 友好搭建，让您的网站和微信公众号无所不能 -->
        <div class="list">
            <div class="nr_wrap">
                <div class="head">友好搭建，让您的网站和微信公众号无所不能</div>
                <div class="sub_head">做企业、个人、网店、手机微信网站样样行，小程序、APP一键生成即刻拥有！内置超多丰富营销推广工具，超64种营销应用</div>
                <ul class="clearfix">
                    <li v-for="(item,index) in listData" :key="index">
                        <div>
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <div class="name">{{item.name}}</div>
                        <div class="intro">{{item.intro1}}</div>
                        <div class="intro">{{item.intro2}}</div>
                    </li>
                </ul>
            </div>
        </div>
<!-- 个性化的互联网解决方案 -->
        <div class="plan">
            <div class="nr_wrap">
                <div class="head">个性化的互联网解决方案</div>
                <div class="sub_head">来自深圳的互联网营销解决方案，让商业更简单</div>
                <ul class="clearfix">
                    <li v-for="(item,index) in planData" :key="index">
                        <div>
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <div class="name">{{item.name}}</div>
                        <div class="intro">{{item.intro}}</div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 我们的案例 -->
        <div class="cases">
            <div class="nr_wrap">
                <div class="head">我们的案例</div>
                <div class="sub_head">认真服务客户，做好每个细节，收获客户满意，诚挚服务为您</div>
            </div>
            <div>
                <img src="../../assets/home/26.png" alt="">
            </div>
        </div>

        <!-- 提交信息 -->
        <my-form></my-form>
    </div>
</template>

<script>
    import MyForm from '@/components/form'
    export default{
        components: {
            MyForm
        },
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
                listData:[
                    {
                        name:'友好砍价',
                        intro1:'免费吸粉引流',
                        intro2:'免费提高转化',
                        imgUrl: require('../../assets/home/12.png')
                    },
                    {
                        name:'分销应用',
                        intro1:'多种角色与利益分配',
                        intro2:'引爆品牌销量',
                        imgUrl: require('../../assets/home/14.png')
                    },
                    {
                        name:'全渠道 ERP',
                        intro1:'同步管理友好速搭、淘宝、',
                        intro2:'天猫、京东等50类销售渠道',
                        imgUrl: require('../../assets/home/15.png')
                    },
                    {
                        name:'客服工具',
                        intro1:'网易自主研发智能客服机器人',
                        intro2:'',
                        imgUrl: require('../../assets/home/16.png')
                    },
                    {
                        name:'大数据分析',
                        intro1:'广告、活动、用户',
                        intro2:'行为等经营数据实时分析',
                        imgUrl: require('../../assets/home/13.png')
                    },
                    {
                        name:'订单打印',
                        intro1:'多店铺、多平台',
                        intro2:'订单统一管理、打印',
                        imgUrl: require('../../assets/home/18.png')
                    },
                    {
                        name:'办公协同',
                        intro1:'高效易用的一站式',
                        intro2:'协作与管理平台',
                        imgUrl: require('../../assets/home/17.png')
                    },
                    {
                        name:'二维码生成',
                        intro1:'不同场景二维码轻松生成',
                        intro2:'',
                        imgUrl: require('../../assets/home/20.png')
                    },
                    {
                        name:'评价插件',
                        intro1:'全方位管理商品评价及回复',
                        intro2:'',
                        imgUrl: require('../../assets/home/19.png')
                    },
                    {
                        name:'商品搭售',
                        intro1:'自定义商品推荐和搭配，多',
                        intro2:'规则多组合灵活销售',
                        imgUrl: require('../../assets/home/21.png')
                    }
                ],
                planData:[
                    {
                        name:'分销商城',
                        intro:'极易用的三级分销与代理商模式，联合多渠道推广与社交登录',
                        imgUrl: require('../../assets/home/22.png')
                    },
                    {
                        name:'跨境电商',
                        intro:'对接海关、物流、仓配系统，支持直邮、海外仓、保税仓等模式',
                        imgUrl: require('../../assets/home/23.png')
                    },
                    {
                        name:'商业连锁',
                        intro:'建立品牌主体与连锁门店多级商城体系，快速接入线下 POS、ERP、 等系统',
                        imgUrl: require('../../assets/home/24.png')
                    },
                    {
                        name:'城市综合体',
                        intro:'建立统一的消费、会员、营销体系，灵活打造综合体全域运营方案',
                        imgUrl: require('../../assets/home/25.png')
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
            
        }
    }
    .intro{
        color:#ABABAB;
        font-size: 12px;
        margin: 10px 0 0 0;
        line-height: 22px;
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

    .list{
        padding: 120px 0;
        .sub_head{
            margin-bottom: 100px;
        }
        ul{
            li{
                float: left;
                width: 20%;
                height: 240px;
                padding: 30px 40px;
                box-sizing: border-box;
                border-right: 1px solid #efefef;
                border-bottom: 1px solid #efefef;
                .name{
                    margin: 10px 0;
                }
                &:nth-child(6),&:nth-child(7),&:nth-child(8),&:nth-child(9),&:nth-child(10){
                    border-bottom: none;
                }
                &:nth-child(5),&:nth-child(10){
                    border-right: none;
                }
                .intro{
                    margin: 0;
                    line-height: 18px;
                }
            }
        }
    }

    .plan{
        background: #F4F8F9;
        padding: 80px 0 100px 0;
        ul{
            margin: 80px 0 0 0;
            li{
                float: left;
                width: 25%;
                padding: 0 44px;
                box-sizing: border-box;
                img{
                    width: 140px;
                }
                .name{
                    color:#000;
                    margin: 10px 0;
                }
                .intro{
                    color:#666666;
                }
            }
        }
    }

    .cases{
        padding: 80px 0;
        img{
            width: 100%;
        }
    }
}
</style>