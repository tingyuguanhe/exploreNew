<template>
    <div>
        <head-nav></head-nav>
        <router-view/>
    </div>
</template>

<script>
    import headNav from './header'

    export default{
        data(){
            return{

            }
        },
        components: {
            headNav
        }
    }
</script>