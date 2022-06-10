<template>
    <div class="todoContent">
        <h3>Todo Content</h3>

        {{TodoId}}

        {{ allTodos}}
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'TodoContentview',
    data() {
        const route = useRoute()
        const store = useStore();
        const TodoId = computed(() => {
            return route.params.TodoId;
        })
        const allTodos = computed(() => {
            return store.state.todo
        })
        
        return {
            TodoId,
            todo: allTodos[TodoId.value - 1] || allTodos[0]
        }
    },
    methods: {
        outputTodo() {
            return this.allTodos[this.TodoId - 1] || this.allTodos[0]
        }
    },
    mounted() {
        console.log(this.outputTodo())
    }
}
</script>

<style scoped>

</style>
