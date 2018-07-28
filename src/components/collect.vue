<template>
    <div class="g-container">
        <div class="m-chipCollectArea">
            <div class="u-chipCollectArea"> 
                <img id="chipCollectArea" src="" class="chipCollectArea"/>
            </div>
        </div>
        <div class="m-todayMission">
            <div class="u-todayMission">
                <img class="todayMission" src="../assets/todayMission.png">
                <div class="taskName">“若琪，{{todayTaskName}}”</div>
                <img v-if="hadComplete==false" class="missionprocess" src="../assets/missionprocess0.png">
                <img v-if="hadComplete==true" class="missionprocess" src="../assets/missionprocess1.png">
            </div>
        </div>
        <div class="m-maybeListen">
            <div class="u-maybeListen">
                <img class="maybeListen" src="../assets/maybeListen.png">
            </div>
            <div class="u-tts">
                <p v-for="item in maybelistenArr">"若琪，{{item}}"</p>
            </div>
        </div>
        <transition name="fade">
            <div class="m-getChip" v-show="getChipDialogIsShow">
                <div class="u-getChip">
                    <img class="chip" id="chip" src="">
                    <img v-if="dialogType==1" class="getChip" src="../assets/getPeiqiChip.png">
                    <img v-if="dialogType==2" class="getChip" src="../assets/getWangwangDogChip.png">
                    <img v-if="dialogType==3" class="getChip" src="../assets/getSeaBedTeamChip.png">
                    <img v-if="dialogType==4" class="getChip" src="../assets/getBaoliChip.png">
                    <p class="tipscontent">{{tipsContent}}</p>
                </div>
                <div class="u-yes">
                    <div class="yes" @click="getChipDialogIsShow=false">确定</div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import {maybelisten} from '../js/maybelisten.js';
import {tips} from '../js/tips.js';
import {devUrl} from '../js/url.js'
import axios from 'axios';

export default {
    name: 'collect',
    data() {
        return {
            rokidId: "",
            getChipDialogIsShow: false,
            taskPid: 0,
            hadComplete: false,
            hadTip: false,
            dialogChipImageUrl: "",
            chipImageUrl: "",
            todayTaskDesc: "",
            todayTaskName: "",
            dialogType: 0,
            tipsContent: "",
            maybelistenArr: [],
            taskFragImage: "",
            taskImage: ""
        }
    },
    created: function() {
        this.dialogType = this.$route.params.id

        //release
        this.getRokidId().then((data)=>{
            alert(data);
            this.rokidId = data;
        }).then(()=>{
            this.getTaskDetail()
        })

        //test
        // this.rokidId = "0201021740001646"
        // this.getTaskDetail()

        this.tipsRandom()
        this.maybelistenRandom()
        
    },
    methods: {
        tipsRandom() {
            let index = parseInt(Math.random() * tips.length)
            this.tipsContent = tips[index]
        },
        maybelistenRandom() {
            let index1 = parseInt(Math.random() * maybelisten.length);
            let index2 = parseInt(Math.random() * maybelisten.length);
            while (index1 == index2) {
                index2 = parseInt(Math.random() * maybelisten.length);
            }
            let index3 = parseInt(Math.random() * maybelisten.length);
            while (index3 == index2 || index3 == index2) {
                index3 = parseInt(Math.random() * maybelisten.length);
            }
            let index4 = parseInt(Math.random() * maybelisten.length);
            while (index4 == index3 || index4 == index2 || index4 == index1) {
                index4 = parseInt(Math.random() * maybelisten.length);
            }
            this.maybelistenArr.push(maybelisten[index1])
            this.maybelistenArr.push(maybelisten[index2])
            this.maybelistenArr.push(maybelisten[index3])
            this.maybelistenArr.push(maybelisten[index4])
        },
        judgeChipArea(data) {
            let index = 0
            for (let item of data.taskChildList) {
                if (item.taskStatus == true) {
                    index ++
                }
            }
            if (index == 0) {
                this.todayTaskName = data.taskChildList[0].taskName
                switch(parseInt(this.$route.params.id)) {
                    case 1:
                        document.getElementById('chipCollectArea').src = require('../assets/peiqi0.png');
                        break;
                    case 2:
                        document.getElementById('chipCollectArea').src = require('../assets/seabed0.png');
                        break;
                    case 3:
                        document.getElementById('chipCollectArea').src = require('../assets/wangwangdog0.png');
                        break;
                    case 4:
                        document.getElementById('chipCollectArea').src = require('../assets/baoli0.png');
                        break;
                }
                
            } else if (index < 6){
                if (new Date().toLocaleDateString().split('/').join('-') == new Date(data.taskChildList[index-1].taskDate).toLocaleDateString().split('/').join('-')) {
                    this.todayTaskName = data.taskChildList[index-1].taskName
                    this.hadComplete = true
                }
                if (new Date(new Date().toLocaleDateString().split('/').join('-')) > new Date(data.taskChildList[index-1].taskDate)) {
                    this.todayTaskName = data.taskChildList[index].taskName
                    this.hadComplete = false
                }
                document.getElementById('chipCollectArea').src = data.taskChildList[index-1].taskImage
                document.getElementById('chip').src = data.taskChildList[index-1].taskFragImage
                this.getChipDialogIsShow = data.taskChildList[index-1].hadTip
            } else {
                this.todayTaskName = data.taskChildList[index-1].taskName
                this.hadComplete = true
                document.getElementById('chipCollectArea').src = data.taskChildList[index-1].taskImage
                document.getElementById('chip').src = data.taskChildList[index-1].taskFragImage
                this.getChipDialogIsShow = data.taskChildList[index-1].hadTip
            }
        },
        async getRokidId() {
            return new Promise((resolve, reject) => {
                window.taro.App.Account.getInfo(function(err, result) {
                    if (err) {
                        alert("未获取到当前设备信息, 请绑定设备后再次访问哦~")
                    }
                    if (result) {
                        resolve(result.rokidId)
                    }
                });
            })  
        },
        getTaskDetail() {
            let params = {
                "param":{
                    "deviceId":this.rokidId,
                    "taskPid": this.$route.params.id
                }
            }
            axios.post(devUrl + '/api/taskDetail', params)
            .then((res) => {
                let json = res.data
                this.judgeChipArea(json.data)
            }).catch((error)=>{
                alert('当前活动参与人数过多，请多刷新几次页面~')
            })
        }
    }

}
</script>
<style scoped lang="scss">
.g-container {
    margin-left: 0.32rem;
    margin-right: 0.32rem;
    padding-top: 0.39rem;
    overflow-x: hidden;
    .m-chipCollectArea {
        .u-chipCollectArea {
            // height: 6.6rem;
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
            position: relative;
            // top: 1rem;
            // height: 4.17rem;
            .todayMission {
                width: 100%;
            }
            .taskName {
                position: relative;
                font-size: 0.453rem;
                color: #4c4c4c;
                font-weight: 500;
                left: 0.87rem;
                top: -3rem;
            }
            .missionprocess {
                position: relative;
                font-size: 0.453rem;
                left: 0.87rem;
                top: -2.15rem;
                width: 7.546rem;
                height: auto;
            }
        }
    }
    .m-maybeListen {
        height: 7.3rem;
        margin-top: -1rem;
        .u-maybeListen {
            .maybeListen {
                width: 100%;
            }
        }
        .u-tts {
            position: relative;
            top: -5.3rem;
            left: 1rem;
            height: 7.4rem;
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
            .chip {
                position: absolute;
                top: 2.2rem;
                left: 1.4rem;
            }
            .getChip {
                width: 8.933rem;
            }
            .tipscontent {
                position: absolute;
                font-size: 0.3157rem;
                color: #9a9a9a;
                width: 3.8rem;
                text-align: left;
                line-height: 0.5rem;
                top: 3rem;
                left: 4.8rem;
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