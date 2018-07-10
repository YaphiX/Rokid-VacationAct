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
          <img class="peiqi" src="../assets/peiqipig.png">
        </div>
        <div class="u-wangwangdog">
          <img class="wangwangdog" src="../assets/wangwangdog.png">
        </div>
        <div class="u-seabedteam">
          <img class="seabedteam" src="../assets/seabedteam.png">
        </div>
        <div class="u-baolihorse">
          <img class="baolihorse" src="../assets/baolihorse.png">
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
          <div class="confrimTip">确定选择角色为“汪汪队”么？</div>
          <div class="cancel" @click="confirmRole=false">取消</div>
          <div class="yes" @click="confirmRole=false">确定</div>
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
      childNum: 12312,
      ruleDialogIsShwo: false,
      confirmRole: false
    }
  },
  mounted: function() {
    document.getElementsByClassName("J-ruledialog")[0].addEventListener("click", function(event){
      event.stopPropagation(); 
    },false)
  },
  method: {
    
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
          margin-top: 0.68rem;
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
      position: absolute;
      left: 0.46rem;
      right: 0.46rem;
      .libao {
        width: 100%;
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
  .fade-enter-active, .fade-leave-active {
  transition: opacity .3s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
}


</style>
