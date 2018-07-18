<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'building' }">goBuilding</router-link>
        <!-- 这种是根据name跳转 -->
      </li>
      <li>
        <router-link :to="{ path: '/cloud' }">goCloud</router-link>
        <!-- 这种是根据path跳转 -->
      </li>
      <li>
        <router-link :to="{ path: '/test' }">goTest</router-link>
        <!-- 这种是根据path跳转 -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to CHOUJUAN Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
