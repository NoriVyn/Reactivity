import React from "react";

function TodoList(){
    return (
        <div>
            <h1>To Do List:</h1>
            <form>
                <input type="text" placeholder="Add a task" />
            <button className="add" type="submit">Add</button>
            </form>
            <div className="todolist">
            <div className="item">
                    <span>Task</span>
                    <button>Delete</button>
                </div>
                <div className="item complete">
                    <span>Task</span>
                    <button>Delete</button>
                </div>
            </div>


        </div>
    )
}

export default TodoList