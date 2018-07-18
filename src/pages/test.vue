<template>
  <div>
    <!-- back是在调用下面定义好的一个方法 -->
    <h3 @click="back">返回首页①使用函数</h3>
    <router-link class="linkToIndex" :to="{ path:'/' }">返回首页②使用链接</router-link>
    <br/>
    <RadioGroup id="phone">
      <Radio label="apple">
        <Icon type="social-apple"></Icon>
        <span>Apple</span>
      </Radio>
      <Radio label="android">
        <Icon type="social-android"></Icon>
        <span>Android</span>
      </Radio>
      <Radio label="windows">
        <Icon type="social-windows"></Icon>
        <span>Windows</span>
      </Radio>
    </RadioGroup>
  </div>
</template>

<script>
    export default {
        name: "test",
        methods: {
          // methods里面写各种函数方法。用给其他地方调用
          back () {
            this.$router.push({name: 'HelloWorld'})
            // 这种是函数式的跳转方法
          }
        }
    }
</script>

<style scoped>
  h3{
    cursor: pointer;
    margin-bottom: 10px;
  }
  .linkToIndex{

  }
</style>
