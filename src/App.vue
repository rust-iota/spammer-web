<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Spammer />
  </div>
</template>

<script>
import Spammer from './components/Spammer.vue'

export default {
  name: 'App',
  components: {
    Spammer
  },
  created() {
    console.log("created");


    const uri = 'https://nodes.comnet.thetangle.org'
    this.$iota.addNode(uri).then(() => {

        this.$iota.getNodeInfo().then(nodeInfo => {

            console.log("nodeInfo", nodeInfo)
        })

    })

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
