<template>
  <div class="student content">
    <div class="studentItem">
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

          <button id="searchIcon">검색</button>
        </div>

      </div>
      <div class="studentList">
        <table>
          <tr>
            <th>학생번호</th>
            <th>이름</th>
            <th>성별</th>
            <th>학년</th>
            <th>등록일자</th>
            <th>상태</th>
            <th>상세정보</th>
            <th>삭제</th>
          </tr>
          <tr v-bind:key=index v-for="(item, index) in data">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.grade}}</td>
            <td>{{item.register}}</td>
            <td>{{item.state}}</td>
            <td><i class="far fa-file-alt"></i></td>
            <td><i class="far fa-trash-alt"></i></td>
          </tr>
          <!-- <tr>
            <td>1</td>
            <td>강호동</td>
            <td>남</td>
            <td>초등 5</td>
            <td>2020.1.10</td>
            <td>수강</td>
            <td><i class="far fa-file-alt"></i></td>
            <td><i class="far fa-trash-alt"></i></td>
          </tr>
          <tr>
            <td>1</td>
            <td>강호동</td>
            <td>남</td>
            <td>초등 5</td>
            <td>2020.1.10</td>
            <td>수강</td>
            <td><i class="far fa-file-alt"></i></td>
            <td><i class="far fa-trash-alt"></i></td>
          </tr>
          <tr>
            <td>1</td>
            <td>강호동</td>
            <td>남</td>
            <td>초등 5</td>
            <td>2020.1.10</td>
            <td>수강</td>
            <td><i class="far fa-file-alt"></i></td>
            <td><i class="far fa-trash-alt"></i></td>
          </tr> -->
        </table>
      </div>
      </div>
      <div class="studentItem">
      <StudentInfromation></StudentInfromation>
      </div>
  </div>
</template>

<script>
import StudentInfromation from './StudentInformation'
import axios from 'axios'

export default {
  name: 'student',
  components : {
    StudentInfromation
  },
  data : function(){
    return{
      data : []
    }
  },
  methods : {
    getData : function(){
      axios.get('http://localhost:3000/student').then((res) => {
        console.log(res);
        this.data = res.data
        console.log(this.data)
      }
      )
    }
  },
  beforeMount(){
    this.getData()
    // console.log(this.data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.studentItem{
  float:left;
}

.studentItem:nth-child(1){
  width:70%;
}
.studentItem:nth-child(2){
  width: 30%;
}
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
  /* border-radius: 10px; */
  border:none;
  background-color: #333;
  color: white;
  text-align: center;
}
table{
  width:100%;
  background-color: white;
}
th{
  background-color: #eee;
  /* padding: 0 2.5%; */
  /* border: 2px solid #333; */
}

td{
  text-align: center;
   /* border: 2px solid #333; */
}
</style>
