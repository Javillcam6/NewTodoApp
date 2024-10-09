import React from "react";
import { Icons } from './Icons'


function CompleteIcon ({ completed, onComplete }) {
    return (
        <Icons
        type='check'
        color={completed ? 'green' : 'gray'}
        onClick={onComplete}
        />
    );
}

export { CompleteIcon };