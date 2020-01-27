<template>
  <div class="container">
      <div class="gnb_wrap">
        <gnb></gnb>
      </div>
      <router-view></router-view>
      
  </div>
</template>

<script>
import gnb from './gnb.vue'

export default {
  name: 'Container',
  components : {
    gnb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
