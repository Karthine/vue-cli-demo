<template>
  <div>
    <search-header></search-header>
    <search-list></search-list>
  </div>
</template>

<script>
  import SearchHeader from './SearchHeader'
  import SearchList from './SearchList'
    export default {
        name: "index",
        components:{
          SearchHeader,
          SearchList
        }
    }
</script>

<style scoped>

</style>
