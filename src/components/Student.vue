<template>
  <div class="student content">
      <div class="filtering">
        <div class="filter">
          정렬기준 :
          <select id="filter">
            <option value="name">이름순</option>
            <option value="asc">저->고학년</option>
            <option value="dec">고->저학년</option>
            <option value="register">등록순</option>
          </select>
        </div>
        <div class="search">
          검색 :
          <input type="text" id="searchName" placeholder="이름을 입력하세요">
          <select id="age">
            <option value="" disabled selected>학년</option>
            <option value="1">초등 1학년</option>
            <option value="2">초등 2학년</option>
            <option value="3">초등 3학년</option>
            <option value="4">초등 4학년</option>
            <option value="5">초등 5학년</option>
            <option value="6">초등 6학년</option>
            <option value="7">중등 1학년</option>
            <option value="8">중등 2학년</option>
            <option value="9">중등 3학년</option>
          </select>
          <select id="registerDay">
            <option value="" disabled selected>등록일자</option>
            <!-- daypicker -->
          </select>
          <select id="state">
            <option value="" disabled selected>상태</option>
            <option value="">수강중</option>
            <option value="">종료</option>
            <option value="">졸업</option>
          </select>

          <span id="searchIcon">검색</span>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'student'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.filtering{
  background-color: #9e9e9e;
  height: 80px;
  padding-top:20px;
}
.content{
  margin-top:5%;
  width:95%;
  margin: 0 auto;
  /* background-color: #ddd; */
  height: 75%;
}

#searchIcon{
  display: inline-block;
  width: 50px;
  height: 20px;
  border-radius: 10px;
  background-color: #333;
  color: white;
  text-align: center;
}
</style>
