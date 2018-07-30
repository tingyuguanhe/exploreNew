<template>
    <div class="page_bottom">
        <div class="nr_wrap clearfix">
            <div class="f_l left">
                <img src="../../assets/home/logo.png" alt="">
                <div class="tip">个性化的互联网解决方案-让商业更简单</div>
                <div class="feature">高品质 · 低门槛 · 强大安全</div>
            </div>
            <ul class="f_l clearfix right">
                <li>
                    <div class="title">服务热线<span></span></div>
                    <div class="phone_num">0551-85202016</div> 
                    <div class="time">售前咨询（09:00-18:00）</div>
                </li>  
                <li>
                    <div class="title">服务热线<span></span></div>
                    <div class="address">安徽省合肥滨湖新区万达未来塔B座1505地铁1号线万年埠站C口）</div>
                    <div class="phone">座机：0551-85202016</div>
                    <div class="code">微信：13033001303</div>
                            
                </li>
                <li>
                    <div class="title">关注公众号<span></span></div>
                    <div class="wechat_code">
                        <img src="../../assets/home/code.png" alt="">
                        <div class="job">客户经理微信</div>
                    </div> 
                </li>
            </ul>
        </div>
        <div class="footer">
            <div>Copyright&copy;2008-2016 合肥探新网络科技有限公司 版权所有 皖ICP备10206788号</div>
            <div>&copy;2018 youhaosuda.com All rights reserved.</div>
        </div>
    </div>
</template>

<style lang="scss">
    .page_bottom{
        background: #fff;
        padding: 90px 0 0 0;
        .tip{
            color:#AEAEAE;
            margin: 10px 0;
        }
        .feature{
            background: #189B75;
            height: 36px;
            line-height: 36px;
            color:#fff;
        }
        .left{
            width: 300px;
        }
        ul.right{
            width: 800px;
            margin: 0 0 0 100px;
            li{
                float: left;
                width: 33%;
                text-align: left;
                .title{
                    position: relative;
                }
                span{
                    position: absolute;
                    left: 0;
                    top: 24px;
                    width: 34px;
                    height: 1px;
                    background: #9d9d9d;
                }
                &:nth-child(3){
                    padding: 0 0 0 30px;
                    box-sizing: border-box;
                }
            }
            .phone_num{
                font-size: 30px;
                color:#39C19A;
                margin: 40px 0 20px 0;
            }
            .time,.address,.phone,.code{
                color:#AEAEAE;
            }
            .address{
                margin: 40px 0 10px 0;
            }
            .phone{
                margin: 10px 0;
            }
            .wechat_code{
                width: 110px;
                img{
                    width:110px;
                    margin: 30px 0 0 0;
                }
                .job{
                    text-align: center;
                    color: #9B9B9B;
                }
            }
        }

        .footer{
            background: #189B75;
            width: 100%;
            height: 60px;
            color:#fff;
            text-align: center;
            font-size: 12px;
            padding: 14px 0;
            box-sizing: border-box;
            margin: 60px 0 0 0;
        }
    }
</style>