import './CreateTodoButton.css'
import { Modal } from '../../Modal/Modal'


function CreateTodoButton ({ setOpenModal }) {
    return(
        <button className='CreateTodoButton' 
        onClick={(event) => {
            setOpenModal(state => !state);
        }}>+</button>
    )
}

export {CreateTodoButton};