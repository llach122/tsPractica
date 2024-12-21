type tarea = {
    tarea: string
    borrarTarea: () => void

}

export const Task = ({tarea,borrarTarea}: tarea)=>{
    return(
        <div className="task">
            <span>{tarea}</span>
            <button onClick={borrarTarea}>Delete Task</button>
        </div>
    )
}