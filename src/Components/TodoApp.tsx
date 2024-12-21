import { useState } from "react";
import { TaskList } from "./TaskList.tsx";





export const TodoApp = () => {

const [ taskList, setTaskList ] = useState<string[]>([]);
const [ newTask, setNewTask ] = useState<string>("");

const handleAddTask = () =>{
    if(newTask.trim() === "") return
    setTaskList(tareasAnteriores => [...tareasAnteriores, newTask ])
    setNewTask("")
}
const handleBorrarTarea = (index:number) =>{
    setTaskList(tareas => tareas.filter((_,i) => i !== index))
}

    return (
        <div>
            <h1>Listas de tarea</h1>

            <div>
                <input
                type="text" 
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
                placeholder="New Task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            <TaskList listaTareas={taskList}borrarTarea={handleBorrarTarea} />
        </div>
    )
}