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
                
                <tr>
                    <td>1</td>
                    <td>Go To Schoolsdfsdf sdfasdfsd</td>
                    <td align="right">
                        <!-- <button type="button" class="btn btn-outline-warning btn-sm">Completed</button> -->
                        <button type="button" class="btn btn-outline-success btn-sm" style="width:80px">New</button>
                        <!-- <button type="button" class="btn btn-secondary mx-2 btn-sm">Update</button> -->
                        <router-link to='/UpdateTask' class="btn btn-secondary mx-2 btn-sm">Update</router-link>
                        <button type="button" class="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Go To Schoolsdfsdf sdfasdfsd</td>
                    <td align="right">
                        <button type="button" class="btn btn-outline-warning btn-sm">Completed</button>
                        <!-- <button type="button" class="btn btn-outline-success btn-sm" style="width:80px">New</button> -->
                        <button type="button" class="btn btn-secondary mx-2 btn-sm">Update</button>
                        <button type="button" class="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                
            </tbody>
        </table> 
    </div>
    
</template>