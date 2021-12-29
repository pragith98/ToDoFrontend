<template>
    <form>
        <fieldset>
            <h2>Update Task</h2>
            
            <div class="form-group">
                <label class="form-label mt-4">Update Task</label>
                <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Enter your Task"></textarea>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            
            <div class="mt-3">
                <button class="btn btn-lg btn-success" type="button">Update Task</button>
                <router-link to='/TaskList' class="btn btn-lg btn-outline-secondary mx-2">Cancel</router-link>
            </div>
            
        </fieldset>
    </form>
</template>

<style scoped>
    textarea {
        resize: none;
    }
</style>