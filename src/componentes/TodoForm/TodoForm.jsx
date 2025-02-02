import React from "react";
import './TodoForm.css'
import { TodoContext } from "../../TodoContext/TodoContext";

function TodoForm () {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState ('');

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    };
    const onCancel = (event) =>{
        setOpenModal(false)
    };
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit} action="">
            <label>Escribe tu nueva tarea</label>
            <textarea placeholder="Agrega tu Todo aqui" value={newTodoValue} onChange={onChange} />
            <div className="button-container">
            <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
            <button type="submit" className="TodoForm-button TodoForm-button--add">Agregar</button>
            </div>
        </form>
        
    )
}

export { TodoForm };