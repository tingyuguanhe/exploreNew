<template>
    <div class="website_page">
        <div class="banner">
            <div class="nr_wrap">
                <img class="banner_img f_l" src="../../assets/website/banner.png" alt="">
                <div class="text">
                    <div class="banner_ad">网站绝非企业营销附属器</div>
                    <div class="banner_text">它是打动客户的营销工具，将你的故事装进客户的心里</div>
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
        <!-- 电商系统 -->
        <div class="business_sys">
            <div class="nr_wrap">
                <div class="head">电商系统</div>
                <div class="sub_head">来自深圳的互联网营销解决方案，让商业更简单</div>   
                <ul class="clearfix">
                    <li v-for="(item,index) in businessSysData" :key="index">
                        <div><img :src="item.imgUrl" alt=""></div>
                        <div class="name">{{item.name}}</div>
                        <div class="intro">{{item.intro}}</div>
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
        <div class="make_order">
            <img src="../../assets/website/text.png" alt="">
            <div>
                <button>立即定制</button>
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
                businessSysData:[
                    {   
                        name:'电商基础功能',
                        imgUrl: require('../../assets/website/5.png'),
                        intro:'媲美 BAT 的平台级技术积累'
                    },
                    {
                        name:'全球地址库',
                        imgUrl: require('../../assets/website/6.png'),
                        intro:'多国语言与地址库支持，敞开门做全球生意'
                    },
                    {
                        name:'电商营销',
                        imgUrl: require('../../assets/website/7.png'),
                        intro:'折扣、积分、优惠券、满减/折、秒杀、砍价、积分宝、口令红包等营销工具'
                    },
                    {
                        name:'通知',
                        imgUrl: require('../../assets/website/8.png'),
                        intro:'微信、短信、邮件通知模板灵活编辑，让顾客感受细致关怀'
                    },
                    {
                        name:'多人协作',
                        imgUrl: require('../../assets/website/9.png'),
                        intro:'多名管理员同步运营与管理，按角色分配权限，配合操作日志让团队协作高效无忧'
                    },
                    {
                        name:'域名服务',
                        imgUrl: require('../../assets/website/10.png'),
                        intro:'一站购买、解析、备案域名，或绑定已有域名，轻松使用品牌专属标识'
                    },
                    {
                        name:'企业邮箱',
                        imgUrl: require('../../assets/website/11.png'),
                        intro:'免费生成以网站域名为后缀的企业邮箱，提升品牌形象、优化内部管理'
                    },
                    {
                        name:'全球聚合支付',
                        imgUrl: require('../../assets/website/12.png'),
                        intro:'折扣、积分、优惠券、满减/折、秒杀、砍价、积分宝、口令红包等营销工具'
                    },
                    {
                        name:'数据分析',
                        imgUrl: require('../../assets/website/13.png'),
                        intro:'多维度数据分析引擎，实时把控网站流量来源，基于数据灵活调整运营策略'
                    },
                    {
                        name:'会员与积分',
                        imgUrl: require('../../assets/website/14.png'),
                        intro:'强大灵活会员积分体系，提升顾客、粉丝、访客的活跃度'
                    },
                    {
                        name:'社交账号同步',
                        imgUrl: require('../../assets/website/15.png'),
                        intro:'微信、微博、QQ、豆瓣、知乎等主流社交帐号直连，'
                    },
                    {
                        name:'网站 SEO',
                        imgUrl: require('../../assets/website/19.png'),
                        intro:'全方位的 SEO 优化服务，低成本获取百度等搜索引擎优质流量'
                    },
                    {
                        name:'SSL 安全证书',
                        imgUrl: require('../../assets/website/18.png'),
                        intro:'自动部署免费或付费的安全证书，阻断流量劫持，杜绝非法信息植入'
                    },{
                        name:'独立 IP',
                        imgUrl: require('../../assets/website/16.png'),
                        intro:'高级版本独享公网IP、带宽与计算资源，从容面对流量洪峰'
                    },
                    {
                        name:'更多',
                        imgUrl: require('../../assets/website/17.png'),
                        intro:'详情查看更多…'
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
    .website_page{
        .banner{
            background: #39C19A;
            height: 400px;
            .nr_wrap{
                position: relative;
                height: 400px;
            }   
            .banner_img{
                position: absolute;
                left: 40px;
                bottom: -2px;
            }
            .banner_ad{
                font-size: 49px;
                font-weight: 600;
            }
            .text{
                position: absolute;
                left: 50%;
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
                    width: 25%;
                    padding: 0 35px;
                    box-sizing: border-box;
                }
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

        .business_sys{
            width: 100%;
            height: 1020px;
            background: url('../../assets/website/bg2.png') no-repeat;
            background-position: center center;
            background-size: cover;
            .nr_wrap{
                padding: 70px 0;
                box-sizing: border-box;
            }
            ul{
                margin: 70px 0 0 0;
                li{
                    background: #fff;
                    float: left;
                    width: 230px;
                    height: 230px;
                    margin:0 10px 10px 0;
                    padding: 30px;
                    box-sizing: border-box;
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
        .make_order{
            width: 100%;
            height: 290px;
            background: url('../../assets/website/bg.png') no-repeat;
            background-size: cover;
            background-position: center center;
            padding: 60px 0 0 0;
            box-sizing: border-box;
            button{
                background: transparent;
                width: 160px;
                height: 40px;
                line-height: 37px;
                border: 1px solid #fff;
                color: #fff;
                font-size: 16px;
                margin: 20px 0 0 0;
            }
        }

    }
</style>