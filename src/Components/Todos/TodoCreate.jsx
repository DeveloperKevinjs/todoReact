import { useState } from "react";

export const TodoCreate = ({ createTask }) => {
    const [inputTitle, setinputTitle] = useState("");
    const handleInput = (e) => {
        setinputTitle(e.target.value);
    };
    const handleForm = (e) => {
        e.preventDefault();
        if (!inputTitle.trim()) return;

        createTask(inputTitle);
        return setinputTitle("");
    };

    return (
        <form
            onSubmit={handleForm}
            className="mt-8 flex items-center gap-3 overflow-hidden rounded-md bg-white px-4 py-4 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2 "></span>
            <input
                className="w-full border-0 text-gray-400 outline-none dark:bg-gray-800"
                type="text"
                placeholder="Create a new todo..."
                value={inputTitle}
                onChange={handleInput}
            />
        </form>
    );
};
