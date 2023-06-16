'use client';

import { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function InputForm() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    function addItem(e) {
        e.preventDefault();
        if (todo.trim() !== '') {
            const newTodo = {
                id: new Date().getTime(),
                text: todo,
            };
            const updatedTodos = [...todos, newTodo];
            setTodos(updatedTodos);
            setTodo('');

            localStorage.setItem('todos', JSON.stringify(updatedTodos));
        }
    }

    function handleChange(e) {
        setTodo(e.target.value);
    }

    function deleteItem(id) {
        const updatedTodos = todos.filter((item) => item.id !== id);
        setTodos(updatedTodos);

        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    return (
        <div className="mt-6">
            <form className="flex flex-col">
                <input
                    type="text"
                    placeholder="Input random todo"
                    className="p-3 text-sm"
                    onChange={handleChange}
                />
                <button
                    onClick={addItem}
                    className="bg-[#AF7EEB] text-white text-sm p-3 mt-2"
                >
                    Add
                </button>
            </form>
            {todos.length > 0 ? (
                <div className="output-container text-sm bg-white py-5 px-8 mt-6">
                    <ul>
                        {todos.map((item) => (
                            <li
                                className="flex items-center justify-between [&:not(:first-of-type)]:mt-3"
                                key={item.id}
                            >
                                {item.text}
                                <span
                                    className="cursor-pointer"
                                    onClick={() => deleteItem(item.id)}
                                >
                                    <FaTrashAlt />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}
