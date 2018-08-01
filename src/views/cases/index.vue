<template>
    <div class="cases_page">
        <div class="banner">
            <div class="nr_wrap">
                <div class="text">
                    <div class="banner_ad">超过 60,000 优秀品牌的选择</div>
                    <div class="banner_text">PC、小程序、平板、手机、微站一次拥有！</div>
                </div>
                <img class="banner_img" src="../../assets/cases/banner.png" alt="">
            </div>
        </div>
        <div class="case_list">
            <div class="nr_wrap">
                <img src="../../assets/cases/list.png" alt="">
                <div>
                    <button>显示更多</button>
                </div>
            </div>
        </div>
        <my-form></my-form>  
    </div>
</template>

<script>
    import MyForm from '@/components/form'
    export default{
        components: {
            MyForm
        }
    }
</script>

<style lang="scss" scoped>
    .cases_page{
        .banner{
            background: #6FC9C5;
            height: 400px;
            .nr_wrap{
                position: relative;
                height: 400px;
            }   
            .banner_img{
                position: absolute;
                right: 40px;
                bottom: 0;
            }
            .banner_ad{
                font-size: 49px;
                font-weight: 600;
            }
            .text{
                position: absolute;
                left: 50px;
                top:150px;
                color:#fff;
                font-size: 20px;
            }
        }

        .case_list{
            padding: 80px 0;
            button{
                border: 1px solid #189B75;
                border-radius: 5px;
                width: 160px;
                height: 44px;
                line-height: 40px;
                color: #189B75;
                font-size: 16px;
                margin-top: 30px;
                background: #fff;
            }
        }
    }
</style>