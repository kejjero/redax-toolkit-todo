import styles from '../styles/App.module.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, removeTodo} from '../redux/slices/counterSlice'

function App() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todoReducer.todos)

    useEffect(() => {
    }, [todos])

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
                    {
                        inputValue.length === 0 ?
                            <button
                                disabled
                                onClick={(e) => handlePostTodo(e)}
                                style={{backgroundColor: '#65777F', cursor: 'default', color: 'lightgray'}}
                            >
                                Добавить
                            </button>
                            :
                            <button onClick={(e) => handlePostTodo(e)}>Добавить</button>
                    }
                </form>
                <ol>
                    {todos && todos.map((name, index) => {
                            return (
                                <li key={index}>
                                    <h2>{name}</h2>
                                    <button onClick={() => dispatch(removeTodo(index))}>𐄂</button>
                                </li>
                            )
                        }
                    )
                    }
                </ol>
            </div>
        </div>
    )
}

export default App;
