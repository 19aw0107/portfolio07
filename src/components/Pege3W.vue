<<<<<<< HEAD
<template>
  <section>
    <div id="pegew1">
      <div class="hgroup">
        <h2>メガネさんのポートフォリオ</h2>
        <p class="hgroup-sub">webサイト</p>
      </div>
      <div>
        <figure class="pegew1-img">
          <img src="../assets/works/works04.png">
        </figure>
        <p class="pegew1-description">
          前回の自己紹介サイトを元に、1から作り直したサイトです。<br>
          CSSやJavascriptを使った動き(アニメーション)に挑戦しました。<br>
          デザインのコンセプトは、人型ロボットのコックピットです。
        </p>
        <p class="pegew1-name">制作期間</p>
        <p class="pegew1-description">
          2019年9月1日 ～ 10月10日 コーディング<br>
        </p>
        <p class="pegew1-name">担当した領域</p>
        <p class="pegew1-description">
          デザイン、コーディング
        </p>
        <p class="pegew1-name">制作に使った言語</p>
        <div class="pegew1-program-list">
          <ul class="pegew1-program-list-ul">
            <li class="pegew1-program-list-ul-li">
              <img src="../assets/img/skill01.png" class="pegew1-program-list-ul-li-img" alt="HTML">
            </li>
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill02.png" class="pegew1-program-list-ul-li-img" alt="CSS">
            </li>
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill03.png" class="pegew1-program-list-ul-li-img" alt="javascript">
            </li>
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill04.png" class="pegew1-program-list-ul-li-img" alt="Vue.js">
            </li>
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill09.png" class="pegew1-program-list-ul-li-img" alt="Vue.js">
            </li>
          </ul>
        </div>
        <p class="pegew1-name">制作に使ったソフト</p>
        <div class="pegew1-program-list">
          <ul class="pegew1-program-list-ul">
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill10.png" class="pegew1-program-list-ul-li-img" alt="Visual Studio Code">
            </li>
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill11.png" class="pegew1-program-list-ul-li-img" alt="Visual Studio Code">
            </li>
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill15.png" class="pegew1-program-list-ul-li-img" alt="Visual Studio Code">
            </li>
          </ul>
        </div>
        <a href="https://github.com/19aw0107/portfolio03" target="_blank" rel="noopener noreferrer">
          <div class="works-btn">
            <p>githubを開く</p>
          </div>
        </a>
        <a href="http://meganekun.xsrv.jp/portfolio03/" target="_blank" rel="noopener noreferrer">
          <div class="works-btn">
            <p>サイトを開く</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  /*name: 'HelloWorld',
  props: {
    msg: String
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#pegew1{
    margin-top: 100px
}
h2{
  font-size: 60px;
  font-weight: 700;
  line-height: 89px;
  text-align: center;
}
.hgroup-sub{
  font-size: 26px;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
}
.pegew1-img{
    width: 846px;
    margin: 60px auto 60px;
}
.pegew1-img img{
  width: 846px;
}
.pegew1-name{
    width: 846px;
    font-size: 26px;
    font-weight: 700;
    line-height: 36px;
    margin: 0 auto;
}
.pegew1-description{
    width: 846px;
    font-size: 18px;
    font-weight: 500;
    line-height: 30.6px;
    margin: 20px auto 90px;
}
.pegew1-program-list{
  width: 846px;
  margin: 0 auto;
}
.pegew1-program-list-ul{
    font-size: 0;
}
.pegew1-program-list-ul-li{
    display: inline-block;
    margin: 30px 48.8px 110px 0;
    font-size: 0;
}
.pegew1-program-list-ul-li-img{
    width: 100px;
    font-size: 0;
}
.works-btn{
  width: 300px;
  height: 80px;
  font-size: 20px;
  font-weight: 700;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
  background: #000000;
  box-shadow : 0 0 13px #666666 ;
  margin: 40px auto;
}
@media screen and (max-width:1130px){
  #pegew1{
    margin-top: 90px
}
    h2{
        font-size: 40px;
        font-weight: 700;
        line-height: 54px;
        text-align: center;
    }
    .hgroup-sub{
        font-size: 20px;
        font-weight: 500;
        line-height: 46px;
        text-align: center;
    }
  .pegew1-img{
      width: 700px;
      margin: 16px auto 16px;
  }
  .pegew1-img img{
      width: 700px;
  }
.pegew1-name{
  width: 700px;
    font-size: 30px;
    font-weight: 700;
    line-height: 46px;
    margin: 0 auto;
}
.pegew1-description{
    width: 700px;
    font-size: 18px;
    font-weight: 500;
    line-height: 30.6px;
    margin: 20px auto 80px;
}
.pegew1-program-list{
  width: 700px;
  margin: 0 auto;
}
.pegew1-program-list-ul{
    font-size: 0;
}
.pegew1-program-list-ul-li{
    display: inline-block;
    margin: 30px 40px 110px 0;
    font-size: 0;
}
.pegew1-program-list-ul-li-img{
    width: 100px;
    font-size: 0;
}
}
@media screen and (max-width:750px){
  #pegew1{
      margin-top: 80px
  }
    h2{
        font-size: 40px;
        font-weight: 700;
        line-height: 54px;
        text-align: center;
    }
    .hgroup-sub{
        font-size: 20px;
        font-weight: 500;
        line-height: 46px;
        text-align: center;
    }
  .pegew1-img{
      width: 340px;
      margin: 10px auto 10px;
  }
  .pegew1-img img{
      width: 340px;
  }
.pegew1-name{
    width: 340px;
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    margin: 0 auto;
}
.pegew1-description{
    width: 340px;
    font-size: 16px;
    font-weight: 500;
    line-height: 30.6px;
    margin: 20px auto 70px;
}
.pegew1-program-list{
  width: 340px;
  margin: 0 auto;
}
.pegew1-program-list-ul{
    font-size: 0;
    margin-bottom: 60px;
}
.pegew1-program-list-ul-li{
    display: inline-block;
    margin: 30px 30px 30px 0;
    font-size: 0;
}
.pegew1-program-list-ul-li-img{
    width: 80px;
    font-size: 0;
}
  }
</style>
=======
<template>
  <section>
    <div id="pegew1">
      <div class="hgroup">
        <h2>メガネさんのポートフォリオ</h2>
        <p class="hgroup-sub">webサイト</p>
      </div>
      <div>
        <figure class="pegew1-img">
          <img src="../assets/works/works04.png">
        </figure>
        <p class="pegew1-description">
          前回の自己紹介サイトを元に、1から作り直したサイトです。<br>
          CSSやJavascriptを使った動き(アニメーション)に挑戦しました。<br>
          デザインのコンセプトは、人型ロボットのコックピットです。
        </p>
        <p class="pegew1-name">制作期間</p>
        <p class="pegew1-description">
          2019年9月 コーディング<br>
        </p>
        <p class="pegew1-name">担当した領域</p>
        <p class="pegew1-description">
          デザイン、コーディング
        </p>
        <p class="pegew1-name">制作に使った言語</p>
        <div class="pegew1-program-list">
          <ul class="pegew1-program-list-ul">
            <li class="pegew1-program-list-ul-li">
              <img src="../assets/img/skill01.png" class="pegew1-program-list-ul-li-img" alt="HTML">
            </li>
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill02.png" class="pegew1-program-list-ul-li-img" alt="CSS">
            </li>
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill03.png" class="pegew1-program-list-ul-li-img" alt="javascript">
            </li>
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill04.png" class="pegew1-program-list-ul-li-img" alt="Vue.js">
            </li>
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill09.png" class="pegew1-program-list-ul-li-img" alt="Vue.js">
            </li>
          </ul>
        </div>
        <p class="pegew1-name">制作に使ったソフト</p>
        <div class="pegew1-program-list">
          <ul class="pegew1-program-list-ul">
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill10.png" class="pegew1-program-list-ul-li-img" alt="Visual Studio Code">
            </li>
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill11.png" class="pegew1-program-list-ul-li-img" alt="Visual Studio Code">
            </li>
            <li class="pegew1-program-list-ul-li">
                <img src="../assets/img/skill15.png" class="pegew1-program-list-ul-li-img" alt="Visual Studio Code">
            </li>
          </ul>
        </div>
        <a href="https://github.com/19aw0107/portfolio03" target="_blank" rel="noopener noreferrer">
          <div class="works-btn">
            <p>githubを開く</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  /*name: 'HelloWorld',
  props: {
    msg: String
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#pegew1{
    margin-top: 100px
}
h2{
  font-size: 60px;
  font-weight: 700;
  line-height: 89px;
  text-align: center;
}
.hgroup-sub{
  font-size: 26px;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
}
.pegew1-img{
    width: 846px;
    margin: 60px auto 60px;
}
.pegew1-img img{
  width: 846px;
}
.pegew1-name{
    width: 846px;
    font-size: 26px;
    font-weight: 700;
    line-height: 36px;
    margin: 0 auto;
}
.pegew1-description{
    width: 846px;
    font-size: 18px;
    font-weight: 500;
    line-height: 30.6px;
    margin: 20px auto 90px;
}
.pegew1-program-list{
  width: 846px;
  margin: 0 auto;
}
.pegew1-program-list-ul{
    font-size: 0;
}
.pegew1-program-list-ul-li{
    display: inline-block;
    margin: 30px 48.8px 110px 0;
    font-size: 0;
}
.pegew1-program-list-ul-li-img{
    width: 100px;
    font-size: 0;
}
.works-btn{
  width: 300px;
  height: 80px;
  font-size: 20px;
  font-weight: 700;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
  background: #000000;
  box-shadow : 0 0 13px #666666 ;
  margin: 40px auto;
}
@media screen and (max-width:1130px){
  #pegew1{
    margin-top: 90px
}
    h2{
        font-size: 40px;
        font-weight: 700;
        line-height: 54px;
        text-align: center;
    }
    .hgroup-sub{
        font-size: 20px;
        font-weight: 500;
        line-height: 46px;
        text-align: center;
    }
  .pegew1-img{
      width: 700px;
      margin: 16px auto 16px;
  }
  .pegew1-img img{
      width: 700px;
  }
.pegew1-name{
  width: 700px;
    font-size: 30px;
    font-weight: 700;
    line-height: 46px;
    margin: 0 auto;
}
.pegew1-description{
    width: 700px;
    font-size: 18px;
    font-weight: 500;
    line-height: 30.6px;
    margin: 20px auto 80px;
}
.pegew1-program-list{
  width: 700px;
  margin: 0 auto;
}
.pegew1-program-list-ul{
    font-size: 0;
}
.pegew1-program-list-ul-li{
    display: inline-block;
    margin: 30px 40px 110px 0;
    font-size: 0;
}
.pegew1-program-list-ul-li-img{
    width: 100px;
    font-size: 0;
}
}
@media screen and (max-width:750px){
  #pegew1{
      margin-top: 80px
  }
    h2{
        font-size: 40px;
        font-weight: 700;
        line-height: 54px;
        text-align: center;
    }
    .hgroup-sub{
        font-size: 20px;
        font-weight: 500;
        line-height: 46px;
        text-align: center;
    }
  .pegew1-img{
      width: 340px;
      margin: 10px auto 10px;
  }
  .pegew1-img img{
      width: 340px;
  }
.pegew1-name{
    width: 340px;
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    margin: 0 auto;
}
.pegew1-description{
    width: 340px;
    font-size: 16px;
    font-weight: 500;
    line-height: 30.6px;
    margin: 20px auto 70px;
}
.pegew1-program-list{
  width: 340px;
  margin: 0 auto;
}
.pegew1-program-list-ul{
    font-size: 0;
    margin-bottom: 60px;
}
.pegew1-program-list-ul-li{
    display: inline-block;
    margin: 30px 30px 30px 0;
    font-size: 0;
}
.pegew1-program-list-ul-li-img{
    width: 80px;
    font-size: 0;
}
  }
</style>
>>>>>>> 87760e7238fc516bc80404edb222c6ebaf6ac068
