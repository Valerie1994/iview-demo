<template>
  <div id="firstcomponent">
    <h1>I am a juan pig</h1>
    <a> written by {{ author }} </a>
    <h3 @click="back">返回HelloWorld页面</h3>
    <h1>下面演示iview的组建使用</h1>
    <DatePicker type="date" :value="time" placeholder="选择日期" style="width: 200px"></DatePicker>
  </div>
</template>

<script>
export default {
  name: 'building',
  data () {
    return {
      author: 'building',
      time: '2018-07-17'
    }
  },
  mounted () {
    console.log(this.time)
  },
  methods: {
    // methods里面写你的各种函数方法。用给其他地方调用
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
  }
</style>
