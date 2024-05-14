import React, { useState } from "react";
import { IconsCheck } from "../../IconsCheck";
import { InconsCroos } from "../../IconsCross";
import { TodoTitleEdit } from "./TodoTitleEdit";

export const TodoItem = React.forwardRef(
    ({ task, updateTask, deleteTask, editTitle, ...props }, ref) => {
        const { id, title, state } = task;
        const handleState = (ident) => {
            updateTask(ident);
        };
        const handleDelete = (ident) => {
            deleteTask(ident);
        };

        const [isActive, setIsActive] = useState(false);

        const handleIsActive = () => {
            return state ? setIsActive(false) : setIsActive(true);
        };

        const resetIsActive = () => {
            setIsActive(false);
        };
        return (
            <article
                {...props}
                ref={ref}
                className="flex items-center gap-3 border-b-gray-400 px-4 py-4 dark:bg-gray-800"
            >
                <button
                    disabled={isActive}
                    onClick={() => handleState(id)}
                    className={`flex h-5 w-5 flex-none items-center 
                justify-center rounded-full border-2  ${
                    state && "bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
                >
                    {state && <IconsCheck></IconsCheck>}
                </button>
                {isActive ? (
                    <TodoTitleEdit
                        resetIsActive={resetIsActive}
                        editTitle={editTitle}
                        id={id}
                    ></TodoTitleEdit>
                ) : (
                    <p
                        onDoubleClick={handleIsActive}
                        className={`grow dark:text-gray-300 ${
                            state
                                ? "text-gray-400 line-through"
                                : "text-gray-700"
                        }`}
                    >
                        {title}
                    </p>
                )}
                {!isActive && (
                    <button
                        onClick={() => handleDelete(id)}
                        className="flex-none"
                    >
                        <InconsCroos></InconsCroos>
                    </button>
                )}
            </article>
        );
    }
);
