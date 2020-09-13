<template>
  <section>
    <header>
      <Header/>
    </header>
    <main>
      <Pege1/>
      <Pege2/>
      <Pege3/>
      <Pege4/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </section>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Pege1 from '@/components/Pege1.vue'
import Pege2 from '@/components/Pege2.vue'
import Pege3 from '@/components/Pege3.vue'
import Pege4 from '@/components/Pege4.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Pege1,
    Pege2,
    Pege3,
    Pege4
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
