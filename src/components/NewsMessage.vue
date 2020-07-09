<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link to="/test/about" class="list-group-item">About</router-link>
          <router-link to="/test/home" class="list-group-item active">Home</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NewsMessage"
    }
</script>

<style scoped>

</style>
