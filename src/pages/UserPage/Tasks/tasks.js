import React, { useReducer } from "react";
import TaskCreation from "./components/TaskCreation/TaskCreation";
import TaskPanel from "./components/TaskPanel/TaskPanel";

const initialState = {
  tasksPanel1: [],
  tasksPanel2: [],
  tasksPanel3: [],
  tasktToAddTitle: "",
  taskToAddDescription: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "title":
      return { ...state, tasktToAddTitle: action.value };
    case "description":
      return { ...state, taskToAddDescription: action.value };
    case "task-create": {
      const title = state.tasktToAddTitle;
      const description = state.taskToAddDescription;
      return {
        ...state,
        tasktToAddTitle: "",
        taskToAddDescription: "",
        tasksPanel1: state.tasksPanel1.concat({ title, description }),
      };
    }

    default:
      throw new Error();
  }
};

export default function TasksPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (type, value) => {
    dispatch({ type, value });
  };

  const handleCreateTask = () => {
    dispatch({ type: "task-create" });
  };

  return (
    <main id="tasks-template" className="row justify-content-center">
      <TaskCreation
        taskTitle={state.tasktToAddTitle}
        taskDescription={state.taskToAddDescription}
        handleChange={handleChange}
        handleCreateTask={handleCreateTask}
      />
      <TaskPanel
        tasksPanel1={state.tasksPanel1}
        tasksPanel2={state.tasksPanel2}
        tasksPanel3={state.tasksPanel3}
      />
    </main>
  );
}
