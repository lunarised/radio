<template>
<div>
  <h1> MPD Radio 2.0</h1>
  <br>
  <h2>History</h2>
  <p> I started this Radio project in April 2019, Mostly as a way
    to learn some basic JS, and SysAdmin, But as my knowledge in both
    of these areas grew, I decided in July 2020, to rewrite the web interface
    in Vue.js. </p>
    <br>
  <h2> Technical Specifics </h2>
  <p> The Music is either Royalty Free, or my own composition. The music
    is run on MPD on my webserver. That is then forwarded to an Icecast2
    mount, which then streams the music to lunarised.com:8000/exampleChannel.ogg. </p>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
