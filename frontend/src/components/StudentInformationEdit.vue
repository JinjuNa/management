<template>
  <div class="studentInfromation read">
      <div class="button">
          <button>수정</button>
      </div>
      
      <div class="profile read">
          <div class="photo">
              <img src="../assets/student001.png" alt="학생 001 사진">
          </div>

          <div class="text">
              <div id="studentNum">
                  <span class="label">학생번호 : </span>
                  <span class="value">1</span>
              </div>
              <div id="studentName">
                  <span class="label">이름 : </span>
                  <span class="value">강호동</span>
              </div>
              <div id="studentSex">
                  <span class="label">성별 : </span>
                  <span class="value">남</span>
              </div>
              <div id="studentGrade">
                  <span class="label">학년 : </span>
                  <span class="value">초등 5</span>
              </div>
              <div id="studentRegister">
                  <span class="label">등록일자 : </span>
                  <span class="value">2020.1.10</span>
              </div>
              <div id="studentState">
                  <span class="label">상태 : </span>
                  <span class="value">수강</span>
              </div>
          </div>
      </div>
      <div class="detail">
              <div id="studentPhone">
                  <span class="label">학생 전화번호 : </span>
                  <span class="value">010-1111-1111</span>
              </div>
              <div id="parentPhone">
                  <span class="label">학부모 번호 : </span>
                  <span class="value">010-2222-2222</span>
              </div>
              <div id="studentBirthday">
                  <span class="label">생일 : </span>
                  <span class="value">7월 11일</span>
              </div>
              <div id="studentAddress">
                  <span class="label">주소 : </span>
                  <span class="value">부산 남구</span>
              </div>
              <div id="studentEmail">
                  <span class="label">이메일 : </span>
                  <span class="value">hodong@naver.com</span>
              </div>
              <div id="memo">
                  <span class="label">메모</span>
                  <textarea name="" id="memo" cols="40" rows="5" readonly="readonly">
                      평소 말이 많음
                  </textarea>
              </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'StudentInformationRead'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
