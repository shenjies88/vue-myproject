<template>
    <Card>
        Hello World {{ get }}
    </Card>
</template>

<script>
    export default {
        name: 'home-nav',
        data() {
            return {
                message: ''
            }
        },
        computed: {
            get: function () {
                this.$axios.get('/shenjies88').then(data => {
                    console.log(data)
                })
            }
        }
    };
</script>

<style scoped lang="less">

</style>
