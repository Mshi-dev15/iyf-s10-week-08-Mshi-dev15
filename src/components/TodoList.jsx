import {useState} from 'react';
function TodoList() {
    const[todos, setTodos]= useState([
        {id: 1,text:'Learn React', Completed: false},
        {id: 2,text: 'Build a Project', completed: false},
        {id: 3,text: 'Push to GitHub', completed: false}
    ]);

    const[inputValue, setInputValue] = useState('');

    const addTodo =() =>{
        if (!inputValue.trim()) return;
        setTodos([
            ...todos,
            {id: Date.now(), text: inputValue, completed:false}
        ])
        setInputValue('');
    };
    const toggleTodo =(id) =>{
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ));
    };
    const deleteTodo =(id) =>{
        setTodos(todos.filter(todo => todo.id !== id));
    };
    return(
        <div>
            <h3>Todo </h3>
            <div>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e)=> e.key==='Enter' && addTodo()}
                    placeholder="Add a new todo..."
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            {todos.length=== 0 && <p>No todo yet!Add one above</p>}
            <ul>
                {todos.map(todo =>(
                    <li key={todo.id}>
                        <span
                        onClick={()=> toggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                            marginRight: '10px'
                        }}>
                        {todo.complete ? '✅' : '⬜'} {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button> 
                    </li>
                ))}
            </ul>
            <p>
                {todos.filter(t=> t.completed).length} of {todos.length} completed
            </p>
        </div>
    );
}
export default TodoList;