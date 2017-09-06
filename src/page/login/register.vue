<template>
  <div class="register">
    <!-- 注册或者找回密码 -->
    <div class="register-header">注 册<span><router-link to="/setpassword">下一步</router-link></span></div>
    <div class="register-container">
      <input type="text" placeholder="请输入手机号" class="register-tel">
      <div class="register-verify">
        <input type="text" placeholder="请输入验证码" class="fl">
        <button class="fr">获取验证码</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.register {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.register-header {
  height: 1.8rem;
  line-height: 1.8rem;
  background-color: #9BCD9B;
  color: #fff;
  font-size: 0.86rem;
  text-align: center;
  position: relative;
}
.register-header span {
  position: absolute;
  right: 0.6rem;
  top: 0;
  font-size: 0.5rem;
}
.register-header span a {
  color: #fff;
}
.register-container {
  padding: 0.6rem;
}
.register-tel {
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
.register-verify {
  width: 100%;
  height: 1.4rem;
  position: relative;
  border-radius: 0.1rem;
  background-color: #f5f5f5;
  overflow: hidden;
}
.register-verify input {
  height: 100%;
  line-height: 1.4rem;
  border: none;
  font-size: 0.5rem;
  padding: 0 0.6rem;
  width: 10.4rem;
}
.register-verify button {
  border: none;
  background-color: #9BCD9B;
  font-size: 0.5rem;
  width: 3.4rem;
  height: 100%;
  color: #fff;
}
</style>