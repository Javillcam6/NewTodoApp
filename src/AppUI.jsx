import React from 'react';
import { TodoCounter } from './componentes/TodoCounter/TodoCounter'
import { TodoSearch } from './componentes/TodoSearch/TodoSearch'
import { TodoList } from './componentes/TodoList/TodoList'
import { TodoItem } from './componentes/TodoItem/TodoItem'
import { CreateTodoButton } from './componentes/CreateTodoButton/CreateTodoButton'
import { TodosError } from './componentes/AppUiComponnets/TodoError'
import { TodosLoading } from './componentes/AppUiComponnets/TodosLoading'
import { EmptyTodos } from './componentes/AppUiComponnets/EmptyTodos'
import './App.css'
import { TodoContext } from './TodoContext/TodoContext';
import { Modal } from './Modal/Modal';
import { TodoForm } from './componentes/TodoForm/TodoForm'
import { InfoTodo } from './componentes/InfoTodo/InfoTodo';


function AppUI() {
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    return (
        <>
        <InfoTodo />
        <TodoCounter />
        <TodoSearch />
            <TodoList>
                {loading && (
                    <>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {(!loading && searchedTodos.length ===0) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)} 
                    />
                ))}
            </TodoList>
        <CreateTodoButton
            setOpenModal={setOpenModal}
        />

        {openModal && (
            <Modal> 
            <TodoForm />
            </Modal>
        )}
        </>
    )
}

export { AppUI };