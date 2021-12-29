<template>
    <div class="row justify-content-center">
        <div class="col-lg-6 ">
            <app-UpdateTaskForm></app-UpdateTaskForm>
        </div>
    </div>
</template>

<script>
    import UpdateTaskForm from '../components/UpdateTaskForm.vue'

    export default{
        components:{
            "app-UpdateTaskForm":UpdateTaskForm
        }
    }

</script>
