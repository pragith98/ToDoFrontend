<template>
    <ValidationObserver v-slot="{handleSubmit}">
        <form @submit.prevent="handleSubmit(onSubmit)">
            <fieldset>
                <h2>Add Task</h2>
                
                
                <div class="form-group">
                    <label class="form-label mt-4">New Task</label>
                    <ValidationProvider name="Task" rules="required" v-slot="{errors}">
                        <textarea v-model="task" class="form-control" id="exampleTextarea" rows="3" placeholder="Enter your Task"></textarea>
                        <small class="form-text ">{{errors[0]}}</small>
                    </ValidationProvider>
                </div>
                
                <div class="mt-3">
                    <!-- <button class="btn btn-lg btn-primary" type="button">Save Task</button> -->
                    <button class="btn btn-lg btn-primary" type="submit">Save Task</button>
                    <router-link to='/TaskList' class="btn btn-lg btn-outline-secondary mx-2">Cancel</router-link>
                </div>
                
            </fieldset>
        </form>
    </ValidationObserver>
</template>

<script>

    export default{
        data:()=>({
            task:""
        }),

        methods:{
            onSubmit(){
                console.log(this.task);
                this.$router.push('/TaskList');
            }
        }
    }

</script>


<style scoped>
    textarea {
        resize: none;
    }
    small{
        color:red;
    }
</style>