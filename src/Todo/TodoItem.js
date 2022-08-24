import React, {useContext} from 'react';
import Context from '../context';


export default function TodoItem( {todo, index, onChangee} ) {
    const { removeTodo } = useContext(Context)
    const classes = [];

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li className='list-item'>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    className='todo-input'
                    checked={todo.completed}
                    onChange={() => onChangee(todo.id)}
                />
                 <strong>{ index + 1 } </strong>
                {todo.title},
                {todo.status},
                {todo.deadline}
            </span>

            <button className='btn' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}