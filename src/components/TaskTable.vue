<template>
    <div>
        <div>
           <h2 class="float-start">Task List</h2> 
           <router-link to='/AddTask' class="btn btn-primary float-end mb-2">Add New</router-link>
            
        </div>
        
        <table class="table table-hover">
            <thead>
                <tr class="table-primary">
                    <th>ID</th>
                    <th>Task</th>
                    <th style="width:55%"></th>
                </tr>
            </thead>
            <tbody>
                
                <tr v-for="task in tasks" :key="task.id">
                    <td>{{ task.id }}</td>
                    <td>{{task.task}}</td>
                    <td align="right">
                        <button type="button" class="btn btn-outline-warning btn-sm">Completed</button>
                        <!-- <button type="button" class="btn btn-outline-success btn-sm" style="width:80px">New</button> -->
                        <router-link :to="'/UpdateTask/'+task.id" class="btn btn-success mx-2 btn-sm">Update</router-link>
                        <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(task.id)" >Delete</button>
                    </td>
                </tr>
                
                
            </tbody>
        </table> 
    </div>
    
</template>

<script>

    export default{
        data:()=>({
            tasks:[]
        }),

        created(){
            this.axios.get("http://localhost:8001/api/allTask").then(Response=>(this.tasks=Response.data.allTask))
        },

        methods:{
            deleteTask(id){
                var taskval=this.tasks;

                console.log(id);
                this.axios.delete("http://localhost:8001/api/deleteTask/"+id).then(function(Response){
                    console.log(Response);
                    
                    var position=taskval.findIndex(function(element){
                        return element.id==id;
                    });

                    taskval.splice(position,1);
                });

                

                
                

            }
        }
        
    }

</script>
