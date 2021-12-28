<template>
    <div class="row justify-content-center">
        <div class="col-6">
            <app-AddTaskForm></app-AddTaskForm>
        </div>
    </div>
</template>

<script>
    import AddTaskForm from '../components/AddTaskForm.vue'

    export default{
        components:{
            "app-AddTaskForm":AddTaskForm
        }
    }

</script>
