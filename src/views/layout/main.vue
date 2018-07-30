<template>
    <div>
        <head-nav :homeLogoShow="homeLogo" :activeMenu="activeIndex" @activeNav="activeNav"></head-nav>
        <router-view/>
        <bottom></bottom>
    </div>
</template>

<script>
    import headNav from './header'
    import bottom from './bottom'

    export default{
        data(){
            return{
                homeLogo: true,
                activeIndex: 0
            }
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
        mounted () {
            if(this.$route.path == '/home'){
                this.homeLogo = true
            }else{
                this.homeLogo = false
            } 
            this.activeIndex = this.$route.meta.id
        },
        components: {
            headNav,bottom
        },
        methods: {
            activeNav(index){
                this.activeIndex = index;
            }
        }
    }
</script>