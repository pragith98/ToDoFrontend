<template>
    <ValidationObserver v-slot="{handleSubmit}">
        <form @submit.prevent="handleSubmit(onSubmit)">
            <fieldset>
                <h2>Update Task</h2>
                
                <div class="form-group">
                    <label class="form-label mt-4">Update Task</label>
                    <ValidationProvider name="Task" rules="required" v-slot="{errors}">
                        <textarea v-model="tasks.task" class="form-control" id="exampleTextarea" rows="3" placeholder="Enter your Task"></textarea>
                        <small class="form-text">{{errors[0]}}</small>
                    </ValidationProvider>
                </div>
                
                <div class="mt-3">
                    <button class="btn btn-lg btn-success" type="submit">Update Task</button>
                    <router-link to='/TaskList' class="btn btn-lg btn-outline-secondary mx-2">Cancel</router-link>
                </div>
                
            </fieldset>
        </form>
    </ValidationObserver>
</template>

<script>
    export default{

        created(){
            this.getTask();
        },

        data:()=>({
            tasks:{
                task:""
            }
        }),
        
        methods:{
            

            getTask(){
                var id=this.$route.params.id;
                
                this.axios.get("http://localhost:8001/api/getTask/"+id).then(Response=>(this.tasks=Response.data.task))
                
            },

            onSubmit(){
                var path=this.$router;
                var id=this.$route.params.id;
                this.axios.put('http://localhost:8001/api/updateTask/'+id,this.tasks).then(function(Response){
                    console.log(Response);
                    path.push('/TaskList')
                })
                
                
            }
        }
    }
</script>


<style scoped>
    textarea {
        resize: none;
    }

    small{
        color: red;
    }
</style>