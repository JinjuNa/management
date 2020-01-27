<template>
  <ul class="gnb">
      <li v-bind:key="item.text" v-for="item in menu" >
          <router-link :to="item.url">{{item.text}}</router-link>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'gnb',
  data : function() {
return {
      menu : [
          {text : "학생관리", url : "/student"},
          {text : "출결관리", url : "/attendence"},
          {text : "수납관리", url : "/purchase"}
      ]
  };
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gnb{
  margin:20px 0;
  margin-left: 2.5%;

}

.gnb li{
    width : 150px;
    height: 50px;
    background-color: #555;
    float:left;
    color: white;
    text-align: center;
    line-height: 50px;
    margin-right: 20px;
}

.gnb li a{
    display: block;
    width:100%;
    height: 100%;
}

.gnb::after{
    display: block;
    clear: both;
    content:'';
}

.gnb li:hover{
    background-color: #999;
}
</style>
