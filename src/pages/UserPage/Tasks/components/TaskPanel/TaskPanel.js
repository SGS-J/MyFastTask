import TaskCard from "./components/TaskCard";

export default function TaskPanel({ tasksPanel1, tasksPanel2, tasksPanel3 }) {
  return (
    <div className="col-9 row pt-5 px-5 justify-content-center">
      <div
        className="col-12 col-sm-9 col-lg-4 p-1 card"
        style={{ minHeight: "80vh" }}
      >
        <div className="card-body">
          <div className="card-title">Important & Urgent</div>
          {tasksPanel1.map((task) => {
            return (
              <TaskCard title={task.title} description={task.description} />
            );
          })}
        </div>
      </div>
      <div className="col-12 col-sm-9 col-lg-4 p-1 card">
        <div className="card-body">
          <div className="card-title">Urgent but not important</div>
          {tasksPanel2.map((task) => {
            return (
              <TaskCard title={task.title} description={task.description} />
            );
          })}
        </div>
      </div>
      <div className="col-12 col-sm-9 col-lg-4 p-1 card">
        <div className="card-body">
          <div className="card-title">Important but not urgent</div>
          {tasksPanel3.map((task) => {
            return (
              <TaskCard title={task.title} description={task.description} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
