<template>
    <div>
        <head-nav></head-nav>
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

            }
        },
        components: {
            headNav,bottom
        }
    }
</script>