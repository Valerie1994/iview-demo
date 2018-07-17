<template>
  <div id="firstcomponent">
    <h1>I am a pang juan.</h1>
    <a> written by {{ author }} </a>
    <h3 @click="back">返回HelloWorld页面</h3>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      author: 'cloud'
    }
  },
  methods: {
    // methods里面写你的各种函数方法。用给其他地方调用
    back () {
      this.$router.push({path: '/'})
      // 这种是函数式的跳转方法
    }
  }
}
</script>

<style>
</style>
