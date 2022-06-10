<template>
  <div class="home">
    <div class="createTodo">
      <h3>@{{username}}</h3>
      <form action="" @submit.prevent="addNewTodo">
        <label for="task">New Todo {{ newTodoLength}}/ 180</label>
        <textarea rows="4" cols="10" v-model="newTodo" :class="{'--characterstooLong': newTodoLength > 180}"></textarea>
        <div class="select_update">
          <label for="TodoType">
            Select Todo Type
          </label>
          <select name="TodoType" id="TodoType" v-model="selectedTodoType">
            <option :value="selectedType.value" v-for="selectedType in TodoType" :key="selectedType.id">
              {{selectedType.name}}
            </option>
          </select>
          <button type="submit">Add Task</button>
        </div>


      </form>
    </div>
    <div class="todos">
      <TodoList :todo="todo" v-for="todo in todosFromStore" :key="todo.TodoId" :username="username" />

    </div>

  </div>
</template>

<script>

import TodoList from '@/views/TodoList.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  name: 'HomeView',
  components: {
    TodoList
},
  data() {
    const store = useStore();
    const todosFromStore = computed(() => {
      return store.state.todo;
    });
    return {
      todosFromStore,
      newTodo: '',
      username: 'EmeraldLS',
      selectedTodoType: 'instant',
      TodoType: [
        {
          id: 1,
          value: 'draft',
          name: 'Draft'
        }, {
          id: 2,
          value: 'instant',
          name: 'Instant Todo'
        }
      ]
    }
  },
  computed: {
  newTodoLength(){
    return this.newTodo.length
    }
    
  },
  methods: {
    
    addNewTodo() {
      if (this.newTodo != '' && this.selectedTodoType != 'draft') {
        this.todosFromStore.unshift({
          TodoId: this.todosFromStore.length + 1,
          TodoContent: this.newTodo
        })
        this.newTodo = ''
      } else {
        console.log('fill in empty fields')
      }
    },
      
      
    
  }
  
}
</script>

<style>
  .home{
    display:flex;
    width: 100%;
    flex-direction: row;
    
  }
    .createTodo {
      flex: 1 1 1;
      width: 100%;
      height: 40%;
      padding: 10px;
      box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      margin: 50px 5%;
    }
    textarea{
      margin: 10px 5px;
      margin-right: auto;
      width: 100%;
      padding: 10px;
    }
    button{
      margin-right: auto;
      padding: 10px 20px;
      border: 0;
      background-color: rebeccapurple;
      color: #fff;
    }
    label{
      margin-right: auto;
    }
  
    .--characterstooLong {
      outline: 2px solid red;
    }

    .todos{
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 10px;
      margin: 50px 5%;
      width: 100%;
      gap: 20px;
    }

    .select_update{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .select_update select{
      margin-right: auto;
      width: 150px;
      height: 30px;
    }
    .select_update select option{
      font-size: 1.1rem;
    }

    @media (max-width:600px) {
      .home{
        flex-wrap: wrap;
      }
    }
</style>
