import {useDispatch} from "react-redux";
import {removeTodo} from "../redux/slices/counterSlice";


function Todo({name}) {
    const dispatch = useDispatch()
    return (
        <>
            <li>
                <h2>{name}</h2>
                <button onClick={() => dispatch(removeTodo(name))}>𐄂</button>
            </li>
        </>
    )
}

export default Todo;