<template>
    <div class="todoslist">

        <router-link :to="{ name: 'TodoContentView', params: {TodoId: todo.TodoId} }" >
            <h4>@{{username}}</h4>
            <h4>
                {{ todo.TodoContent }}
            </h4>
        </router-link>
    </div>

</template>

<script>
export default {
    name: 'TodoList',
    
    props: {
        todo: {
            type: Object,
            required: true
        },
        username: {
            type: String,
            required: true
        }
    }
    
}
</script>

<style>


    .todoslist{
        height: 100%;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        box-shadow: -5px 5px 10px rgba(0,0,0,0.3);
        
    }

    

    a{
        text-decoration: none;
        color: #211f24;
    }
</style>
