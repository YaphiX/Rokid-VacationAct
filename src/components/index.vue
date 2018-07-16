<template>
  <div class="g-container">
    <div class="m-title">
      <div class="u-bubble">
        <img src="../assets/bubble.png">
      </div>
      <div class="u-banner">
        <div class="u-bannertext">
          <img src="../assets/bannertext.png">
        </div>
        <div class="u-childnum">
          <div class="u-childnumtext">
            <p>已有</p>
            <p class="num">{{childNum}}</p> 
            <p>位宝宝一起参与</p>
          </div>
        </div>
      </div> 
    </div>
    <div class="m-selecttoy">
      <div class="u-btnrule">
        <img class="btn" src="../assets/selecttoybtn.png">
        <img class="rule" src="../assets/rulebtn.png" @click="ruleDialogIsShwo=true">
      </div>
      <div class="u-scroller">
        <div class="u-peiqipig">
          <img v-if="taskList[0].taskCurrent == true" class="peiqi" src="../assets/peiqipig.png" @click="toMissiondetail(taskList[0].taskPid)">
          <img v-else class="peiqi" src="../assets/peiqipig.png">
          <img v-if="taskList[0].hadGetDoll == true" class="hadgetdoll" src="../assets/hadGetDoll.png">
          <img v-else-if="taskList[0].hadComplete == true && taskList[0].hadGetDoll == false" class="getDoll" src="../assets/getDoll.png">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent == true && peiqiCompletedNum == 0" class="process" src="../assets/0.png">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent == true && peiqiCompletedNum == 1" class="process" src="../assets/1.png">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent == true && peiqiCompletedNum == 2" class="process" src="../assets/2.png">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent == true && peiqiCompletedNum == 3" class="process" src="../assets/3.png">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent == true && peiqiCompletedNum == 4" class="process" src="../assets/4.png">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent == true && peiqiCompletedNum == 5" class="process" src="../assets/5.png">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent != true" class="unselect" src="../assets/unselect.png">
          <img v-else class="select" src="../assets/select.png" @click="selectMission(0,taskList[0].taskPid)">
        </div>
        <div class="u-wangwangdog">
          <img v-if="taskList[1].taskCurrent == true" class="wangwangdog" src="../assets/wangwangdog.png" @click="toMissiondetail(taskList[0].taskPid)">
          <img v-else class="wangwangdog" src="../assets/wangwangdog.png">
          <img v-if="taskList[1].hadGetDoll == true" class="hadgetdoll" src="../assets/hadGetDoll.png">
          <img v-else-if="taskList[1].hadComplete == true && taskList[1].hadGetDoll == false" class="getDoll" src="../assets/getDoll.png">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent == true && wangCompletedNum == 0" class="process" src="../assets/0.png">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent == true && wangCompletedNum == 1" class="process" src="../assets/1.png">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent == true && wangCompletedNum == 2" class="process" src="../assets/2.png">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent == true && wangCompletedNum == 3" class="process" src="../assets/3.png">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent == true && wangCompletedNum == 4" class="process" src="../assets/4.png">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent == true && wangCompletedNum == 5" class="process" src="../assets/5.png">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent != true" class="unselect" src="../assets/unselect.png">
          <img v-else class="select" src="../assets/select.png" @click="selectMission(1,taskList[1].taskPid)">
        </div>
        <div class="u-seabedteam">
          <img v-if="taskList[2].taskCurrent == true" class="seabedteam" src="../assets/seabedteam.png">
          <img v-else class="seabedteam" src="../assets/seabedteam.png">
          <img v-if="taskList[2].hadGetDoll == true" class="hadgetdoll" src="../assets/hadGetDoll.png">
          <img v-else-if="taskList[2].hadComplete == true && taskList[2].hadGetDoll == false" class="getDoll" src="../assets/getDoll.png">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent == true && seaBedCompletedNum == 0" class="process" src="../assets/0.png">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent == true && seaBedCompletedNum == 1" class="process" src="../assets/1.png">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent == true && seaBedCompletedNum == 2" class="process" src="../assets/2.png">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent == true && seaBedCompletedNum == 3" class="process" src="../assets/3.png">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent == true && seaBedCompletedNum == 4" class="process" src="../assets/4.png">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent == true && seaBedCompletedNum == 5" class="process" src="../assets/5.png">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent != true" class="unselect" src="../assets/unselect.png">
          <img v-else class="select" src="../assets/select.png" @click="selectMission(2,taskList[2].taskPid)">
        </div>
        <div class="u-baolihorse">
          <img v-if="taskList[3].taskCurrent == true" class="baolihorse" src="../assets/baolihorse.png">
          <img v-else class="baolihorse" src="../assets/baolihorse.png">
          <img v-if="taskList[3].hadGetDoll == true" class="hadgetdoll" src="../assets/hadGetDoll.png">
          <img v-else-if="taskList[3].hadComplete == true && taskList[3].hadGetDoll == false" class="getDoll" src="../assets/getDoll.png">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent == true && baoliCompletedNum == 0" class="process" src="../assets/0.png">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent == true && baoliCompletedNum == 1" class="process" src="../assets/1.png">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent == true && baoliCompletedNum == 2" class="process" src="../assets/2.png">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent == true && baoliCompletedNum == 3" class="process" src="../assets/3.png">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent == true && baoliCompletedNum == 4" class="process" src="../assets/4.png">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent == true && baoliCompletedNum == 5" class="process" src="../assets/5.png">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent != true" class="unselect" src="../assets/unselect.png">
          <img v-else class="select" src="../assets/select.png" @click="selectMission(3,taskList[3].taskPid)">
        </div>
      </div>
    </div>
    <div class="m-giftpackage">
      <div class="u-libaotext">
        <img class="libaotext" src="../assets/libaotext.png">
      </div>
      <div class="u-libaobtn">
        <img class="libaobtn" src="../assets/libaobtn.png">
      </div>
      <div class="u-libao">
        <img class="libao" src="../assets/libao.png">
        <div v-if="hadCompleteAll==true" class="libaostatue">
          <div><img class="libaotip" src="../assets/libaocomplete.png"></div>
          <div><img class="getlibao" src="../assets/getlibaobtn.png"></div>
        </div>
        <div v-else class="libaoprocess">
          <div><img v-if="libaoCompletedNum == 0" class="libaocompletenum" src="../assets/libao0.png"></div>
          <div><img v-if="libaoCompletedNum == 1" class="libaocompletenum" src="../assets/libao1.png"></div>
          <div><img v-if="libaoCompletedNum == 2" class="libaocompletenum" src="../assets/libao2.png"></div>
          <div><img v-if="libaoCompletedNum == 3" class="libaocompletenum" src="../assets/libao3.png"></div>
          <div><img class="libaotip2" src="../assets/libaotip2.png"></div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="m-ruledialog" v-show="ruleDialogIsShwo" @click="ruleDialogIsShwo=false">
        <div class="u-ruledialog J-ruledialog">
          <img class="ruledialog" src="../assets/ruledialog.png">
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="m-confirmRole" v-show="confirmRole">
        <div class="u-confirmRole J-confirmRole">
          <img class="confirmRole" src="../assets/confirmRole.png">
          <div class="confrimTip">{{confrimRoleText}}</div>
          <div class="cancel" @click="confirmRole=false">取消</div>
          <div class="yes" @click="confirmRole=false;lockMission()">确定</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="m-congradulationDialog" v-show="congradulationDialogIsShow">
        <div class="u-congradulationDialog">
          <img class="congradulationDialog" src="../assets/gotBaoli.png">
          <div class="yes" @click="congradulationDialogIsShow=false;">确认收货地址</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      taskPid: 0,
      childNum: 12312,
      ruleDialogIsShwo: false,
      confirmRole: false,
      congradulationDialogIsShow: false,
      confrimRoleText: '123',
      rokidId: '',
      hadCompleteAll: false,
      hadGetGift: false,
      peiqiCompletedNum: 0,
      wangCompletedNum: 0,
      seaBedCompletedNum: 0,
      baoliCompletedNum: 0,
      libaoCompletedNum: 0,
      hadDoingMission: false,
      taskList:[
            {
                "taskPid":"",
                "taskName":"",
                "taskCurrent":"",
                "hadComplete":"",
                "hadGetDoll":"",
            },{
                "taskPid":"",
                "taskName":"",
                "taskCurrent":"",
                "hadComplete":"",
                "hadGetDoll":"",
            },{
                "taskPid":"",
                "taskName":"",
                "taskCurrent":"",
                "hadComplete":"",
                "hadGetDoll":"",
            },{
                "taskPid":"",
                "taskName":"",
                "taskCurrent":"",
                "hadComplete":"",
                "hadGetDoll":"",
            }
        ]
    }
  },
  created: function() {
    this.rokidId = "0201021740000464"
    let params = {
      "param":{
        "deviceId":this.rokidId
      }
    }
    fetch('/api/opt=taskList', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json()
    }).then((json) => {
      json = json.data
      this.hadCompleteAll = json.data.hadCompleteAll
      this.hadGetGift = json.data.hadGetGift
      this.taskList = json.data.taskList
      this.hadDoingMission = json.data.taskList[0].taskCurrent || json.data.taskList[1].taskCurrent || json.data.taskList[2].taskCurrent || json.data.taskList[3].taskCurrent
      this.getPeiqiCompleteNum(json.data.taskList[0].taskChildList)
      this.getWangwangCompleteNum(json.data.taskList[1].taskChildList)      
      this.getSeaBedCompleteNum(json.data.taskList[2].taskChildList)
      this.getHorseCompleteNum(json.data.taskList[3].taskChildList)      
    }).catch((error)=>{
      console.log(error)
    })
  },
  mounted: function() {

    document.getElementsByClassName("J-ruledialog")[0].addEventListener("click", function(event){
      event.stopPropagation(); 
    },false)

    // window.taro.App.Account.getInfo(function(err, result) {
    //     if (err) {
    //         alert("未获取到当前设备信息, 请绑定设备后再次访问哦~")
    //     }

    //     if (result) {
    //         this.rokidId = result.rokidId
    //     }
    // });
  },
  methods: {
    getPeiqiCompleteNum(peiqiList) {
      for (let list of peiqiList) {
        if(list.taskStatus == true) {
          this.peiqiCompletedNum++;
        }
      }
    },
    getWangwangCompleteNum(wangwanglist) {
      for (let list of wangwanglist) {
        if(list.taskStatus == true) {
          this.wangCompletedNum++;
        }
      }
    },
    getSeaBedCompleteNum(seabedlist) {
      for (let list of seabedlist) {
        if(list.taskStatus == true) {
          this.seaBedCompletedNum++;
        }
      }
    },
    getHorseCompleteNum(horselist) {
      for (let list of horselist) {
        if(list.taskStatus == true) {
          this.baoliCompletedNum++;
        }
      }
    },
    getLibaoCompleteNum(taskList) {
      for (let list of taskList) {
        if(list.hadComplete == true) {
          this.libaoCompletedNum++;
        }
      }
    },
    changText(text) {
      this.confrimRoleText = text
    },
    selectMission(dialogType, taskPid) {
      switch(dialogType) {
        case 0: 
          this.changText("确定选择角色为“小猪佩奇”么？")
          this.taskPid = taskPid
          this.confirmRole = true;
          break;
        case 1: 
          this.changText("确定选择角色为“汪汪队”么？")
          this.taskPid = taskPid
          this.confirmRole = true;
          break;
        case 2: 
          this.changText("确定选择角色为“海底小纵队”么？")
          this.taskPid = taskPid
          this.confirmRole = true;
          break;
        case 3: 
          this.changText("确定选择角色为“小马宝莉”么？")
          this.taskPid = taskPid
          this.confirmRole = true;
          break;
      }
    },
    lockMission() {
      let params = {
          "param":{
            "deviceId":this.rokidId,
            "taskPid": this.taskPid
          }
      }
      fetch('/api/opt=selectTask', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then((res) => {
        return res.json()
      }).then((json) => {
        json = json.data
        if (json.status == true) {
          this.toMissiondetail(this.taskPid);
        }
      }).catch({

      }) 
      
    },
    toMissiondetail(taskPid) {
      this.$router.push({ name: 'collect', params: { id: taskPid }});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.g-container {
  .m-title {
    height: 6.36rem;
    .u-bubble {
      img {
        margin-top: 0.773rem;
        margin-left: 4.187rem;
        height: 0.906rem;
      }
    }
    .u-banner {
      height: 100%;
      .u-bannertext {
        text-align: center;
        img {
          margin-top: 1.706rem;
          height: 0.507rem;
        }
      }
      .u-childnum {
        text-align: center;
        .u-childnumtext {
          margin-top: 0.76rem;
          p {
            display: inline-block;
            color: #666666;
            font-weight: 300;
            font-size: 0.3466rem;
          }
          .num {
            color: #408cff;
            font-weight: 500;
          }
        }
      }
    }
  }
  .m-selecttoy {
    height: 8.27rem;
    margin-left: 0.533rem;
    .u-btnrule {
      .btn {
        width:4.32rem;
      }
      .rule {
        position: relative;
        width: 2.053rem;
        left: 2.4rem;
        bottom: 0.5rem;
      }
    }
    .u-scroller {
      width: 100%;
      display: inline;
      white-space: nowrap;
      overflow-x:scroll;
      float:left;
      overflow-y:hidden;
      
      div {
        display: inline-block;
        img {
          width: 4.48rem;
        }
        // width: 4.24rem;
      }
      .hadgetdoll {
          position: absolute;
          width: 1.1rem;
          left: 1.665rem;
          top: 5.09rem;
      }
      .process {
          position: absolute;
          width: 1.3rem;
          left: 1.55rem;
          top: 5.09rem;
      }
      .getDoll {
          position: absolute;
          width: 2.74rem;
          left: 0.84rem;
          top: 4.86rem;
      }
      .select {
          position: absolute;
          width: 2.74rem;
          left: 0.84rem;
          top: 4.86rem;
      }
      .unselect {
          position: absolute;
          width: 2.74rem;
          left: 0.84rem;
          top: 4.86rem;
      }
      .u-peiqipig {
        position: relative;
        left: -0.1rem;
      }
      .u-wangwangdog {
        position: relative;
        left: -0.4rem;
      }
      .u-seabedteam {
        position: relative;
        left: -0.7rem;
      }
      .u-baolihorse {
        position: relative;
        left: -1rem;
      }
    }
  }
  .m-giftpackage {
    .u-libaotext {
      text-align: center;
      .libaotext {
        width: 5.44rem;
      }
    }
    .u-libaobtn {
      margin-left: 0.533rem;
      margin-top: 0.3rem;
      .libaobtn {
        width: 3.374rem;
      }
    }
    .u-libao {
      height: 7rem;
      overflow: hidden;
      position: absolute;
      left: 0.46rem;
      right: 0.46rem;
      .libao {
        width: 100%;
      }
      .libaostatue {
        text-align: center;
        .libaotip {
          position: relative;
          width: 7.593rem;
          height: auto;
          top: -2.4rem;
        }
        .getlibao {
          position: relative;
          top: -2.1rem;
          width: 2.74rem;
        }
      }
      .libaoprocess {
        text-align: center;
        .libaocompletenum {
          position: relative;
          top: -2.4rem;
          width: 2.453rem;
        }
        .libaotip2 {
          position: relative;
          top: -2.1rem;
        }
      }
    }
  }
  .m-ruledialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,0.4);
    .u-ruledialog {
      position: relative;
      top: 4.3rem;
      text-align: center;
      .ruledialog {
        width: 8.933rem;
      }
    }
  }
  .m-confirmRole {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,0.4);
    .u-confirmRole {
      position: relative;
      top: 4.3rem;
      text-align: center;
      .confrimTip {
        position: relative;
        top: -3.74rem;
        font-size: 0.4rem;
      }
      .confirmRole {
        width: 8.933rem;
      }
      .cancel {
        position: relative;
        left: 0.533rem;
        top: -1.98rem;
        width: 4.48rem;
        line-height: 1.3rem;
        font-size: 0.4rem;
        color: #9b9b9b;
        // background-color: blue;
      }
      .yes {
        position: relative;
        width: 4.45rem;
        left: 5.013rem;
        top: -3.28rem;
        line-height: 1.3rem;
        font-size: 0.4rem;
        color: #f5a623;
        // background-color: red;
      }
    }
  }
  .m-congradulationDialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,0.4);
    .u-congradulationDialog {
      position: relative;
      top: 2rem;
      text-align: center;
      .congradulationDialog {
        width: 8.933rem;
      }
      .yes {
        position: relative;
        top: -1.5rem;
        line-height: 1.3rem;
        text-align: center;
        font-size: 0.4rem;
        color: #fe5c59;
        // background-color: yellow;
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
