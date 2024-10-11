import { CompleteIcon} from '../../assets/icons/CompleteIcon'
import { DeleteIcon} from '../../assets/icons/DeleteIcon'

import './TodoItem.css'

function TodoItem (props) {
    return (
        <div className='TodoItem-container'>
            <li className='TodoItem'>
                <CompleteIcon
                    completed={props.completed}
                    onComplete={props.onComplete}
                />
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
                <DeleteIcon
                    onDelete={props.onDelete}
                />
            </li>
        </div>
    )
    }

export {TodoItem};