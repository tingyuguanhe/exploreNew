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
                </li>  
                <li>
                    <div class="title">服务热线<span></span></div>
                </li>
                <li>
                    <div class="title">关注公众号<span></span></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    .page_bottom{
        background: #fff;
        padding: 90px 0;
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
                position: relative;
                text-align: left;
                span{
                    position: absolute;
                    left: 0;
                    top: 24px;
                    width: 34px;
                    height: 1px;
                    background: #9d9d9d;
                }
            }
        }
    }
</style>