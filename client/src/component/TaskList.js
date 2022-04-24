import { useEffect, useState } from "react";
import EditTask from "./EditTask";

const TaskList = () => {
    const [newTask, setNewTask] = useState([]);


    const delete_Task = async id => {
        try {
            const response = await fetch(`http://localhost:5001/newTask/${id}`, {
                method: "DELETE"
            });

            setNewTask(newTask.filter(tasks => tasks.unique_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getNewTasks = async () => {
        try {
            const response = await fetch("http://localhost:5001/newTask");
            const jsonData = await response.json();

            setNewTask(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getNewTasks();
    }, []);

    return (
        <>
            {" "}
            <table class="table mt-5 text-center">
                <thead>
                    <tr className="table">
                        <th>Task</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { }
                    {newTask.map(tasks => (
                        <tr key={tasks.unique_id}>
                            <td>{tasks.task}</td>
                            <td>
                                <EditTask tasks={tasks} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => delete_Task(tasks.unique_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TaskList;