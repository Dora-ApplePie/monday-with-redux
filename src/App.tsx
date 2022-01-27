import React from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {addTaskAC, removeTaskAC} from "./reducers/TasksReducer";
import {useDispatch} from "react-redux";

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    // let [tasks, tasksDispatch] = useReducer(TasksReducer, initialState);
    let dispatch = useDispatch();

    function removeTask(id: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);

        // tasksDispatch(removeTaskAC(id))
        dispatch(removeTaskAC(id))
    }

    function addTask(title: string) {

        // let task = { id: v1(), title: title, isDone: false };
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
        // tasksDispatch(addTaskAC(title))
        dispatch(addTaskAC(title))
    }

    // let [filter, filterDispatch] = useReducer(FilterReducer, "all");

    return (
        <div className="App">
            <Todolist title="What to learn"
                      removeTask={removeTask}
                      addTask={addTask}/>
        </div>
    );
}

export default App;
