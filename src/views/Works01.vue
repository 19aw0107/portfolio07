<template>
  <section>
    <header>
      <HeaderW/>
    </header>
    <main>
      <Pege1W/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </section>
</template>

<script>
// @ is an alias to /src
import HeaderW from '@/components/HeaderW.vue'
import Footer from '@/components/Footer.vue'
import Pege1W from '@/components/Pege1W.vue'

export default {
  name: 'Home',
  components: {
    HeaderW,
    Footer,
    Pege1W
  }
}
</script>
<!--<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
-->

