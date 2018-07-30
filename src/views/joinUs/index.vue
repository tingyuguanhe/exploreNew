<template>
    <div class="join_us">
        <div class="banner">
            <div class="nr_wrap">
                <img class="global f_l" src="../../assets/aboutUs/global.png" alt="">
                <img class="person" src="../../assets/aboutUs/person.png" alt="">
                <div class="text">
                    <div class="banner_ad">网站绝非企业营销附属器</div>
                    <div class="banner_text">它是打动客户的营销工具，将你的故事装进客户的心里</div>
                </div>
            </div>
        </div>
        <div class="join">
            <div class="nr_wrap">
                <div class="head">
                    加入我们
                    <div><img src="../../assets/aboutUs/title.png" alt=""></div>
                </div>
                <div class="personnel">
                    <div class="title">人才观</div>
                    <div class="intro">优秀是一种习惯，是种沉淀；它可能由你做无数件小事积累的做事习惯，思维习惯等构成！人才：你交给他一件事情他能办好，再交给他一件事情他依旧办好！</div>
                    <div class="title m_30">寻找加入我们的伙伴</div>
                    <div class="intro">1、对产品和服务的质量有要求、有理想的人；2、合作超过1年以上、专业过硬、服务质量过硬的人可以成为公司技术中心合伙人；3、专业和管理双垂直发展路线；4、公司精英国内外旅游；5、提供有竞争力的薪酬福利制度、资金分红制度。</div>
                </div>
                <div class="tel_sale">
                    <div class="title clearfix">
                        <span class="f_l">电话销售</span>
                        <span class="f_r date">2018-06-30</span>
                    </div>
                    <div class="intro clearfix">
                        <span class="f_l">喜爱自己的工作，有责任有上进心</span>
                        <span class="f_r btn">--</span>
                    </div>
                    <div class="line"></div>
                    <div class="detail">
                        <p>【岗位职责】：</p>   
                        <p>1．通过电话、网络与客户进行沟通，寻找到意向客户</p>
                        <p>2．维护、发展、建立长期、良好、稳固的客情体系</p>   
                        <p>3．完成领导安排的其他任务；</p>
                        <p>4．整理相关客户资料。</p>
                        <p>【岗位职责】：</p>
                        <p>1．表达清晰，应变能力强，语言赋有感染力；</p>
                        <p>2．热爱互联网，热爱生活；</p>
                        <p>3．自信、乐观、豁达、有团队意识和服从意识；</p>
                        <p>4．有赚钱的欲望，喜欢突破自己获得进步的成就感。</p>
                        <button>投递简历</button>
                    </div>
                </div>
                 
                <ul class="job_list">
                    <li v-for="(item,index) in jobList" :key="index">
                        <div class="clearfix">
                            <span class="name f_l">{{item.name}}</span>
                            <span class="date f_r">{{item.date}}</span>
                        </div>
                        <div class="clearfix">
                            <span class="intro f_l">{{item.intro}}</span>
                            <span class="add_btn f_r">+</span>
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
                jobList:[
                    {
                        name:'电话代表',
                        intro:'喜爱自己的工作，有责任有上进心',
                        date:'2018-06-30'
                    },
                    {
                        name:'电话代表',
                        intro:'喜爱自己的工作，有责任有上进心',
                        date:'2018-06-30'
                    },
                    {
                        name:'电话代表',
                        intro:'喜爱自己的工作，有责任有上进心',
                        date:'2018-06-30'
                    },
                    {
                        name:'电话代表',
                        intro:'喜爱自己的工作，有责任有上进心',
                        date:'2018-06-30'
                    }
                ]
            }
        }
    }
</script>
<style lang="scss">
.join_us{
    .banner{
        background: #39C19A;
        height: 400px;
        .nr_wrap{
            position: relative;
            height: 400px;
        }   
        .global{
            position: absolute;
            left: 80px;
            bottom: 30px;
            opacity: 0.3;
        }
        .person{
            position: absolute;
            left: 160px;
            top: 94px;
        }
        .banner_ad{
            font-size: 49px;
            font-weight: 600;
        }
        .text{
            position: absolute;
            left: 50%;
            top:140px;
            color:#fff;
            font-size: 20px;
        }
    }

    .join{
        padding: 60px 0 80px 0;
        background: #F8F8F8;
        .contact_us{
            padding: 60px 0 80px 0;
            border-bottom: 1px solid #E7E7E7;  
        }
    }
    .personnel,.tel_sale{
        margin: 30px 0 0 0;
        background: #fff;
        padding: 30px 40px;
        text-align: left;
        .title{
            font-size: 16px;
            margin: 10px 0;
            .date{
                color: #9D9D9D;
            }
        }
        .m_30{
            margin: 30px 0 10px 0;
        }
        .intro{
            font-size: 14px;
            color:#9D9D9D;
            .btn{
                width:40px;
                height: 15px;
                line-height: 13px;
                background: #39C19A;
                border-radius: 20px;
                color:#fff;
                text-align: center;
            }
        }
    }
    .line{
        width: 60%;
        height: 1px;
        background: #E7E7E7;
        margin: 20px 0 0 0;
    }
    .detail{
        position: relative;
        p{
            color:#9D9D9D;
            padding:0;
            margin: 10px 0;
        }
        button{
            background: #39C19A;
            width: 140px;
            height: 40px;
            line-height: 37px;
            border-radius: 20px;
            color:#fff;
            font-size: 16px;
            position: absolute;
            right: 10px;
            bottom:30px;
        }
    }
    
    ul.job_list{
        margin: 20px 0 0 0;
        li{
            text-align: left;
            padding: 20px;
            background: #fff;
            margin: 0 0 20px 0;
            .name{
                font-size: 16px;
            }
            .intro{
                color:#9D9D9D;
                font-size: 14px;
                margin: 10px 0 0 0;
            }
            .date{
                color:#9D9D9D;
                font-size: 14px;
            }
            .add_btn{
                background: #BCBCBC;
                width: 40px;
                height: 16px;
                line-height: 15px;
                color: #fff;
                font-size: 15px;
                text-align: center;
                border-radius: 20px;
                margin: 14px 0 0 0;
            }
        }
    }
    
}
</style>