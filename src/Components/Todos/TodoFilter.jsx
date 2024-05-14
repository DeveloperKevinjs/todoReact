export const TodoFilter = ({ changeFilter, filter }) => {
    const handleTaskAll = () => {
        changeFilter("All");
    };
    const handleTaskActive = () => {
        changeFilter("Active");
    };
    const handleTaskComplete = () => {
        changeFilter("Completed");
    };
    return (
        <section className="container mx-auto w-[95%] max-w-[800px]">
            <div className="mt-8 flex justify-evenly rounded-md bg-white p-4 dark:bg-gray-800 [&>button]:font-bold ">
                <button
                    onClick={handleTaskAll}
                    className={`${
                        filter === "All"
                            ? "text-blue-500"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                >
                    All
                </button>
                <button
                    onClick={handleTaskActive}
                    className={`${
                        filter === "Active"
                            ? "text-blue-500 "
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                >
                    Active
                </button>
                <button
                    onClick={handleTaskComplete}
                    className={`${
                        filter === "Completed"
                            ? "text-blue-500 "
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};
