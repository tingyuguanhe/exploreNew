<template>
    <div class="head" :class="{'home_head home_head_nav1':homeLogoShow && scrollTop < 85, 'head_fixed': scrollTop > 100}">
        <div class="nr_wrap">
            <div class="f_l">
                <img class="logo" v-if="homeLogoShow && scrollTop < 85" src="../../assets/logo.png" alt="">
                <img class="logo" v-else src="../../assets/home/logo.png" alt="">
            </div> 
            <ul>
                <li v-for="(item,index) in menus" :key="index" @click="routeLink(item,index)">  
                    <span v-if="item.meta" :class="{'active': activeNav == index}">{{item.meta.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                menus:[],
                scrollTop: 0
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
            this.menus = this.$router.options.routes[1].children;
        },
        computed:{
            activeNav: {
                get: function() {
                    return this.activeMenu;
                },
                set: function(newValue) {
                    //console.log(newValue);
                }
            }
        },
        props: ['homeLogoShow','activeMenu'],
        created () {
            setInterval(function(){

            },3000)
        },  
        methods: {
            routeLink(item,index){
                this.activeNav = index;
                this.$emit('activeNav',index);
                this.$router.push({path: item.path});
            },
            handleScroll () {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
               
            }
        }
    }
</script>

<style lang="scss" scoped>
.head{
    height: 85px;
    line-height: 85px; 
    background: #fff;
    position: fixed;
    width: 100%;
    min-width: 1200px;
    overflow: hidden;
    left: 0;
    top: 0;
    z-index: 100;
    overflow: hidden;
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
        padding: 22px 0 0 0;
        box-sizing: border-box;
    }
    &.home_head{
        ul{
            li{
                color:#fff;
                .active{
                    color:#fff;
                }
            }
        }
    }
    &.home_head_nav1{
        background: transparent;
        /* background: url('../../assets/home/head_banner.png') no-repeat; */
        /* background-size: contain; */
        /* background-position:center center; */
    }
    &.home_head_nav2{
        background-color: #5db6de;
    }
    &.home_head_nav3{
        background-color: #39c19a;
    }
    &.head_fixed{
        box-shadow: 0 0 6px #4b4b4b;
        height: 85px;
        line-height: 85px;
    }
}
</style>

