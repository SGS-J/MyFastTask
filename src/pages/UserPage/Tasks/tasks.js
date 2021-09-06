import React, { useReducer } from "react";
import TaskCreation from "./components/TaskCreation/TaskCreation";
import TaskPanel from "./components/TaskPanel/TaskPanel";

const initialState = {
  tasks: [],
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
        tasktToAddTitle: "",
        taskToAddDescription: "",
        tasks: state.tasks.concat({ title, description }),
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
      <TaskPanel tasks={state.tasks} />
    </main>
  );
}
