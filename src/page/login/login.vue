<template>
  <div class="login">
    <div class="login-header">登 录</div>
    <div class="login-container">
      <input type="text" placeholder="手机号/邮箱" class="login-admin">
      <input type="text" placeholder="密码" class="login-password">
      <button><router-link to="/user">登 录</router-link></button>
      <div class="login-hint">
        <router-link to="/register" class="fl">手机快速注册</router-link>
        <router-link to="/register" class="fr">找回密码</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.login-header {
  height: 1.8rem;
  line-height: 1.8rem;
  background-color: #9BCD9B;
  color: #fff;
  font-size: 0.86rem;
  text-align: center;
}
.login-container {
  padding: 0.6rem;
}
.login-admin, .login-password {
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
button {
  height: 1.4rem;
  line-height: 1.4rem;
  font-size: 0.5rem;
  border: none;
  background-color: #9BCD9B;
  border-radius: 0.1rem;
  width: 4.0rem;
  display: block;
  margin: 0 auto;
}
button a {
  color: #fff;
}
.login-hint {
  height: 2.0rem;
  line-height: 2.0rem;
  font-size: 0.5rem;
}
.login-hint a {
  color: #9BCD9B;
}
</style>