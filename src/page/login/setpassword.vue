<template>
  <div class="password">
  <div class="password-header">设置密码<span><router-link to="/user">确定</router-link></span></div>
    <div class="password-container">
      <input type="text" placeholder="请输入密码" class="password-verify">
      <input type="text" placeholder="请再次输入密码" class="password-verify">
      <p>密码由6-16位英文字母、数字或符号组成</p>
    </div>
  </div>
</template>
<style scoped>
.password {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.password-header {
  height: 1.8rem;
  line-height: 1.8rem;
  background-color: #9BCD9B;
  color: #fff;
  font-size: 0.86rem;
  text-align: center;
  position: relative;
}
.password-header span {
  position: absolute;
  right: 0.6rem;
  top: 0;
  font-size: 0.5rem;
}
.password-header span a {
  color: #fff;
}
.password-container {
  padding: 0.6rem;
}
.password-verify {
  width: 100%;
  height: 1.4rem;
  line-height: 1.4rem;
  border-radius: 0.1rem;
  background-color: #f5f5f5;
  border: none;
  margin-bottom: 0.4rem;
  font-size: 0.5rem;
  padding: 0 0.6rem;
}
.password-container p {
	font-size: 0.48rem;
  color: #9BCD9B;
}
</style>