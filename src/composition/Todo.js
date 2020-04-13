import { ref, onMounted } from 'vue';

export default function(title) {
  const todo = ref('');  
  const items = ref(['Vue', 'is', 'Awesome']);
  
    // Add: Click Handler Function
    const add = () => {
      if (todo.value) {
        items.value.push(todo.value);
        todo.value = '';
      }
    };
    
    // Remove: Click Handler Function
    const remove = item => {
      items.value = items.value.filter(v => v !== item);
    };

    // mounted hook
    onMounted( () => {
      console.log(`onMounted ! ${ title } `);
    });

    return {
      todo,
      items,
      add,
      remove
    };
}
