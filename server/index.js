const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

// Create a Task
app.post("/newTask", async (req, res) => {
    try {

        const { task } = req.body;
        const new_Task = await pool.query(
            "INSERT INTO tasks (task) VALUES($1) RETURNING *",
            [task]
        );
        res.json(new_Task.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get all Task

app.get("/newTask", async (req, res) => {
    try {
        const all_Task = await pool.query("SELECT * FROM tasks")
        res.json(all_Task.rows);
    } catch (error) {
        console.error(err.message);
    }
});

//Get a Task

app.get("/newTask/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const tasks = await pool.query("SELECT * FROM tasks WHERE unique_id = $1", [id]);

        res.json(tasks.rows[0]);
    } catch (error) {
        console.error(err.message);
    }
});

//Update a Task

app.put("/newTask/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { task } = req.body;
        const update_Task = await pool.query(
            "UPDATE tasks SET task = $1 WHERE unique_id = $2",
            [task, id]
        );
        res.json("Task Updated:)");
    } catch (error) {
        console.error(err.message);
    }
});

//Delete a Task

app.delete("/newTask/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const delete_Task = await pool.query("DELETE FROM tasks WHERE unique_id = $1", [id]);
        res.json("Task Deleted ")
    } catch (error) {
        console.error(err.message);
    }
});

app.listen(5001, () => {
});