import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {addTask, deleteTask} from "./actions/todo";

const App = () => {
    const tasks = useSelector((state => state.todo));
    const dispatch = useDispatch()
    const addData = (event) => {
        event.preventDefault();
        dispatch(addTask(event.target.task.value))
    }

    const removeTask = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={(event => {
                    addData(event)
                })}>
                    <input type={'text'} name={'task'}/>
                    <button> ADD</button>
                </form>
                <div>
                    <ul>
                        {tasks.map((item) => {
                            return <li key={item.id}>{item.value}
                                <button onClick={() => removeTask(item.id)}>Delete</button>
                            </li>
                        })}
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default App;
