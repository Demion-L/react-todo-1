import React, {useState} from 'react';

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value,

    }
}

function AddTodo({ onCreate }) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault();

        if (input.value().trim()) {
            onCreate(input.value());
            input.clear();
        }
    }

    return (
        <form style={{margin: '1rem 3rem'}} onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button type='submit'>Add to do </button>
        </form>
    )
}

export default AddTodo;