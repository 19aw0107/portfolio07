<<<<<<< HEAD
<template>
  <section>
    <div id="pege4">
      <div class="hgroup">
        <h2>Skill</h2>
        <p class="hgroup-sub">学んできたこと</p>
      </div>
      <div class="pege4-program">
        <p class="pege4-program-p">Program</p>
        <div class="pege4-program-list">
          <ul class="pege4-program-list-ul">
            <li class="pege4-program-list-ul-li">
              <img src="../assets/img/skill01.png" class="pege4-program-list-ul-li-img" alt="HTML">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill02.png" class="pege4-program-list-ul-li-img" alt="CSS">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill03.png" class="pege4-program-list-ul-li-img" alt="javascript">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill04.png" class="pege4-program-list-ul-li-img" alt="Vue.js">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill05.png" class="pege4-program-list-ul-li-img" alt="Vue CLI">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill06.png" class="pege4-program-list-ul-li-img" alt="Nuxt">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill07.png" class="pege4-program-list-ul-li-img" alt="PHP">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill08.png" class="pege4-program-list-ul-li-img" alt="MySQL">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill09.png" class="pege4-program-list-ul-li-img" alt="jQuery">
            </li>
          </ul>
        </div>
      </div>
      <div class="pege4-tool">
        <p class="pege4-tool-p">Tool</p>
        <div class="pege4-program-list">
          <ul class="pege4-program-list-ul">
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill10.png" class="pege4-program-list-ul-li-img" alt="Photoshop">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill11.png" class="pege4-program-list-ul-li-img" alt="Illustrator">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill12.png" class="pege4-program-list-ul-li-img" alt="XD">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill13.png" class="pege4-program-list-ul-li-img" alt="After Effects">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill14.png" class="pege4-program-list-ul-li-img" alt="Dreamweaver">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill15.png" class="pege4-program-list-ul-li-img" alt="Visual Studio Code">
            </li>
          </ul>
        </div>
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
<style lang="scss">
#pege4{
  width: 1138px;
  margin: 357px auto 0;
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
.pege4-program{
  width: 1138px;
  margin: 80px auto 0;
}
.pege4-tool{
  margin-top: 124px;
  margin: 124px auto 0;
}
.pege4-program-p,.pege4-tool-p{
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
}
.pege4-program-list-ul{
    font-size: 0;
}
.pege4-program-list-ul-li{
    display: inline-block;
    margin: 30px 48.8px 110px 0;
    font-size: 0;
}
.pege4-program-list-ul-li:nth-of-type(6n){
    display: inline-block;
    margin: 30px 0 110px 0;
}
.pege4-program-list-ul-li-img{
    width: 149px;
    font-size: 0;
}
@media screen and (max-width:1130px){
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
    #pege4{
  width: 740px;
  margin: 357px auto 0;
}
.pege4-program{
  width: 740px;
  margin: 80px auto 0;
}
.pege4-tool{
  margin-top: 124px;
  margin: 124px auto 0;
}
.pege4-program-p,.pege4-tool-p{
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
}
.pege4-program-list-ul{
    font-size: 0;
}
.pege4-program-list-ul-li{
    display: inline-block;
    margin: 30px 48px 110px 0;
    font-size: 0;
}
.pege4-program-list-ul-li:nth-of-type(6n){
    display: inline-block;
    margin: 30px 48px 110px 0;
}
.pege4-program-list-ul-li:nth-of-type(4n){
    display: inline-block;
    margin: 30px 0 110px 0;
}
.pege4-program-list-ul-li-img{
    width: 149px;
    font-size: 0;
}
}
@media screen and (max-width:750px){
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
    #pege4{
  width: 340px;
  margin: 200px auto 0;
}
.pege4-program{
  width: 330px;
  margin: 80px auto 0;
}
.pege4-tool{
  margin-top: 124px;
  margin: 124px auto 0;
}
.pege4-program-p,.pege4-tool-p{
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
}
.pege4-program-list-ul{
    font-size: 0;
}
.pege4-program-list-ul-li{
    display: inline-block;
    margin: 30px 0 30px 0;
    font-size: 0;
}
.pege4-program-list-ul-li:nth-of-type(6n){
    display: inline-block;
    margin: 30px 0px 30px 0;
}
.pege4-program-list-ul-li:nth-of-type(4n){
    display: inline-block;
    margin: 30px 0 30px 0;
}
.pege4-program-list-ul-li:nth-child(odd){
    display: inline-block;
    margin: 30px 32px 30px 0;
}
.pege4-program-list-ul-li-img{
    width: 149px;
    font-size: 0;
}
  }
</style>
=======
<template>
  <section>
    <div id="pege4">
      <div class="hgroup">
        <h2>Skill</h2>
        <p class="hgroup-sub">学んできたこと</p>
      </div>
      <div class="pege4-program">
        <p class="pege4-program-p">Program</p>
        <div class="pege4-program-list">
          <ul class="pege4-program-list-ul">
            <li class="pege4-program-list-ul-li">
              <img src="../assets/img/skill01.png" class="pege4-program-list-ul-li-img" alt="HTML">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill02.png" class="pege4-program-list-ul-li-img" alt="CSS">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill03.png" class="pege4-program-list-ul-li-img" alt="javascript">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill04.png" class="pege4-program-list-ul-li-img" alt="Vue.js">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill05.png" class="pege4-program-list-ul-li-img" alt="Vue CLI">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill06.png" class="pege4-program-list-ul-li-img" alt="Nuxt">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill07.png" class="pege4-program-list-ul-li-img" alt="PHP">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill08.png" class="pege4-program-list-ul-li-img" alt="MySQL">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill09.png" class="pege4-program-list-ul-li-img" alt="jQuery">
            </li>
          </ul>
        </div>
      </div>
      <div class="pege4-tool">
        <p class="pege4-tool-p">Tool</p>
        <div class="pege4-program-list">
          <ul class="pege4-program-list-ul">
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill10.png" class="pege4-program-list-ul-li-img" alt="Photoshop">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill11.png" class="pege4-program-list-ul-li-img" alt="Illustrator">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill12.png" class="pege4-program-list-ul-li-img" alt="XD">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill13.png" class="pege4-program-list-ul-li-img" alt="After Effects">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill14.png" class="pege4-program-list-ul-li-img" alt="Dreamweaver">
            </li>
            <li class="pege4-program-list-ul-li">
                <img src="../assets/img/skill15.png" class="pege4-program-list-ul-li-img" alt="Visual Studio Code">
            </li>
          </ul>
        </div>
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
<style lang="scss">
#pege4{
  width: 1138px;
  margin: 357px auto 0;
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
.pege4-program{
  width: 1138px;
  margin: 80px auto 0;
}
.pege4-tool{
  margin-top: 124px;
  margin: 124px auto 0;
}
.pege4-program-p,.pege4-tool-p{
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
}
.pege4-program-list-ul{
    font-size: 0;
}
.pege4-program-list-ul-li{
    display: inline-block;
    margin: 30px 48.8px 110px 0;
    font-size: 0;
}
.pege4-program-list-ul-li:nth-of-type(6n){
    display: inline-block;
    margin: 30px 0 110px 0;
}
.pege4-program-list-ul-li-img{
    width: 149px;
    font-size: 0;
}
@media screen and (max-width:1130px){
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
    #pege4{
  width: 740px;
  margin: 357px auto 0;
}
.pege4-program{
  width: 740px;
  margin: 80px auto 0;
}
.pege4-tool{
  margin-top: 124px;
  margin: 124px auto 0;
}
.pege4-program-p,.pege4-tool-p{
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
}
.pege4-program-list-ul{
    font-size: 0;
}
.pege4-program-list-ul-li{
    display: inline-block;
    margin: 30px 48px 110px 0;
    font-size: 0;
}
.pege4-program-list-ul-li:nth-of-type(6n){
    display: inline-block;
    margin: 30px 48px 110px 0;
}
.pege4-program-list-ul-li:nth-of-type(4n){
    display: inline-block;
    margin: 30px 0 110px 0;
}
.pege4-program-list-ul-li-img{
    width: 149px;
    font-size: 0;
}
}
@media screen and (max-width:750px){
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
    #pege4{
  width: 340px;
  margin: 200px auto 0;
}
.pege4-program{
  width: 330px;
  margin: 80px auto 0;
}
.pege4-tool{
  margin-top: 124px;
  margin: 124px auto 0;
}
.pege4-program-p,.pege4-tool-p{
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
}
.pege4-program-list-ul{
    font-size: 0;
}
.pege4-program-list-ul-li{
    display: inline-block;
    margin: 30px 0 30px 0;
    font-size: 0;
}
.pege4-program-list-ul-li:nth-of-type(6n){
    display: inline-block;
    margin: 30px 0px 30px 0;
}
.pege4-program-list-ul-li:nth-of-type(4n){
    display: inline-block;
    margin: 30px 0 30px 0;
}
.pege4-program-list-ul-li:nth-child(odd){
    display: inline-block;
    margin: 30px 32px 30px 0;
}
.pege4-program-list-ul-li-img{
    width: 149px;
    font-size: 0;
}
  }
</style>
>>>>>>> 87760e7238fc516bc80404edb222c6ebaf6ac068
