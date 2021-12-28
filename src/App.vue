<template>
  <!-- <router-view></router-view> -->
  <app-AddTask></app-AddTask>
  
</template>

<script>
  import AddTask from './views/AddTask.vue'

  export default{
    components:{
      'app-AddTask':AddTask
    }
  }
</script>
