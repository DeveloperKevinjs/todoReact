export const TodoCompute = ({
    computeTaskIncomplet,
    computeDeleteTaskComplet,
}) => {
    return (
        <section className="flex items-center justify-between rounded-b-md bg-white px-4 py-4 text-gray-400 dark:bg-gray-800">
            <span>{computeTaskIncomplet()} items left</span>
            <button onClick={computeDeleteTaskComplet}>Delete all</button>
        </section>
    );
};
