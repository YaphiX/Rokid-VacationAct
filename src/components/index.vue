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
        <img class="rule" src="../assets/rulebtn.png">
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
      <div class="u-libaoduolaameng">
        <img class="libaoduolaameng" src="../assets/libaoduolaameng.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      childNum: 12312
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
    .u-libaoduolaameng {
      position: absolute;
      left: 0.46rem;
      right: 0.46rem;
      .libaoduolaameng {
        width: 100%;
      }
    }
  }
}


</style>
