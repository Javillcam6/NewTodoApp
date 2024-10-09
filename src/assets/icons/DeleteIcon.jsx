import React from "react";
import { Icons } from './Icons'


function DeleteIcon({ onDelete }) {
    return (
        <Icons
        type="delete"
        color='gray'
        onClick={onDelete}
        />
    );
}

export { DeleteIcon };