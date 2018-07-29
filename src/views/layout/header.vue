<template>
    <div class="head" :class="{'home_head':homeLogo}">
        <div class="nr_wrap">
            <div class="f_l">
                <img class="logo" v-if="homeLogo" src="../../assets/logo.png" alt="">
                <img class="logo" v-else src="../../assets/home/logo.png" alt="">
            </div> 
            <ul>
                <li v-for="(item,index) in menus" :key="index" @click="routeLink(item)">  
                    <span v-if="item.meta" :class="{'active': activeMenu == index}">{{item.meta.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                homeLogo: true,
                menus:[
                    {
                        name:'首页',
                        value:'home'
                    },
                    {
                        name:'网站建设',
                        vlaue:'website'
                    },
                    {
                        name:'营销推广',
                        vlaue:'marketing'
                    },
                    {
                        name:'客户案例',
                        vlaue:'cases'
                    },
                    {
                        name:'价格',
                        vlaue:'price'
                    },
                    {
                        name:'小程序',
                        vlaue:'program'
                    },
                    {
                        name:'关于我们',
                        vlaue:'aboutus'
                    },
                    {
                        name:'加入我们',
                        vlaue:'joinus'
                    }
                ],
                activeMenu: 0
            }
        },
        mounted () {
            this.menus = this.$router.options.routes[1].children;
        },
        watch: {
            '$route': function(newVal, oldVal){
                if(newVal.path == '/home'){
                    this.homeLogo = true
                } else{
                    this.homeLogo = false
                } 
            }
        },
        methods: {
            routeLink(item){
                this.$router.push({path: item.path})
            }
        }
    }
</script>

<style lang="scss" scoped>
.head{
    height: 85px;
    line-height: 85px;
    background: #fff;
    ul{
        float: right;
        li{
            float: left;
            padding: 0 15px;
            cursor: pointer;
            .active{
                color: #39C19A;
            }
        }
    }

    .logo{
        width: 150px;
        margin: 20px 0 0 0;
    }
    &.home_head{
        background: url('../../assets/home/head_banner.png') no-repeat;
        background-size: cover;
        background-position:center center;
        ul{
            li{
                color:#fff;
                .active{
                    color:#fff;
                }
            }
        }
    }
}
</style>

