<template>
    <div class="createTodo">
        <!-- <h3>{{user.username}}</h3> -->
        <form action="" @submit.prevent="addNewTodo">
            <label for="task">Enter your Task {{ newTodoLength}}/ 180</label>
            <textarea rows="4" cols="10" v-model="newTodo" :class="{'--characterstooLong': newTodoLength > 180}"></textarea>
            <button type="submit">Add Task</button>
        </form>
    </div>

</template>

<script>


export default {
    name: 'CreateTodo',
    components: {
        
    },
    data() {
        return {
            newTodo: '',
            username: 'EmeraldLS',
            todos: [{
                TodoId: 1,
                TodoContent: 'What is happening in our country'
            }]
            
        }
    },
    computed: {
        
        newTodoLength() {
            return this.newTodo.length
        }
    },
    methods: {
        addNewTodo() {
			console.log(this.newTodo)
            return this.todos.unshift({
                TodoId: this.todos.length + 1,
                TodoContent: this.newTodo
            })
        }
    },
    mounted() {
        
    }
}
</script>

<style>


    .createTodo{
        width: 70%;
        height: 100%;
        padding: 10px;
        box-shadow: -5px 5px 10px rgba(0,0,0,0.3);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        margin: 20px;
        gap: 10px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    .--characterstooLong{
        outline: 2px solid red;
    }
</style>
