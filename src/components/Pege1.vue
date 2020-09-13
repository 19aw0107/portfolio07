<template>
  <section>
    <div id="pege1">
      <div class="pege1-hgroup">
        <h1>KADEKAWA KOTARO</h1>
        <p class="pege1-hgroup-sub">PORTFOLIO</p>
      </div>
      <div>
        <nav class="pege1-nav">
          <ul>
            <li class="pege1-nav-li">
              <a href="#pege2">
                <p class="pege1-nav-li-p">Works</p>
              </a>
            </li>
            <li class="pege1-nav-li">
              <a href="#pege3">
                <p class="pege1-nav-li-p">Profile</p>
              </a>
            </li>
            <li class="pege1-nav-li">
              <a href="#pege4">
                <p class="pege1-nav-li-p">Skill</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <noscript>
        <p>
          このページではJavaScriptを使用しています。<br>
          Javascriptを許可しない場合は、<wbr>正しく表示されないことがあります。
        </p>
      </noscript>
    </div>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #pege1{
      display: block;
      width: 100%;
      height: 100vh;
  }
  .pege1-hgroup{
      height: 236.5px;
      text-align: center;
      white-space: nowrap;
      position: absolute;
      top: calc(50% - 100px);
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
  }
  h1{
      font-size: 100px;
      font-weight: 900;
      line-height: 148px;
  }
  .pege1-hgroup-sub{
      font-size: 60px;
      font-weight: 900;
      line-height: 89px;
  }
  .pege1-nav{
      text-align: center;
      white-space: nowrap;
      position: absolute;
      top: calc(50% + 240px);
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
  }
  .pege1-nav-li{
      display: inline-block;
      width: 200px;
      text-decoration: none;
      position: relative;
  }
  .pege1-nav-li p::after {
      position: absolute;
      bottom: 16px;
      left: 0;
      content: '';
      width: 100%;
      height: 4px;
      background: #000000;
      transform: scale(0, 1);
      transform-origin: center top;
      transition: transform .3s;
  }
  .pege1-nav-li:hover p::after {
      transform: scale(1, 1);
  }
  .pege1-nav-li-p{
      font-size: 40px;
      font-weight: 700;
      line-height: 89px;
  }
  @media screen and (max-width:1130px){
    #pege1{
      display: block;
      width: 100%;
      height: 100vh;
    }
    .pege1-hgroup{
        height: 100px;
        text-align: center;
        white-space: nowrap;
        position: absolute;
        top: calc(50% - 100px);
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }
    h1{
        font-size: 60px;
        font-weight: 900;
        line-height: 80px;
    }
    .pege1-hgroup-sub{
        font-size: 30px;
        font-weight: 900;
        line-height: 50px;
    }
    .pege1-nav{
        text-align: center;
        white-space: nowrap;
        position: absolute;
        top: calc(50% + 240px);
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }
    .pege1-nav-li{
        display: inline-block;
        width: 160px;
        text-decoration: none;
        position: relative;
    }
    .pege1-nav-li p::after {
        position: absolute;
        bottom: 16px;
        left: 0;
        content: '';
        width: 100%;
        height: 4px;
        background: #000000;
        transform: scale(0, 1);
        transform-origin: center top;
        transition: transform .3s;
    }
    .pege1-nav-li:hover p::after {
        transform: scale(1, 1);
    }
    .pege1-nav-li-p{
        font-size: 30px;
        font-weight: 700;
        line-height: 89px;
    }
  }
  @media screen and (max-width:734px){
    #pege1{
      display: block;
      width: 100%;
      height: 100vh;
    }
    .pege1-hgroup{
        height: 100px;
        text-align: center;
        white-space: nowrap;
        position: absolute;
        top: calc(50% - 50px);
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }
    h1{
        font-size: 30px;
        font-weight: 900;
        line-height: 40px;
    }
    .pege1-hgroup-sub{
        font-size: 24px;
        font-weight: 900;
        line-height: 50px;
    }
    .pege1-nav{
        text-align: center;
        white-space: nowrap;
        position: absolute;
        top:  calc(50% + 50px);
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }
    .pege1-nav-li{
        display: inline-block;
        width: 100px;
        text-decoration: none;
        position: relative;
    }
    .pege1-nav-li p::after {
        position: absolute;
        bottom: 16px;
        left: 0;
        content: '';
        width: 100%;
        height: 4px;
        background: #000000;
        transform: scale(0, 1);
        transform-origin: center top;
        transition: transform .3s;
    }
    .pege1-nav-li:hover p::after {
        transform: scale(1, 1);
    }
    .pege1-nav-li-p{
        font-size: 20px;
        font-weight: 700;
        line-height: 89px;
    }
  }
</style>
