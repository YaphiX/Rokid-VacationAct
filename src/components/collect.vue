<template>
    <div class="g-container">
        <div class="m-chipCollectArea">
            <div class="u-chipCollectArea"> 
                <img class="chipCollectArea" src="../assets/chipCollectArea.png">
                <div class="u-chip">
                    <img class="puzzle" src="../assets/puzzle.png">
                </div>
                <div class="u-toyName">小猪佩奇</div>
                <div class="u-chipNum">碎片数量：1/6</div>
            </div>
        </div>
        <div class="m-todayMission">
            <div class="u-todayMission">
                <img class="todayMission" src="../assets/todayMission.png">
            </div>
        </div>
        <div class="m-maybeListen">
            <div class="u-maybeListen">
                <img class="maybeListen" src="../assets/maybeListen.png">
            </div>
            <div class="u-tts">
                <p>“若琪，播放小猪佩奇英文版”</p>
                <p>“若琪，播放小猪佩奇主题曲”</p>
                <p>“若琪，播放猪叫”</p>
                <p>“若琪，播放我们一起学猪叫”</p>
            </div>
        </div>
        <transition name="fade">
            <div class="m-getChip" v-show="getChipDialogIsShow">
                <div class="u-getChip">
                    <img v-if="id==1" class="getChip" src="../assets/getPeiqiChip.png">
                    <img v-if="id==2" class="getChip" src="../assets/getWangwangDogChip.png">
                    <img v-if="id==3" class="getChip" src="../assets/getSeaBedTeamChip.png">
                    <img v-if="id==4" class="getChip" src="../assets/getBaoliChip.png">
                </div>
                <div class="u-yes">
                    <div class="yes" @click="getChipDialogIsShow=false">确定</div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'collect',
        data() {
            return {
                getChipDialogIsShow: true,
                id: 0
            }
        },
        created: function() {
            this.id = this.$route.params.id
        }

    }
</script>
<style scoped lang="scss">
.g-container {
    margin-left: 0.32rem;
    margin-right: 0.32rem;
    overflow-x: hidden;
    .m-chipCollectArea {
        .u-chipCollectArea {
            height: 6.6rem;
            text-align: center;
            .chipCollectArea {
                width: 100%;
            }
        }
        .u-chip {
            position: relative;
            bottom: 5.8rem;
            .puzzle {
                width: 2.32rem;
            }

        }
        .u-toyName {
            position: relative;
            bottom: 5.5rem;
            font-size: 0.32rem;
        }
        .u-chipNum {
            position: relative;
            bottom: 5.05rem;
            font-size: 0.4rem;
            color: #979797;
        }
    }
    .m-todayMission {
        .u-todayMission {
            height: 4.17rem;
            .todayMission {
                width: 100%;
            }
        }
    }
    .m-maybeListen {
        height: 6.7355rem;
        .u-maybeListen {
            .maybeListen {
                width: 100%;
            }
        }
        .u-tts {
            position: relative;
            top: -5.3rem;
            left: 0.865rem;
            p {
                line-height: 1rem;
                font-size: 0.4rem;
                color: #6f6f6f;
                font-weight: 300;
            }
        }
    }
    .m-getChip {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:rgba(0,0,0,0.4);
        .u-getChip {
        position: relative;
        top: 3.3rem;
        text-align: center;
            .getChip {
                width: 8.933rem;
            }
        }
        .u-yes {
            position: relative;
            text-align: center;
            line-height: 1.4rem;
            // background-color: red;
            top: 1.78rem;
            .yes {
                font-size: 0.4rem;
                color: #fe5c59;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0
    }
}
</style>