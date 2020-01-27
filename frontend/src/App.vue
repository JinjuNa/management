<template>
  <div id="app">
    <Header></Header>
    <UserInformation></UserInformation>
    <Container></Container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import UserInformation from './components/UserInformation'
import Container from './components/Container'

export default {
  name: 'app',
  components: {
    Header,
    UserInformation,
    Container
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}

ul{
  list-style: none;
}

a{
  color: inherit;
  text-decoration: none;
}
#app::after{
  display: block;
  clear: both;
  content: '';
}
.userInformation{
  width: 20%;
  height: 500px;
  background-color: #c3c3c3;
  float:left;
  margin: 0 2%;
}

.container {
  width: 75%;
  height: 500px;
  /* border:2px solid #333; */
  float: left;
  background-color: #c3c3c3;
}
</style>
