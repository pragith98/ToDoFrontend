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
                        
                        <button v-if="task.status == 'completed'" @click="updateStatus(task.id,'new')" type="button" class="btn btn-outline-warning btn-sm">Completed</button>
                        <button v-else @click="updateStatus(task.id,'completed')" type="button" class="btn btn-outline-success btn-sm" style="width:80px">New</button>
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
        

        props: ['stuffProp'],
        data:()=>({
            tasks:[],
            
            newStatus:{
                status:''
            }
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
            },

            reCreate(response){
                console.log(response);
                this.axios.get("http://localhost:8001/api/allTask").then(Response=>(this.tasks=Response.data.allTask))
                
            },

            updateStatus(id,status){
                
                this.newStatus.status=status;
                

                this.axios.put('http://localhost:8001/api/statusUpdate/'+id,this.newStatus).then(Response=>{this.reCreate(Response)})
                   
            }



            


        }
        
    }

</script>
