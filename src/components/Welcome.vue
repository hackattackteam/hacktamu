<template>
  <div class="hello">
    <h1>Preston's Weird GIS App</h1>
    <button class="button" v-on:click="enter">Enter</button>
    <h2>About [AppNameHere]</h2>
    <span>
      <p>Insert Desc. here</p>
    </span>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  methods: {
    enter: function () {
      alert('Redirect to main application page with this button.')
    }
  },
  data () {
    return {
      msg: 'Preston\'s Weird GIS App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  border: none;
  border-radius: 5px;
  background-color: #41b882;
  padding: 15px 30px;
  transition: all 0.2s ease-in-out;
}

.button:hover {
  background-color: lightgreen;
  color: white;
  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
}

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
