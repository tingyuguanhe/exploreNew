<template>
    <div class="distribute_page">
        <div class="banner">
            <div class="nr_wrap">
                <img class="banner_img" src="../../assets/distribute/banner.png" alt="">
                <div class="text">
                    <div class="banner_ad">多种角色与利益分配，引爆品牌销量</div>
                    <div class="banner_text">它是打动客户的营销工具，将你的故事装进客户的心里</div>
                </div>
            </div>
        </div>
        <ul class="clearfix feature_list">
            <li v-for="(item,index) in featureList" :key="index">
                <div>
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="name">{{item.name}}</div>
                <div class="intro">{{item.intro}}</div>
            </li>
        </ul>
        <!-- 优势 -->
        <div class="superiority">
            <div class="nr_wrap">
                <div class="head">友好分销的优势</div>
                <div class="sub_head">多种角色与利益分配，引爆品牌销量</div>
                <div class="clearfix content">
                    <div class="f_l left">
                        <div class="title">个性化定制</div>
                        <div class="tip">全套开发与计算资源，快速打造个性化分销系统，永久提供技术支持</div>
                        <div class="btn"><button>联系定制</button></div>
                        <img src="../../assets/distribute/11.png" alt="">
                    </div>
                    <ul class="f_r clearfix right">
                        <li v-for="(item, index) in superiorityDataList" :key="index">
                            <div class="clearfix">
                                <span class="name f_l">{{item.name}}</span>
                                <img class="f_l" :src="item.imgUrl" alt="">
                            </div>
                            <div class="intro">
                                <div>{{item.intro1}}</div>
                                <div>{{item.intro2}}</div>
                            </div>
                        </li>  
                    </ul>
                </div>
            </div>
        </div>

        <!--  -->
        <div class="price_list">
            <div class="nr_wrap">
                <div class="head">友好分销2.0 价格</div>
                <div class="sub_head">立即使用，享8折优惠</div>
                <ul class="clearfix">
                    <li v-for="(item,index) in priceList" :key="index">
                        <div>
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <div class="name">{{item.name}}</div> 
                        <div class="intro">{{item.intro}}</div>
                        <div class="price">¥ {{item.price}}</div>
                        <div><button>立即使用</button></div>
                        <img class="discount" v-if="item.discount" src="../../assets/distribute/discount.png">
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
                featureList:[
                    {
                        name:'无限三级分佣',
                        imgUrl: require('../../assets/distribute/1.png'),
                        intro:'每个分销商都可以发展三级分销，结算三级推荐人奖金，演绎圈子几何式野蛮裂变，覆盖精准人群、快速建立分销体系'
                    },
                    {
                        name:'城市代理商与合伙人模式',
                        imgUrl: require('../../assets/distribute/2.png'),
                        intro:'发展品牌的城市代理商，覆盖省市县三个级别；让分销商成为股东，同时享受交易佣金与业绩分红，与分销商全面捆绑'
                    },
                    {
                        name:'多渠道与社交变现',
                        imgUrl: require('../../assets/distribute/3.png'),
                        intro:'通过微博、微信、豆瓣、知乎等多渠道发展分销商，触达不同群体，不落下任何生意机会'
                    }
                ],
                superiorityDataList:[
                    {
                        name:'多渠道推广',
                        intro1:'将商品、个人的推广名片一键分享至各',
                        intro2:'大社交平台，快速引入消费流量',
                        imgUrl: require('../../assets/distribute/6.png')
                    },
                    {
                        name:'单商品设置佣金',
                        intro1:'可为每件商品单独设置佣金比例，利',
                        intro2:'润不高的热销产品也可以分销',
                        imgUrl: require('../../assets/distribute/4.png')
                    },
                    {
                        name:'资金管理体系',
                        intro1:'资金账目一目了然，数据实时互动，',
                        intro2:'佣金轻松提现',
                        imgUrl: require('../../assets/distribute/5.png')
                    },
                    {
                        name:'数据分析',
                        intro1:'实时查看成交金额、佣金结算',
                        intro2:'和分销商业绩排行',
                        imgUrl: require('../../assets/distribute/7.png')
                    },
                    {
                        name:'消息提醒',
                        intro1:'微信、短信、站内信，精准的',
                        intro2:'分佣提醒和下级捆绑提醒',
                        imgUrl: require('../../assets/home/11.png')
                    },
                    {
                        name:'等级奖励',
                        intro1:'根据分销商的等级，设置不同的交易',
                        intro2:'佣金比例',
                        imgUrl: require('../../assets/home/10.png')
                    }
                ],
                priceList:[
                    {
                        name:'一年版',
                        imgUrl: require('../../assets/distribute/8.png'),
                        intro:'让粉丝变渠道',
                        price:'4800',
                        discount: false
                    },
                    {
                        name:'买两年送一年',
                        imgUrl: require('../../assets/distribute/9.png'),
                        intro:'限时九折',
                        price:'8800',
                        discount: true
                    },
                    {
                        name:'永久版',
                        imgUrl: require('../../assets/distribute/10.png'),
                        intro:'送1人天的定制开发',
                        price:'12800',
                        discount: false
                    }
                ]
            }
        }
    }
</script>
<style lang="scss">
    .distribute_page{
        .banner{
            background: #39C19A;
            height: 400px;
            .nr_wrap{
                position: relative;
                height: 400px;
            }   
            .banner_img{
                width: 920px;
                position: absolute;
                left: 50%;
                margin-left: -460px;
                bottom: 0;
            }
            .banner_ad{
                font-size: 49px;
                font-weight: 600;
            }
            .text{
                width: 840px;
                position: absolute;
                left: 50%;
                margin-left: -420px; 
                top:70px;
                color:#fff;
                font-size: 20px;
            }
        }

        ul.feature_list{
            background: #fff;
            padding: 80px 0 50px 0;
            li{
                float: left;
                width: 33%;
                box-sizing: border-box; 
                padding: 0 75px;
            }
        }

        .name{
            font-size: 18px;
            margin: 20px 0 10px 0;
        }
        .intro{
            font-size: 12px;
            color:#ABABAB;
            margin: 6px 0 0 0;
            line-height: 20px;
        }
        .superiority{
            width: 100%;
            min-width: 1200px;
            height: 730px;
            background: url('../../assets/distribute/bg.png') no-repeat;
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
                        margin-bottom: 10px;
                        line-height: 22px;
                    }
                    .btn{
                        text-align: left;
                        padding: 0 48px;
                    }
                    button{
                        width: 120px;
                        height: 34px;
                        line-height: 32px;
                        background: #faac17;
                        border-radius: 30px;
                        color:#fff;
                        font-size: 14px;
                        margin-bottom: 30px;
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

        .price_list{
            padding: 60px 0;
            ul{
                margin: 40px 0 0 0;
                li{
                    float: left;
                    width: 30%;
                    height: 330px;
                    margin-right: 40px;
                    color:#fff;
                    padding: 45px 0;
                    box-sizing: border-box;
                    position: relative;
                    &:nth-child(1){
                        background: #39c19b;
                        button{
                            color:#39c19b;
                        }
                    }
                    &:nth-child(2){
                        background: #2fafbc;
                        button{
                            color:#2fafbc;
                        }
                    }
                    &:nth-child(3){
                        background: #1a8fd2;
                        button{
                            color:#1a8fd2;
                        }
                    }
                }
                .discount{
                    position: absolute;
                    right: 0;
                    top:0;
                }
                .name{
                    margin: 4px 0 0 0;
                }
                .intro{
                    color:#fff;
                    margin: 0;
                }
                .price{
                    font-size: 22px;
                    margin: 20px 0 10px 0;
                }
                button{
                    background: #fff;
                    width: 120px;
                    height: 35px;
                    line-height: 33px;
                    border-radius: 4px;
                    font-size: 15px;
                }
            }
        }

    }
</style>