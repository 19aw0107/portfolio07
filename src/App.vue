<template>
  <div id="app">
    <transition mode=”out-in” name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
  @import url(css/reset.css);
  /*基本*/
  *{
      text-decoration: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
  }
  a{
      color: #000000;
  }
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
