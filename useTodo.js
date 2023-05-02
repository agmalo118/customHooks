import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const todosCount =
        todos.length;

    const pendingTodosCount =
        todos.filter(todo => !todo.done).length;

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (newTodo) => {
        dispatch({
            type: '[TODO] add todo',
            payload: newTodo,
        });
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] remove todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggle todo',
            payload: id
        });
    }

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    };
}
