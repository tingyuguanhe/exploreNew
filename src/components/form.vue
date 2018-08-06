<template>
    <div class="submit_msg">
        <div class="clearfix form">
            <input type="text" placeholder="姓名">
            <input type="text" placeholder="手机或微信">
            <input type="text" placeholder="邮箱">
            <div>
                <button>提交您的信息</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .submit_msg{
        width: 100%;
        min-width: 1200px;
        height: 222px;
        background: url('../assets/home/msg_bg.png') no-repeat;
        background-position: center center;
        background-size: cover;
        position: relative;
        text-align: left;
        .form{
            position: absolute;
            left: 50%;
            top: 70px;
        }
        input{
            width: 200px;
            float: left;
            margin: 0 15px 0 0;
            border:none;
            background: #fff;
            height: 34px;
            line-height: 34px;
            padding: 0 10px;
            box-sizing: border-box;
            &:nth-child(1){
                width: 160px;
            }
        }
        button{
            background: #FF9C00;
            height: 40px;
            line-height: 36px;
            width: 170px;
            color:#fff;
            margin: 15px 0 0 0;
            border: none;
            font-size: 16px;
        }

    }
</style>