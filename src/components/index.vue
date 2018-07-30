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
          <img v-if="taskList[0].taskCurrent == true || (peiqiCompletedNum == 6 && taskList[0].hadGetDoll == false)" class="peiqi" src="../assets/peiqipig.png" @click="toMissiondetail(taskList[0].taskId)">
          <img v-else class="peiqi" src="../assets/peiqipig.png">
          <img v-if="taskList[0].hadGetDoll == true" class="hadgetdoll" src="../assets/hadGetDoll.png">
          <img v-else-if="taskList[0].hadComplete == true && taskList[0].hadGetDoll == false" class="getDoll" src="../assets/getDoll.png" @click="getDoll(0, taskList[0].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent == true && peiqiCompletedNum == 0" class="process" src="../assets/0.png" @click="toMissiondetail(taskList[0].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent == true && peiqiCompletedNum == 1" class="process" src="../assets/1.png" @click="toMissiondetail(taskList[0].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent == true && peiqiCompletedNum == 2" class="process" src="../assets/2.png" @click="toMissiondetail(taskList[0].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent == true && peiqiCompletedNum == 3" class="process" src="../assets/3.png" @click="toMissiondetail(taskList[0].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent == true && peiqiCompletedNum == 4" class="process" src="../assets/4.png" @click="toMissiondetail(taskList[0].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent == true && peiqiCompletedNum == 5" class="process" src="../assets/5.png" @click="toMissiondetail(taskList[0].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[0].taskCurrent != true" class="unselect" src="../assets/unselect.png">
          <img v-else class="select" src="../assets/select.png" @click="selectMission(0,taskList[0].taskId)">
        </div>
        <div class="u-wangwangdog">
          <img v-if="taskList[1].taskCurrent == true || (wangCompletedNum == 6 && taskList[1].hadGetDoll == false)" class="wangwangdog" src="../assets/wangwangdog.png" @click="toMissiondetail(taskList[1].taskId)">
          <img v-else class="wangwangdog" src="../assets/wangwangdog.png">
          <img v-if="taskList[1].hadGetDoll == true" class="hadgetdoll" src="../assets/hadGetDoll.png">
          <img v-else-if="taskList[1].hadComplete == true && taskList[1].hadGetDoll == false" class="getDoll" src="../assets/getDoll.png" @click="getDoll(1, taskList[1].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent == true && wangCompletedNum == 0" class="process" src="../assets/0.png" @click="toMissiondetail(taskList[1].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent == true && wangCompletedNum == 1" class="process" src="../assets/1.png" @click="toMissiondetail(taskList[1].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent == true && wangCompletedNum == 2" class="process" src="../assets/2.png" @click="toMissiondetail(taskList[1].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent == true && wangCompletedNum == 3" class="process" src="../assets/3.png" @click="toMissiondetail(taskList[1].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent == true && wangCompletedNum == 4" class="process" src="../assets/4.png" @click="toMissiondetail(taskList[1].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent == true && wangCompletedNum == 5" class="process" src="../assets/5.png" @click="toMissiondetail(taskList[1].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[1].taskCurrent != true" class="unselect" src="../assets/unselect.png">
          <img v-else class="select" src="../assets/select.png" @click="selectMission(1,taskList[1].taskId)">
        </div>
        <div class="u-seabedteam">
          <img v-if="taskList[2].taskCurrent == true || (seaBedCompletedNum == 6 && taskList[2].hadGetDoll == false)" class="seabedteam" src="../assets/seabedteam.png" @click="toMissiondetail(taskList[2].taskId)">
          <img v-else class="seabedteam" src="../assets/seabedteam.png">
          <img v-if="taskList[2].hadGetDoll == true" class="hadgetdoll" src="../assets/hadGetDoll.png">
          <img v-else-if="taskList[2].hadComplete == true && taskList[2].hadGetDoll == false" class="getDoll" src="../assets/getDoll.png" @click="getDoll(2, taskList[2].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent == true && seaBedCompletedNum == 0" class="process" src="../assets/0.png" @click="toMissiondetail(taskList[2].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent == true && seaBedCompletedNum == 1" class="process" src="../assets/1.png" @click="toMissiondetail(taskList[2].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent == true && seaBedCompletedNum == 2" class="process" src="../assets/2.png" @click="toMissiondetail(taskList[2].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent == true && seaBedCompletedNum == 3" class="process" src="../assets/3.png" @click="toMissiondetail(taskList[2].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent == true && seaBedCompletedNum == 4" class="process" src="../assets/4.png" @click="toMissiondetail(taskList[2].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent == true && seaBedCompletedNum == 5" class="process" src="../assets/5.png" @click="toMissiondetail(taskList[2].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[2].taskCurrent != true" class="unselect" src="../assets/unselect.png">
          <img v-else class="select" src="../assets/select.png" @click="selectMission(2,taskList[2].taskId)">
        </div>
        <div class="u-baolihorse">
          <img v-if="taskList[3].taskCurrent == true || (baoliCompletedNum == 6 && taskList[3].hadGetDoll == false)" class="baolihorse" src="../assets/baolihorse.png" @click="toMissiondetail(taskList[3].taskId)">
          <img v-else class="baolihorse" src="../assets/baolihorse.png">
          <img v-if="taskList[3].hadGetDoll == true" class="hadgetdoll" src="../assets/hadGetDoll.png">
          <img v-else-if="taskList[3].hadComplete == true && taskList[3].hadGetDoll == false" class="getDoll" src="../assets/getDoll.png" @click="getDoll(3, taskList[3].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent == true && baoliCompletedNum == 0" class="process" src="../assets/0.png" @click="toMissiondetail(taskList[3].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent == true && baoliCompletedNum == 1" class="process" src="../assets/1.png" @click="toMissiondetail(taskList[3].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent == true && baoliCompletedNum == 2" class="process" src="../assets/2.png" @click="toMissiondetail(taskList[3].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent == true && baoliCompletedNum == 3" class="process" src="../assets/3.png" @click="toMissiondetail(taskList[3].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent == true && baoliCompletedNum == 4" class="process" src="../assets/4.png" @click="toMissiondetail(taskList[3].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent == true && baoliCompletedNum == 5" class="process" src="../assets/5.png" @click="toMissiondetail(taskList[3].taskId)">
          <img v-else-if="hadDoingMission == true && taskList[3].taskCurrent != true" class="unselect" src="../assets/unselect.png">
          <img v-else class="select" src="../assets/select.png" @click="selectMission(3,taskList[3].taskId)">
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
        <div v-if="hadCompleteAll==true && hadGetGift==true" class="libaostatue">
          <div><img class="libaotip" src="../assets/libaotip2.png"></div>
          <div><img class="gotlibao" src="../assets/gotlibaobtn.png"></div>
        </div>
        <div v-else-if="hadCompleteAll==true && hadGetGift==false" class="libaostatue">
          <div><img class="libaotip" src="../assets/libaotip2.png"></div>
          <div><img class="getlibao" src="../assets/getlibaobtn.png" @click="getGift(4)"></div>
        </div>
        <div v-else-if="hadCompleteAll==false && hadGetGift==false" class="libaoprocess">
          <div><img v-if="libaoCompletedNum == 0" class="libaocompletenum" src="../assets/libao0.png"></div>
          <div><img v-if="libaoCompletedNum == 1" class="libaocompletenum" src="../assets/libao1.png"></div>
          <div><img v-if="libaoCompletedNum == 2" class="libaocompletenum" src="../assets/libao2.png"></div>
          <div><img v-if="libaoCompletedNum == 3" class="libaocompletenum" src="../assets/libao3.png"></div>
          <div><img class="libaotip3" src="../assets/libaotip3.png"></div>
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
      <div class="m-failDialog" v-show="failDialogIsShow">
        <div class="u-failDialog">
          <img class="failDialog" src="../assets/failed.png">
          <div class="yes" @click="failDialogIsShow=false;">重新选择角色</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="m-congradulationDialog" v-show="congradulationDialogIsShow">
        <div class="u-congradulationDialog">
          <img v-if="dollType==0" class="congradulationDialog" src="../assets/gotPeiqi.png">
          <img v-if="dollType==1" class="congradulationDialog" src="../assets/gotWangwangdog.png">
          <img v-if="dollType==2" class="congradulationDialog" src="../assets/gotSeaBedTeam.png">
          <img v-if="dollType==3" class="congradulationDialog" src="../assets/gotBaoli.png">
          <img v-if="dollType==4" class="congradulationDialog" src="../assets/gotTrain.png">
          <div class="yes" @click="confirmUserInfo()">确认收货地址</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="m-addressDialog" v-show="addressDialogIsShow">
        <div class="u-addressDialog">
          <img class="addressDialog" src="../assets/addressdialog.png">
          <div class="inputarea">
            <input class="name" @keydown="addressKeyDown()" v-model="address.contact" placeholder="请输入收件人姓名" />
            <p v-show="nameValidShow" class="nameValid">请输入收件人姓名</p>
            <input class="phone" @keydown="phoneKeyDown()" v-model="address.phone" placeholder="请输入联系人号码" />
            <p v-show="phoneValidShow" class="phoneValid">请输入正确的手机号</p>
            <div class="areapicker" @click="showPicker3()">
              <span id="areapicker">选择地区</span>
              <img class="downarrow" src="../assets/downarrow.png">
            </div>
            <p v-show="addressValidShow" class="addressValid">选择地址</p>
            <input class="detailAddress" @keydown="detailAddressKeyDown()" v-model="address.address" placeholder="请输入详细地址" />
            <p v-show="detailAddressValidShow" class="detailAddressValid">请输入详细地址</p>
            <div class="sex">
              <label>
                    <input type="radio" name="radioName" id="radioName1" value="1" v-model="address.sex" hidden>
                    <label for="radioName1" class="radio-beauty"></label>
              <span class="radio-name">男</span>
              <input type="radio" name="radioName" id="radioName2" value="2" v-model="address.sex" hidden>
              <label for="radioName2" class="radio-beauty"></label>
              <span class="radio-name">女</span>
              </label>
            </div>
            <div class="birth" @click="showPicker4()">
              <span id="birth">选择日期</span>
              <img class="downarrow" src="../assets/downarrow.png">
            </div>
          </div>
          <div class="yes" @click="confirmAddress()">提交</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="m-confirmAddressDialog" v-show="confirmAddressDialogIsShow">
        <div class="u-addressDialog">
          <img class="addressDialog" src="../assets/confirmAddressDialog.png">
          <div class="inputarea">
            <div class="name">{{address.contact}}</div>
            <div class="phone">{{address.phone}}</div>
            <div class="areapicker">{{address.area}}</div>
            <div class="detailAddress">{{address.address}}</div>
            <div class="sex">{{address.sex == 1 ? '男' : '女'}}</div>
            <div class="birth">{{address.birthday}}</div>
          </div>
          <div class="yes" @click="saveAddress()">提交</div>
          <div class="cancel" @click="confirmAddressDialogIsShow = false">取消</div>
        </div>
      </div>
    </transition>
  
    <!-- 城市选择器 -->
    <awesome-picker ref="picker3" :textTitle="picker3.textTitle" :data="picker3.data" :anchor="picker3.anchor" @confirm="handlePicker3Confirm">
    </awesome-picker>
    <!-- 日期选择器 -->
    <awesome-picker ref="picker4" :textTitle="picker4.textTitle" :type="picker4.type" :anchor="picker4.anchor" @confirm="handlePicker4Confirm">
    </awesome-picker>
  </div>
</template>

<script>
  import areaData from 'vue-awesome-picker/src/area'
  import {
    devUrl
  } from '../js/url.js'
  import axios from 'axios';
  
  export default {
    name: 'index',
    data() {
      return {
        taskPid: 0, //当前选择的任务taskPid
        childNum: 12312, //参与的数
        ruleDialogIsShwo: false, //规则dialog
        confirmRole: false, //确认选择dialog
        congradulationDialogIsShow: false, //抽奖成功dialog
        dollType: 0, //控制抽奖成功显示的玩偶
        failDialogIsShow: false, //抽奖失败dialog
        confrimRoleText: '123', //确认选择玩偶dialog上的文案
        rokidId: '', //设备id
        hadCompleteAll: false, //四个父人物是否都完成
        hadGetGift: false, //是否领取神秘礼包
        peiqiCompletedNum: 0, //佩奇任务完成数
        wangCompletedNum: 0, //汪汪队任务完成数
        seaBedCompletedNum: 0, //海底小纵队任务完成数
        baoliCompletedNum: 0, //小马宝莉任务完成数
        libaoCompletedNum: 0, //父任务完成数
        hadDoingMission: false, //是否有正在进行的任务
        addressDialogIsShow: false,
        confirmAddressDialogIsShow: false,
        taskList: [{
          "taskPid": "",
          "taskName": "",
          "taskCurrent": "",
          "hadComplete": "",
          "hadGetDoll": "",
        }, {
          "taskPid": "",
          "taskName": "",
          "taskCurrent": "",
          "hadComplete": "",
          "hadGetDoll": "",
        }, {
          "taskPid": "",
          "taskName": "",
          "taskCurrent": "",
          "hadComplete": "",
          "hadGetDoll": "",
        }, {
          "taskPid": "",
          "taskName": "",
          "taskCurrent": "",
          "hadComplete": "",
          "hadGetDoll": "",
        }],
        address: {
          deviceId: "",
          phone: "",
          contact: "",
          area: "",
          address: "",
          sex: "",
          birthday: ""
        },
        picker3Value: null,
        picker3: {
          anchor: [],
          textTitle: '',
          data: areaData
        },
        picker4: {
          anchor: [],
          textTitle: '',
          type: 'date'
        },
        picker4Value: null,
        nameValidShow: false,
        phoneValidShow: false,
        addressValidShow: false,
        detailAddressValidShow: false
      }
    },
    created: function() {
      // release
      this.getRokidId().then((data) => {
        alert(data);
        this.rokidId = data
      }).then(() => {
        this.getChildNum()
        this.getTaskList();
      })
  
      //test
      // this.rokidId = "0201021740001646"
      // this.getChildNum()
      // this.getTaskList();
  
    },
    mounted: function() {
      // this.getRokidId();
      // alert(this.rokidId)
      //去掉冒泡事件
      document.getElementsByClassName("J-ruledialog")[0].addEventListener("click", function(event) {
        event.stopPropagation();
      }, false)
    },
    methods: {
      getChildNum() {
        //测试
        this.childNum = parseInt(Date.parse(new Date()) / 47000) - 32596162
        //从8月1日到8月30日人数增长5w5
        // this.childNum = parseInt(Date.parse(new Date()) / 47000) - 32618144
      },
      //获取RokidId
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
      //获取主页taskList
      getTaskList() {
        //每次数量需要初始化
        this.peiqiCompletedNum = 0; //佩奇任务完成数
        this.wangCompletedNum = 0; //汪汪队任务完成数
        this.seaBedCompletedNum = 0; //海底小纵队任务完成数
        this.baoliCompletedNum = 0; //小马宝莉任务完成数
        this.libaoCompletedNum = 0; //父任务完成数
        let params = {
          "param": {
            "deviceId": this.rokidId
          }
        };
        axios.post(devUrl + '/api/taskList', params, {timeout: 5000})
          .then((res) => {
            let json = res.data
            this.hadCompleteAll = json.data.hadCompleteAll
            this.hadGetGift = json.data.hadGetGift
            this.taskList = json.data.taskList
            this.hadDoingMission = json.data.taskList[0].taskCurrent || json.data.taskList[1].taskCurrent || json.data.taskList[2].taskCurrent || json.data.taskList[3].taskCurrent
            this.getPeiqiCompleteNum(json.data.taskList[0].taskChildList)
            this.getWangwangCompleteNum(json.data.taskList[1].taskChildList)
            this.getSeaBedCompleteNum(json.data.taskList[2].taskChildList)
            this.getHorseCompleteNum(json.data.taskList[3].taskChildList)
            this.getLibaoCompleteNum(json.data.taskList)
          }).catch((error) => {
            alert('当前活动参与人数过多，请多刷新几次页面~')
          })
      },
      //获取佩奇完成任务数
      getPeiqiCompleteNum(peiqiList) {
        for (let list of peiqiList) {
          if (list.taskStatus == true) {
            this.peiqiCompletedNum++;
          }
        }
      },
      //获取汪汪队完成任务数
      getWangwangCompleteNum(wangwanglist) {
        for (let list of wangwanglist) {
          if (list.taskStatus == true) {
            this.wangCompletedNum++;
          }
        }
      },
      //获取海底纵队任务完成数
      getSeaBedCompleteNum(seabedlist) {
        for (let list of seabedlist) {
          if (list.taskStatus == true) {
            this.seaBedCompletedNum++;
          }
        }
      },
      //获取小马宝莉任务完成数
      getHorseCompleteNum(horselist) {
        for (let list of horselist) {
          if (list.taskStatus == true) {
            this.baoliCompletedNum++;
          }
        }
      },
      //获取礼包完成进度
      getLibaoCompleteNum(taskList) {
        for (let list of taskList) {
          if (list.hadComplete == true) {
            this.libaoCompletedNum++;
          }
        }
      },
      //更改确认选择玩偶后dialog的文案
      changText(text) {
        this.confrimRoleText = text
      },
      //控制选择任务dialog
      selectMission(dialogType, taskPid) {
        switch (dialogType) {
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
      //锁定任务(选定任务)
      lockMission() {
        let params = {
          "param": {
            "deviceId": this.rokidId,
            "taskId": this.taskPid
          }
        }
        axios.post(devUrl + '/api/selectTask', params, {timeout: 5000})
          .then((res) => {
            let json = res.data
            if (json.status == true) {
              this.toMissiondetail(this.taskPid);
            }
          }).catch((e) => {
            alert('当前活动参与人数过多，请多刷新几次页面~')
          })
      },
      //查看任务详情
      toMissiondetail(taskPid) {
        this.$router.push({
          name: 'collect',
          params: {
            id: taskPid
          }
        });
      },
  
      //玩偶抽奖
      getDoll(dollType, taskId) {
        let params = {
          "param": {
            "deviceId": this.rokidId,
            "taskId": taskId
          }
        }
        axios.post(devUrl + '/api/getDoll', params, {timeout: 5000})
          .then((res) => {
            let json = res.data
            if (json.data.result) {
              this.dollType = dollType;
              this.congradulationDialogIsShow = true;
              this.getTaskList()
            } else {
              this.failDialogIsShow = true;
              this.getTaskList()
            }
          }).catch((e) => {
            alert('当前活动参与人数过多，请多刷新几次页面~')
          })
      },
      //领取神秘大礼包
      getGift(dollType) {
        let params = {
          "param": {
            "deviceId": this.rokidId
          }
        }
  
        axios.post(devUrl + '/api/getGift', params, {timeout: 5000})
          .then((res) => {
            let json = res.data
            if (json.data.result) {
              this.dollType = dollType;
              this.congradulationDialogIsShow = true;
              this.getTaskList()
            } else {
              this.failDialogIsShow = true;
              this.getTaskList()
            }
          }).catch((e) => {
            alert('当前活动参与人数过多，请多刷新几次页面~')
          })
      },
      //区域picker
      showPicker3() {
        this.$refs.picker3.show()
      },
      handlePicker3Confirm(v) {
        this.addressValidShow = false
        let pickres = ''
        for (let value of v) {
          pickres += value.value
        }
        this.picker3.anchor = v
        this.address.area = pickres
        document.getElementById('areapicker').innerHTML = this.address.area
      },
      //日期picker
      showPicker4() {
        this.$refs.picker4.show()
      },
      handlePicker4Confirm(v) {
        let dataresarr = []
        for (let value of v) {
          let temp = value.value.slice(0, -1)
          if (temp >= 1 && temp <= 9) {
            temp = "0" + temp.toString()
          }
          dataresarr.push(temp)
        }
        let datares = dataresarr.join('-')
        this.address.birthday = datares
        document.getElementById('birth').innerHTML = this.address.birthday
      },
      addressKeyDown() {
        this.nameValidShow = false;
      },
      phoneKeyDown() {
        this.phoneValidShow = false;
      },
      detailAddressKeyDown() {
        this.detailAddressValidShow = false;
      },
      //检查地址输入项
      confirmAddress() {
        if (this.address.contact == '' || this.address.contact == null) {
          this.nameValidShow = true;
        }
        if (this.address.phone == '' || this.address.phone == null || !(/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/.test(this.address.phone))) {
          this.phoneValidShow = true
        }
        if (this.address.area == '' || this.address.area == null) {
          this.addressValidShow = true
        }
        if (this.address.address == '' || this.address.address == null) {
          this.detailAddressValidShow = true
        }
        if (this.nameValidShow == false && this.phoneValidShow == false && this.addressValidShow == false && this.detailAddressValidShow == false) {
          this.address.deviceId = this.rokidId
          this.addressDialogIsShow = false;
          this.confirmAddressDialogIsShow = true;
        }
      },
      //确认收货地址
      confirmUserInfo() {
        let params = {
          "param": {
            "deviceId": this.rokidId
          }
        }
        axios.post(devUrl + '/api/getAddress', params, {timeout: 5000})
          .then((res) => {
            let json = res.data
            if (JSON.stringify(json.data) == "{}") {
              this.congradulationDialogIsShow = false;
              this.addressDialogIsShow = true
            } else {
              this.address = json.data
              this.congradulationDialogIsShow = false;
              this.confirmAddressDialogIsShow = true
            }
          }).catch((e) => {
            alert('当前活动参与人数过多，请多刷新几次页面~')
          })
      },
      //保存用户地址
      saveAddress() {
        let params = {
          "param": this.address
        }
        axios.post(devUrl + '/api/saveAddress', params, {timeout: 5000})
          .then((res) => {
            let json = res.data
            if (json.status == true) {
              alert('确认收货地址成功！')
              this.confirmAddressDialogIsShow = false;
              this.getTaskList();
            }
          }).catch((e) => {
            alert('当前活动参与人数过多，请多刷新几次页面~')
          })
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
          width: 4.32rem;
        }
        .rule {
          position: relative;
          width: 2.053rem;
          left: 2.4rem;
          bottom: 0.5rem;
        }
      }
      .u-scroller {
        -webkit-overflow-scrolling : touch;
        width: 100%;
        display: inline;
        white-space: nowrap;
        overflow-x: scroll;
        float: left;
        overflow-y: hidden;
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
          top: 5.05rem;
        }
        .process {
          position: absolute;
          width: 2.74rem;
          left: 0.84rem;
          top: 4.86rem;
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
          width: 5.4rem;
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
          .gotlibao {
            position: relative;
            top: -2.1rem;
            width: 1.23rem;
          }
        }
        .libaoprocess {
          text-align: center;
          .libaocompletenum {
            position: relative;
            top: -2.4rem;
            width: 2.453rem;
          }
          .libaotip3 {
            position: relative;
            top: -2rem;
            width: 5.05rem;
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
      background: rgba(0, 0, 0, 0.4);
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
      background: rgba(0, 0, 0, 0.4);
      .u-confirmRole {
        position: relative;
        top: 4.3rem;
        text-align: center;
        .confrimTip {
          position: relative;
          top: -3.5rem;
          font-size: 0.4rem;
        }
        .confirmRole {
          width: 8.933rem;
        }
        .cancel {
          position: relative;
          left: 0.533rem;
          top: -1.96rem;
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
          top: -3.26rem;
          line-height: 1.3rem;
          font-size: 0.4rem;
          color: #f5a623;
          // background-color: red
        }
      }
    }
    .m-congradulationDialog {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
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
    .m-addressDialog {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      .u-addressDialog {
        position: relative;
        top: 2rem;
        text-align: center;
        .addressDialog {
          width: 8.933rem;
        }
        .inputarea {
          margin-left: 0.7rem;
          input {
            font-size: 0.4rem;
            color: #323233;
            border: none;
            background-color: transparent;
          }
          input:-moz-placeholder,
          textarea:-moz-placeholder {
            color: #323232;
          }
          input:-ms-input-placeholder,
          textarea:-ms-input-placeholder {
            color: #323232;
          }
          input::-webkit-input-placeholder,
          textarea::-webkit-input-placeholder {
            color: #323232;
          }
           ::-webkit-input-placeholder {
            color: #323232;
          }
           :-moz-placeholder {
            color: #323232;
          }
           ::-moz-placeholder {
            color: #323232;
          }
           :-ms-input-placeholder {
            color: #323232;
          }
          .name {
            position: absolute;
            top: 1.71rem;
            left: 3.1rem;
            width: 5.5rem;
            // background-color: red;
          }
          .phone {
            position: absolute;
            top: 3rem;
            left: 3.1rem;
            width: 5.5rem;
            // background-color: blue;;
          }
          .areapicker {
            height: 0.6rem;
            position: absolute;
            width: 5.5rem;
            top: 4.24rem;
            // background-color: red;
            left: 3.1rem;
            font-size: 0.4rem;
            color: #323232;
            text-align: left;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            .downarrow {
              position: absolute;
              top: 0.17rem;
              width: 0.4rem;
              right: 0;
            }
          }
          .detailAddress {
            position: absolute;
            top: 5.55rem;
            left: 3.1rem;
            width: 5.5rem;
            // background-color: red;
          }
          .sex {
            font-size: 0;
            position: absolute;
            left: 3.1rem;
            top: 6.75rem;
            %common {
              padding: 0.05rem;
              background-color: #f5a623;
              background-clip: content-box;
            }
            .radio-name {
              vertical-align: middle;
              font-size: 0.4rem;
              margin-left: 0.1rem;
              margin-right: 0.5rem;
            }
            .radio-beauty {
              width: 0.4rem;
              height: 0.4rem;
              box-sizing: border-box;
              display: inline-block;
              border: 0.026rem solid #323232;
              vertical-align: middle;
              border-radius: 50%;
            }
            input[type="radio"]:checked+.radio-beauty {
              @extend %common;
            }
          }
          .birth {
            position: absolute;
            top: 8rem;
            left: 3.1rem;
            width: 5.5rem;
            font-size: 0.4rem;
            text-align: left;
            .downarrow {
              position: absolute;
              top: 0.17rem;
              width: 0.4rem;
              right: 0;
            }
          }
          .nameValid {
            position: absolute;
            left: 3.1rem;
            top: 2.25rem;
            color: #d84132;
          }
          .phoneValid {
            position: absolute;
            left: 3.1rem;
            top: 3.45rem;
            color: #d84132;
          }
          .addressValid {
            position: absolute;
            left: 3.1rem;
            top: 4.9rem;
            color: #d84132;
          }
          .detailAddressValid {
            position: absolute;
            left: 3.1rem;
            top: 6.2rem;
            color: #d84132;
          }
        }
        .yes {
          position: relative;
          top: -1.5rem;
          line-height: 1.3rem;
          text-align: center;
          font-size: 0.4rem;
          color: #F5A623;
          // background-color: yellow;
        }
      }
    }
    .m-confirmAddressDialog {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      .u-addressDialog {
        position: relative;
        top: 2rem;
        text-align: center;
        .addressDialog {
          width: 8.933rem;
        }
        .inputarea {
          margin-left: 0.7rem;
          text-align: left;
          color: #323232;
          font-size: 0.4rem;
          .name {
            position: absolute;
            top: 1.71rem;
            left: 3.1rem;
            width: 5.5rem;
            // background-color: red;
          }
          .phone {
            position: absolute;
            top: 3rem;
            left: 3.1rem;
            width: 5.5rem;
            // background-color: blue;;
          }
          .areapicker {
            height: 0.6rem;
            position: absolute;
            width: 5.5rem;
            top: 4.24rem;
            // background-color: red;
            left: 3.1rem;
          }
          .detailAddress {
            position: absolute;
            top: 5.47rem;
            left: 3.1rem;
            width: 5.5rem;
            // background-color: red;
          }
          .sex {
            position: absolute;
            top: 6.725rem;
            left: 3.1rem;
            width: 5.5rem;
          }
          .birth {
            position: absolute;
            top: 8rem;
            left: 3.1rem;
            width: 5.5rem;
            font-size: 0.4rem;
            text-align: left;
          }
        }
        .yes {
          position: relative;
          top: -1.5rem;
          line-height: 1.3rem;
          width: 4rem;
          left: 5rem;
          // text-align: center;
          font-size: 0.4rem;
          color: #408cff;
        }
        .cancel {
          position: relative;
          top: -2.8rem;
          line-height: 1.3rem;
          width: 4rem;
          left: 0.8rem;
          // text-align: center;
          font-size: 0.4rem;
          color: #9b9b9b;
        }
      }
    }
    .m-failDialog {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      .u-failDialog {
        position: relative;
        top: 3.3rem;
        text-align: center;
        .failDialog {
          width: 8.933rem;
        }
        .yes {
          position: relative;
          top: -1.5rem;
          line-height: 1.3rem;
          text-align: center;
          font-size: 0.4rem;
          color: #838383;
          // background-color: yellow;
        }
      }
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity .3s
    }
    .fade-enter,
    .fade-leave-to/* .fade-leave-active in below version 2.1.8 */
    {
      opacity: 0
    }
  }
</style>