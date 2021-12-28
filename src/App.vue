<template>

  <div>
    <app-navbar></app-navbar>
    <div class="container">
      <!-- <div class="row justify-content-center"> -->
        
        <div class="mt-5">
          
            <Router-view></Router-view>
          
        
        </div>
    </div>
  </div>
  
  
</template>

<script>
  import navbar from './components/NavBar.vue'
  

  export default{
    components:{
      'app-navbar':navbar
    }
  }
</script>
