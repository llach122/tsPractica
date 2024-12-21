import { Task } from "./Task.tsx";

type ListaTareas = {
    listaTareas: string[]
    borrarTarea: (index:number)=> void
}



export const TaskList = ({listaTareas, borrarTarea}: ListaTareas)=>{

    return(
        <div className="taskList">
            {
                listaTareas.map((task,index) => 
               <Task key={index} tarea={task} borrarTarea={() => borrarTarea(index)}/> )
            }
        </div>
    )
}