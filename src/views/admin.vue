<template>
    <div class="admin">
        <h1>Admin</h1>
        <div v-for="todo in todos" :key="todo.TodoId">
            <h3>
                {{todo.TodoContent}}
            </h3>

        </div>
    </div>
</template>


<script>
import { todos } from '@/assets/todos'

export default {
    name: 'AdminView',
    data() {
        return {
            todos
        }
    },
}
</script>

<style>
    .admin{
        padding: 50px 5%;
    }
</style>
