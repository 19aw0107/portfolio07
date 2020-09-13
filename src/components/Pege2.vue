<template>
  <section>
    <div id="pege2">
      <div class="pege2-hgroup">
        <h2>Works</h2>
        <p class="hgroup-sub">今まで作ってきたもの</p>
      </div>
      <div class="pege2-nav">
        <ul class="pege2-ul">
          <li class="pege2-ul-li" @click="allon()"  v-bind:class="{ 'on': allbtn}">
            <p class="pege2-ul-li-p">All</p>
          </li>
          <li class="pege2-ul-li" @click="webon()" v-bind:class="{ 'on': webbtn}">
            <p class="pege2-ul-li-p">Web</p>
          </li>
          <li class="pege2-ul-li" @click="illuston()" v-bind:class="{ 'on': illustbtn}">
            <p class="pege2-ul-li-p">Illustration</p>
          </li>
        </ul>
      </div>
      <section class="pege2-list">
        <article class="pege2-list-article web on" v-if="web">
          <router-link to="/Works01">
            <figure>
              <img src="../assets/img/works01.png">
            </figure>
            <p class="pege2-list-article-p">【Web】日の当たらない倉庫</p>
          </router-link>
        </article>
        <article class="pege2-list-article web on" v-if="web">
          <router-link to="/Works02">
            <figure>
              <img src="../assets/img/works02.png">
            </figure>
            <p class="pege2-list-article-p">【Web】嘉手川航太朗なのです！</p>
          </router-link>
        </article>
        <article class="pege2-list-article web on" v-if="web">
          <router-link to="/Works03">
            <figure>
              <img src="../assets/img/works03.png">
            </figure>
            <p class="pege2-list-article-p">【Web】メガネさんのポートフォリオ</p>
          </router-link>
        </article>
        <article class="pege2-list-article web on" v-if="web">
          <router-link to="/Works04">
            <figure>
              <img src="../assets/img/works04.png">
            </figure>
            <p class="pege2-list-article-p">【Web】じゃんけんゲーム</p>
          </router-link>
        </article>
        <article class="pege2-list-article web on" v-if="web">
          <router-link to="/Works05">
            <figure>
              <img src="../assets/img/works05.png">
            </figure>
            <p class="pege2-list-article-p">【Web】GOYOZAN</p>
          </router-link>
        </article>
        <article class="pege2-list-article web on" v-if="web">
          <router-link to="/Works06">
            <figure>
              <img src="../assets/img/works06.png">
            </figure>
            <p class="pege2-list-article-p">【Web】GOYOZAN</p>
          </router-link>
        </article>
        <article class="pege2-list-article web on" v-if="web">
          <router-link to="/Works07">
            <figure>
              <img src="../assets/img/works07.png">
            </figure>
            <p class="pege2-list-article-p">【Web】ポートフォリオサイト</p>
          </router-link>
        </article>
        <article class="pege2-list-article illust on" v-if="illust">
          <router-link to="/Works08">
            <figure>
              <img src="../assets/img/works09.png">
            </figure>
            <p class="pege2-list-article-p">【イラスト】僕</p>
          </router-link>
        </article>
      </section>
      <div></div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      allbtn: true,
      webbtn: false,
      illustbtn: false,
      web: true,
      illust: true
    }
  },
  methods: {
    allon () {
      this.allbtn=true
      this.webbtn=false
      this.illustbtn=false
      this.web=true
      return this.illust=true
    },
    webon () {
      this.allbtn=false
      this.webbtn=true
      this.illustbtn=false
      this.web=true
      return this.illust=false
    },
    illuston () {
      this.allbtn=false
      this.webbtn=false
      this.illustbtn=true
      this.web=false
      return this.illust=true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #pege2{
      width: 100%;
      margin: 105px 0 0 0;
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
  #pege2{
      margin-top: 200px;
  }
  .pege2-nav{
      width: 100%;
      text-align: center;
      margin: 70px 0
  }
  .pege2-ul{
      display: inline-block;
  }
  .pege2-ul-li{
      display: inline-block;
      width: 300px;
      height: 70px;
      text-align: center;
      font-size: 0;
  }
  li.on{
      border-radius: 40px;
      color: #FFFFFF;
      background: #000000;
  }
  .pege2-ul-li-p{
      font-size: 40px;
      font-weight: 700;
      line-height: 70px;
  }
  #all,#web,#illust{
      cursor: pointer;
  }
  .pege2-list{
      width: 1130px;
      margin: 0 auto;
      font-size: 0;
  }
  .pege2-list-article{
      display: inline-block;
      width: 340px;
      margin: 0 54px 47px 0;
  }
  .pege2-list-article:nth-of-type(3n){
      display: inline-block;
      width: 340px;
      margin: 0 0 47px 0;
  }
  .pege2-list-article-p{
      font-size: 18px;
      font-weight: 700;
      line-height: 30.6px;
      margin: 10px 0;
      text-align: center;
  }
  @media screen and (max-width:1130px){
    #pege2{
      width: 100%;
      margin: 200px 0 0 0;
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
    .pege2-nav{
        width: 100%;
        text-align: center;
        margin: 70px 0
    }
    .pege2-ul{
        display: inline-block;
    }
    .pege2-ul-li{
        display: inline-block;
        width: 150px;
        height: 50px;
        text-align: center;
        font-size: 0;
    }
    li.on{
        border-radius: 40px;
        color: #FFFFFF;
        background: #000000;
    }
    .pege2-ul-li-p{
        font-size: 20px;
        font-weight: 700;
        line-height: 50px;
    }
    #all,#web,#illust{
        cursor: pointer;
    }
    .pege2-list{
        width: 734px;
        margin: 0 auto;
        font-size: 0;
    }
    .pege2-list-article{
        display: inline-block;
        width: 340px;
        margin: 0 54px 47px 0;
    }
    .pege2-list-article:nth-of-type(3n){
      display: inline-block;
      width: 340px;
      margin: 0 54px 47px 0;
    }
    .pege2-list-article:nth-of-type(2n){
      display: inline-block;
      width: 340px;
      margin: 0 0 47px 0;
    }
    .pege2-list-article:nth-child(2n){
        display: inline-block;
        width: 340px;
        margin: 0 0 47px 0;
    }
    .pege2-list-article-p{
        font-size: 18px;
        font-weight: 700;
        line-height: 30.6px;
        margin: 10px 0;
        text-align: center;
    }
  }
  @media screen and (max-width:750px){
    #pege2{
      width: 100%;
      margin: 200px 0 0 0;
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
    .pege2-nav{
        width: 100%;
        text-align: center;
        margin: 30px 0 50px 0
    }
    .pege2-ul{
        display: inline-block;
    }
    .pege2-ul-li{
        display: inline-block;
        width: 120px;
        height: 30px;
        text-align: center;
        font-size: 0;
    }
    li.on{
        border-radius: 40px;
        color: #FFFFFF;
        background: #000000;
    }
    .pege2-ul-li-p{
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
    }
    #all,#web,#illust{
        cursor: pointer;
    }
    .pege2-list{
        width: 340px;
        margin: 0 auto;
        font-size: 0;
    }
    .pege2-list-article{
        display: inline-block;
        width: 340px;
        margin: 0 0 47px 0;
    }
    .pege2-list-article:nth-of-type(3n){
      display: inline-block;
      width: 340px;
      margin: 0 0 47px 0;
    }
    .pege2-list-article:nth-of-type(2n){
      display: inline-block;
      width: 340px;
      margin: 0 0 47px 0;
    }
    .pege2-list-article:nth-child(2n){
        display: inline-block;
        width: 340px;
        margin: 0 0 47px 0;
    }
    .pege2-list-article-p{
        font-size: 18px;
        font-weight: 700;
        line-height: 30.6px;
        margin: 10px 0;
        text-align: center;
    }
  }
</style>
