<template>
  <div>
  	<ul class="flex">
      <li class="item-flex">最新</li>
      <li class="item-flex">最热</li>
      <li class="item-flex">完结</li>
    </ul>
  	<router-view></router-view>
  </div>
</template>
<style scoped>
li {
  text-align: center;
}
</style>