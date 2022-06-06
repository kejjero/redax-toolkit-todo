import styles from '../styles/App.module.css';
import Todo from "./Todo";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addTodo } from '../redux/slices/counterSlice'

function App() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todoReducer.todos)

    useEffect(() => {

    },[todos])

    function handlePostTodo(e) {
        e.preventDefault()
        dispatch(addTodo(inputValue))
        setInputValue('')
    }

    return (
        <div className={styles.App}>
            <div className={styles.todo}>
                <h1>Список задач</h1>
                <form>
                    <input
                        type="text"
                        value={inputValue}
                        placeholder="Введите задачу..."
                        onChange={(evt) => setInputValue(evt.target.value)}
                    />
                    <button onClick={(e) => handlePostTodo(e)}>Добавить</button>
                </form>
                <ol>
                    {todos && todos.map((todo, index) => <Todo key={index} name={todo}/>)}
                </ol>
            </div>
        </div>
    )
}

export default App;
