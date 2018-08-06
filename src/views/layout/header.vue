<template>
    <div class="head" :class="{'home_head':homeLogoShow && scrollTop < 85, 'head_fixed': scrollTop > 100}">
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
    &.head_fixed{
        box-shadow: 0 0 6px #4b4b4b;
    }
}
</style>

