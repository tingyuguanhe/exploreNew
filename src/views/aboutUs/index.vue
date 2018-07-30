<template>
    <div class="about_us">
        <div class="banner">
            <div class="nr_wrap">
                <img class="global f_l" src="../../assets/aboutUs/global.png" alt="">
                <img class="person" src="../../assets/aboutUs/person.png" alt="">
                <div class="text">
                    <div class="banner_ad">先进的技术+远瞻的眼光</div>
                    <div class="banner_text">互联网行业瞬息万变，谁能洞察未来，谁就能带领行业发展</div>
                </div>
            </div>
        </div>
        <!-- 关于我们 -->
        <div class="us">
            <div class="nr_wrap">
                <div class="head">
                    关于我们
                    <div><img src="../../assets/aboutUs/title.png" alt=""></div>
                </div> 
                <div class="clearfix content">
                    <img class="f_l" src="../../assets/aboutUs/img.png" alt="">
                    <div class="f_l text">
                        
                        <div>友好速搭是亿众骏达网络科技（深圳）有限公司开发的 SaaS 跨屏建站工具与综合服务平台，为消费升级品牌提供 SaaS 一站式服务，</div>
                        <div>
                            <p>依托技术、企服、营销三大服务，协助品牌打造个性化交易系统，</p>
                            <p>并快速链接行业资源与精准流量；</p>
                            <p>部署在亚太区的三大数据中心、千余台云服务主机集群及可承载每日千万级PV的基础架构，</p>
                            <p>持续为品牌站点运营保驾护航。</p>
                        </div>
                        <div>
                            <p>积累了雄厚的自主研发实力和丰富的互联网整合营销案例，</p>
                            <p>为企业打造更完善的企业互联网解决方案</p>
                            <p>以Smarty架构为基础，</p>
                            <p>开发业内领先的智能响应式技术和网站建设方案为企业提供多元、高效、快速的网站建设方案。</p>
                        </div>
                        <div>
                            <p>整合优质企业服务商，为企业建设开放式的企业“互联网+”商业生态圈，</p>
                            <p>满足企业各个阶段不同需求，提升品牌价值，同时降低运营成本</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 联系我们 -->
        <div class="contact_us">
            <div class="nr_wrap">
                <div class="head">
                    联系我们
                    <div><img src="../../assets/aboutUs/title.png" alt=""></div>
                </div> 
                <div>
                    <img class="address_img" src="../../assets/aboutUs/address_img.jpg" alt="">
                </div>
                <div class="tool_wrap">
                    <ul class="clearfix">
                        <li>
                            <img src="../../assets/aboutUs/tel.png" alt="">
                            <span>电话：0551-85202016</span>
                        </li>
                        <li>
                            <img src="../../assets/aboutUs/wechat.png" alt="">
                            <span>微信：13033001303</span>
                        </li>
                        <li>
                            <img src="../../assets/aboutUs/address.png" alt="">
                            <span>地址：合肥滨湖新区万达未来塔B座1505（地铁1号线万年埠站C口）</span>
                        </li>
                    </ul>
                </div>
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

            }
        }
    }
</script>
<style lang="scss">
.about_us{
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
    .us,.contact_us{
        padding: 60px 0 80px 0;
        border-bottom: 1px solid #E7E7E7;
        
    }
    .content{
        margin: 50px 0 0 0;
        img{
            width: 460px;
        }
        .text{
            width: 740px;
            text-align: left;
            color:#9D9D9D;
            padding: 20px 0 0 60px;
            box-sizing: border-box;
            >div{
                margin: 0 0 20px 0;
            }
            p{
                margin:0;
                padding:0;
            }
        }

    }
    
    .address_img{
        margin: 40px 0 0 0;
    }

    .tool_wrap{
        border-top: 1px solid #E7E7E7;
        border-bottom: 1px solid #E7E7E7;
        padding: 24px 0;
        margin: 40px 0;
        ul{
            li{
                float: left;
                width: 25%;
                text-align: left;
                img{
                    vertical-align: bottom;
                }
                &:last-child{
                    width: 50%;
                }
            }
        }
    }
   
}
</style>