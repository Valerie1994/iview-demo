<template>
  <div id="firstcomponent">
    <h1>I am a juan pig</h1>
    <a> written by {{ author }} </a>
    <h3 @click="back">返回HelloWorld页面</h3>
    <h1>下面演示iview的组件使用</h1>
    <!-- 日期组件 -->
    <!--<DatePicker type="date" :value="time" placeholder="选择日期" style="width: 200px"></DatePicker>-->
    <!-- 滑块组件 -->
    <Slider v-model="sliderValue.value1"></Slider>
    <!-- :step 一次移动的最小单位 -->
    <Slider v-model="sliderValue.value2" :step="10" range></Slider>
    <Slider v-model="sliderValue.value3" range disabled></Slider>
  </div>
</template>

<script>
export default {
  name: 'building',
  /*
  //使用日期组件时4是用这个
  data () {
    return {
      author: 'building',
      time: '2018-07-17'
    }
  }*/
  data () {
    return {
      author: 'building',
      sliderValue:{
        value1: 25,
        value2: [20, 50],
        value3: [20, 50]
      }
    }
  },
  /*
  //使用日期组件时打印的
  mounted () {  //
    console.log(this.time)
  },*/
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
