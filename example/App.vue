<template>
    <div id="app"></div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                
            }
        },
        methods: {
            onClose() {
                console.log('you close loading');
            }
        },
        mounted() {
            this.$loading.show({mask:false,text:'hello world',callback:this.onClose});
            this.$loading.close();
            this.$loading.show({mask:true});
        }
    }
</script>

<style lang="less">
    
</style>