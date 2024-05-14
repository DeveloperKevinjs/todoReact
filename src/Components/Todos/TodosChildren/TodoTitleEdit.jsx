import { useState } from "react";
import { IconsSave } from "../../IconsSave";
import { IconsDelete } from "../../IconsDelete";

export const TodoTitleEdit = ({ resetIsActive, editTitle, id }) => {
    const [inputTitle, setinputTitle] = useState("");
    const handleInput = (e) => {
        setinputTitle(e.target.value);
    };
    const handleForm = (e) => {
        e.preventDefault();
        if (!inputTitle.trim()) return;
        editTitle(id, inputTitle);
        resetIsActive();
        return setinputTitle("");
    };
    const handleDeleteEdit = () => {
        resetIsActive();
    };
    return (
        <form
            onSubmit={handleForm}
            className=" flex grow items-center gap-3 overflow-hidden rounded-md bg-white dark:bg-gray-800"
        >
            <input
                autoFocus
                className="w-full  border-0 text-gray-400 outline-none dark:bg-gray-800"
                type="text"
                placeholder="Edit you task..."
                value={inputTitle}
                onChange={handleInput}
            />
            <div className="flex gap-1">
                <button
                    className="rounded-full  bg-green-300 px-1 py-1 text-xs font-bold text-white hover:bg-green-800  "
                    type="submit"
                >
                    <IconsSave></IconsSave>
                </button>
                <button
                    onClick={handleDeleteEdit}
                    className=" rounded-full  bg-red-600 px-1 py-1 text-xs font-bold text-white hover:bg-red-800 "
                    type="button"
                >
                    <IconsDelete></IconsDelete>
                </button>
            </div>
        </form>
    );
};
