<template>
  <div>
    <!-- back是在调用下面定义好的一个方法 -->
    <h3 @click="back">返回首页方法① 使用函数</h3>
    <router-link class="linkToIndex" :to="{ path:'/' }">返回首页方法② 使用链接</router-link>
    <RadioGroup id="phone" v-model="systemType">
      <Radio label="apple" :value="apple">
        <Icon type="social-apple"></Icon>
        <span>Apple</span>
      </Radio>
      <Radio label="android" :value="android">
        <Icon type="social-android"></Icon>
        <span>Android</span>
      </Radio>
      <Radio label="windows" :value="windows">
        <Icon type="social-windows"></Icon>
        <span>Windows</span>
      </Radio>
    </RadioGroup>
    <button type="button" @click="testSubmit">打印选中的系统</button>
  </div>
</template>

<script>
    export default {
        name: "test",
        methods: {
          // methods里面写各种函数方法。用给其他地方调用
          back () {
            //this.$router.push({name: 'HelloWorld'});
            this.$router.push({path: '/'});
            // 这种是函数式的跳转方法
          },
          testSubmit(){
            console.log(this.systemType);
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
    display: block;
    margin-bottom: 10px;
    color: #2c3e50;
    line-height: 1.5;
    font-size: 12px;
  }
</style>
