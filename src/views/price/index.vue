<template>
    <div class="price_page">
        <div class="banner">
            <div class="nr_wrap">
                <img class="banner_img" src="../../assets/price/banner.png" alt="">
                <div class="text">
                    <div class="banner_ad">不同资源组合，所得超乎想象</div>
                    <div class="banner_text">它是打动客户的营销工具，将你的故事装进客户的心里</div>
                </div>
            </div>
        </div>
        <div class="price_list">
            <div class="nr_wrap">
                <div class="head">价格套餐</div>
                <div class="sub_head">友好速搭，让商业更简单，不同资源组合，所得超乎想象！</div>
            
                <ul class="clearfix">
                    <li v-for="(item,index) in priceListData" :key="index">
                        <div>
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <div class="name">{{item.name}}</div>
                        <div class="intro">{{item.intro}}</div>
                        <div class="price">{{item.price}}</div>
                        <div><button>购买</button></div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 营销推广服务 -->
        <div class="service">
            <div class="text">
                <div class="head">营销推广服务</div>
                <div class="sub_head">微信微博代运营服务，友好速搭社交朋友圈推广，分销系统，口碑营销，粉丝通，腾讯社交广告，OPPO手机广告，今日头条广告，微信朋友圈广告，网易有道智选原生平台广告投放，SEO服务，友好速搭砍价业务等。</div>
            </div>
            <img src="../../assets/price/bg_icon.png" alt="">
            <div class="btn"><button>立即咨询</button></div>
        </div>
        <!-- 常见问题 -->
        <div class="issues">
            <div class="nr_wrap">
                <div class="head">常见问题</div>
                <ul class="clearfix">
                    <li class="clearfix" v-for="(item,index) in issueList" :key="index">
                        <div class="f_l">
                            <img src="../../assets/price/help.png"></img>
                        </div>
                        <div class="f_l text">
                            <div class="title">{{item.title}}</div>
                            <div class="an">{{item.an}}</div>
                        </div>
                        
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                priceListData:[
                    {
                        name:'企业标准定制版',
                        imgUrl: require('../../assets/price/1.png'),
                        intro:'完美展示你的产品和服务',
                        price:'¥ 6980'
                    },
                    {
                        name:'企业品牌定制版',
                        imgUrl: require('../../assets/price/2.png'),
                        intro:'完美展示你的品牌和创意',
                        price:'¥ 19800'
                    },
                    {
                        name:'电商专业定制版',
                        imgUrl: require('../../assets/price/3.png'),
                        intro:'强大的电商运营系统个性化经营你的品牌',
                        price:'¥ 29800'
                    },
                    {
                        name:'电商豪华定制版',
                        imgUrl: require('../../assets/price/4.png'),
                        intro:'独享公网IP与计算资源为客户带来绝佳访问体验',
                        price:'¥ 69800'
                    }
                ],
                issueList:[
                    {
                        title:'友好速搭是否对交易抽成？',
                        an:'不抽成，但支付宝、微信支付等第三方交易系统需要收取一定手续费。'
                    },
                    {
                        title:'可以使用独立域名吗？',
                        an:'可以。如果有独立域名，可以通过管理后台的域名设置绑定；如果没有，可通过友好速搭购买域名，智能解析到站点。'
                    },
                    {
                        title:'友好速搭是否订单、商品等数据是否可以导出？',
                        an:'可以，不止订单和商品，友好速搭开放 20 多个对象的 API，各类数据都可通过 API 进行导出。还可通过安装的应用插件，将订单、商品等数据，以 Excel、CSV 等格式导出，或者与 ERP、CRM 等系统对接。'
                    },
                    {
                        title:'是否需要购买主机或带宽？',
                        an:'不需要。友好速搭的基础设施，包含主机、带宽。友好速搭使用近百台主机集群，选择高品质网络，自建 CDN 节点，不限流量，确保你的站点高效、稳定。'
                    },
                    {
                        title:'是否需要购买主机或带宽？',
                        an:'在账户后台，绑定银行卡，然后申请资金提现，通常 3 个工作日处理完成。'
                    },
                    {
                        title:'友好速搭的数据是否安全？',
                        an:'作为 SaaS 服务，数据安全一直是工程团队的工作重心，通过集群、备份、安全防御等多种措施，全方位确保平台的数据安全。'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
.price_page{
    .banner{
        background: #39C19A;
        height: 400px;
        .nr_wrap{
            position: relative;
            height: 400px;
        }   
        .banner_img{
            width: 490px;
            position: absolute;
            left: 50%;
            margin-left: -245px;
            bottom: 0;
        }
        .banner_ad{
            font-size: 49px;
            font-weight: 600;
        }
        .text{
            width: 640px;
            position: absolute;
            left: 50%;
            margin-left: -320px; 
            top:50px;
            color:#fff;
            font-size: 20px;
        }
    }
    .price_list{
        .name{
            font-size: 18px;
            margin: 20px 0 10px 0;
        }
        .intro{
            font-size: 12px;
            color:#ABABAB;
        }

        padding: 80px 0;
        ul{
            margin: 60px 0 0 0;
            li{
                float: left;
                width: 25%;
            }
        }
        .price{
            color: #39C19A;
            font-size: 30px;
            margin: 30px 0 10px 0;
        }
        button{
            width: 120px;
            height: 40px;
            background: #39C19A;
            line-height: 37px;
            color:#fff;
            font-size: 16px;
        }

    }
    .service{
        width: 100%;
        height: 430px;
        background: #4A789E;
        position: relative;
        img{
            position: absolute;
            left: 0;
            bottom:0;
        }
        .head{
            font-size: 28px;
        }
        .sub_head{
            width: 100%;
            color:#fff;
            margin: 20px 0 0 0;
        }
        .text{
            width: 560px;
            position: absolute;
            top:80px;
            margin-left: -280px;
            left: 50%;
            color:#fff;
        }
        button{
            background: #FFAE00;
            width: 230px;
            height: 45px;
            line-height: 42px;
            color:#fff;
            font-size: 18px;
        }
        .btn{
            position: absolute;
            bottom: 140px;
            left: 50%;
            margin-left: -115px;
        }
    }

    .issues{
        padding: 70px 0;
        background: #F5F5F5;
        ul{
            margin-top: 30px;
            li{
                text-align: left;
                float: left;
                width: 49%;
                padding: 34px 0;
                height: 150px;
                box-sizing: border-box;
                .title{
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                .an{
                    color: #9D9D9D;
                    font-size: 12px;
                }
                .text{
                    width: 80%;
                    margin-left: 13px;
                }
                &:nth-child(2n+1){
                    border-right: 1px solid #E7E7E7;
                }
                &:nth-child(2n){
                    padding-left: 80px; 
                }
            }
        }
    }

    
}
</style>