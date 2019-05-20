<template>
    <div :class="maskClass" v-show="state">
        <div ref="loading" :class="loadingClass">
            <img class="loading__img" src="../assets/images/loading.svg" alt="">
            <div class="loading__text" v-html="text"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vuejs-loading',
        data() {
            return {
                state: false,
                text: '加载中...',
                duration: undefined,
                callback: undefined,
                mask: true
            }
        },
        computed: {
            maskClass() {
                return {
                    'mask': this.mask
                }
            },
            loadingClass() {
                return {
                    'loading-with-text': this.text,
                    'loading': !this.text
                }
            }
        },
        watch: {
            state(curVal, preVal) {
                let duration = parseInt(this.duration);
                if (curVal) {
                    //根据duration设置的时间，loading自动消失
                    if (!isNaN(duration)) {
                        setTimeout(() => {
                            this.state = false;
                        }, duration);
                    }
                } else if (preVal) {
                    if (typeof this.callback === 'function') {
                        this.callback();
                    }
                }
            }
        },
    }
</script>

<style scoped lang="less">
    .mask {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .loading {
        position: fixed;
        top: 50%;
        left: 50%;
        min-width: 50px;
        max-width: 50%;
        min-height: 50px;
        color: #fff;
        font-size: 0;
        text-align: center;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.7);
        transform: translate(-50%, -50%);
        padding: 10px;

        .loading__img {
            width: 50px;
            height: 50px;
        }
    }

    .loading-with-text {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 60px;
        max-width: 50%;
        min-height: 50px;
        color: #fff;
        font-size: 0;
        text-align: center;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.7);
        transform: translate(-50%, -50%);
        padding: 10px;

        .loading__img {
            width: 50px;
            height: 50px;
        }

        .loading__text {
            white-space: wrap;
            font-size: 14px;
        }
    }
</style>