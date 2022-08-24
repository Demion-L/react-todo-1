import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({todosList, onToggle}) {
    return (
        <ul>
            { todosList.map((todo, index) => {
                return (
                    <TodoItem
                    todo={todo}
                    index={index}
                    key={todo.id}
                    onChangee={onToggle}
                />
                )
            }) }
        </ul>
    )
}