import { DragDropContext } from "@hello-pangea/dnd";

import "./App.css";
import { useEffect, useState } from "react";
import { TodoCompute } from "./Components/Todos/TodoCompute";
import { TodoCreate } from "./Components/Todos/TodoCreate";
import { TodoFilter } from "./Components/Todos/TodoFilter";
import { TodoHeader } from "./Components/Todos/TodoHeader";
import { TodoList } from "./Components/Todos/TodoList";

const initialState = [];

function App() {
    const [tasks, setTasks] = useState(() => {
        const getTaskLocalStorage = localStorage.getItem("task");
        return getTaskLocalStorage
            ? JSON.parse(getTaskLocalStorage)
            : initialState;
    });

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(tasks));
    }, [tasks]);

    const createTask = (title) => {
        const newTask = {
            id: Date.now(),
            title: title,
            state: false,
        };
        setTasks([...tasks, newTask]);
    };
    const updateTask = (id) => {
        const newState = tasks.map((el) => {
            if (el.id === id) {
                el.state = !el.state;
            }
            return el;
        });
        setTasks(newState);
    };
    const deleteTask = (id) => {
        const newArrayTasks = tasks.filter((el) => el.id !== id);
        setTasks(newArrayTasks);
    };

    const computeTaskIncomplet = () => {
        const newArrayTasks = tasks.filter((el) => el.state !== true);
        return newArrayTasks.length;
    };
    const computeDeleteTaskComplet = () => {
        const newArrayTasks = tasks.filter((el) => el.state !== true);
        setTasks(newArrayTasks);
    };

    const [filter, setFilter] = useState("All");
    const filterTasks = () => {
        switch (filter) {
            case "All":
                return tasks;
            case "Active":
                return tasks.filter((el) => el.state !== true);
            case "Completed":
                return tasks.filter((el) => el.state === true);
            default:
                return tasks;
        }
    };

    const changeFilter = (name) => {
        setFilter(name);
    };

    const editTitle = (id, title) => {
        const newArray = tasks.map((el) => {
            if (el.id === id) {
                el.title = title;
            }
            return el;
        });

        setTasks(newArray);
    };
    const handleOnDragEnd = (result) => {
        const { source, destination } = result;
        if (!result.destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        const copyArray = [...tasks];
        const [reorderArray] = copyArray.splice(source.index, 1);
        copyArray.splice(destination.index, 0, reorderArray);
        setTasks(copyArray);
    };
    return (
        <div
            className="min-h-screen bg-gray-200 bg-[url('./images/bg-mobile-light.jpg')] 
            bg-contain
            bg-no-repeat dark:bg-gray-950 dark:bg-[url('./images/bg-mobile-dark.jpg')] md:bg-[url('./images/bg-desktop-light.jpg')] 
            md:dark:bg-[url('./images/bg-desktop-dark.jpg')]  "
        >
            <TodoHeader></TodoHeader>

            <main className="container mx-auto w-[95%] max-w-[800px]">
                <TodoCreate createTask={createTask}></TodoCreate>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <TodoList
                        tasks={filterTasks()}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                        editTitle={editTitle}
                    ></TodoList>
                </DragDropContext>

                <TodoCompute
                    computeTaskIncomplet={computeTaskIncomplet}
                    computeDeleteTaskComplet={computeDeleteTaskComplet}
                ></TodoCompute>
                <TodoFilter
                    changeFilter={changeFilter}
                    filter={filter}
                ></TodoFilter>
            </main>

            <section className="mt-8 text-center text-gray-400">
                Drag and Drop
            </section>
        </div>
    );
}

export default App;
