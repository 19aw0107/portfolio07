<template>
  <section>
    <header>
      <HeaderW/>
    </header>
    <main>
      <Pege7W/>
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
import Pege7W from '@/components/Pege7W.vue'

export default {
  name: 'Home',
  components: {
    HeaderW,
    Footer,
    Pege7W
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

