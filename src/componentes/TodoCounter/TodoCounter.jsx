import React from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';
import './TodoCounter.css'

function TodoCounter () {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);

    return (
        completedTodos === totalTodos
        ? <h1 className='TodoCounter'>Has completado todos los TODOS, ¡FELICIDADES!</h1>
        :
        <h1 className='TodoCounter'>
        Has acompletado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas
        </h1>
    )
}

export { TodoCounter };