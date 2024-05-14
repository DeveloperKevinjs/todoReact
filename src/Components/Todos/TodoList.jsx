import { Draggable, Droppable } from "@hello-pangea/dnd";

import { TodoItem } from "./TodosChildren/TodoItem";

export const TodoList = ({ tasks, updateTask, deleteTask, editTitle }) => {
    return (
        <Droppable droppableId="firstDropp">
            {(droppableProvide) => {
                return (
                    <div
                        ref={droppableProvide.innerRef}
                        {...droppableProvide.droppableProps}
                        className="mt-8 rounded-t-md bg-white [&>article]:border-b "
                    >
                        {tasks.map((element, index) => {
                            return (
                                <Draggable
                                    key={element.id}
                                    draggableId={`${element.id}`}
                                    index={index}
                                >
                                    {(draggableProvide) => {
                                        return (
                                            <TodoItem
                                                {...draggableProvide.draggableProps}
                                                {...draggableProvide.dragHandleProps}
                                                ref={draggableProvide.innerRef}
                                                task={element}
                                                updateTask={updateTask}
                                                deleteTask={deleteTask}
                                                editTitle={editTitle}
                                            ></TodoItem>
                                        );
                                    }}
                                </Draggable>
                            );
                        })}
                        {droppableProvide.placeholder}
                    </div>
                );
            }}
        </Droppable>
    );
};
