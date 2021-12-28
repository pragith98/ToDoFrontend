<template>
  <!-- <router-view></router-view> -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="mt-5 col-6 ">
        
          <app-AddTask></app-AddTask>
        
      </div>
    </div>
    
  </div>
  
  
</template>

<script>
  import AddTask from './views/AddTask.vue'

  export default{
    components:{
      'app-AddTask':AddTask
    }
  }
</script>
