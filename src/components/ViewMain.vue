<template>
    <div class="view-main">
        <slot name="jkHeader"></slot>
        <transition appear name="fade" mode="out-in">
            <div class="jk-main" :class="{'jk-pad-bot': styStu}">
                <slot></slot>
            </div>
        </transition>
        <slot name="jkFooter"></slot>
    </div>
</template>

<script>
    export default {
        name: "ViewMain",
        data () {
            return {
                styStu: false
            }
        },
        mounted () {
            this.styStu = ['Home', 'Product', 'Found', 'My'].indexOf(this.$route.name) !== -1;
        }
    }
</script>

<style scoped>
    .view-main{width: 100%;height: 100%}
    .view-main .jk-main{height: auto}
    .view-main .jk-pad-bot{padding-bottom: 100px}

    .fade-enter-active, .fade-leave-active {transition: all 1.2s ease}
    .fade-enter, .fade-leave-active {opacity: 0}
</style>
