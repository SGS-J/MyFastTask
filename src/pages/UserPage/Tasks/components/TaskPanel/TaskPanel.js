import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "./components/TaskCard";

export default function TaskPanel({ tasksPanel1, tasksPanel2, tasksPanel3 }) {
  return (
    <DragDropContext>
      <div
        id="task-panel"
        className="col-10 col-sm-9 row pt-5 justify-content-center"
      >
        <Droppable droppableId="task-panel-1">
          {(provided) => {
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              classname="col-12 col-sm-9 col-lg-4 p-1 card"
            >
              <div classname="card-body">
                <div classname="card-title">important & urgent</div>
                {tasksPanel1.map((task, index) => {
                  return (
                    <TaskCard
                      title={task.title}
                      description={task.description}
                    />
                  );
                })}
              </div>
            </div>;
          }}
        </Droppable>
        <Droppable droppableId="task-panel-2">
          {(provided) => {
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              classname="col-12 col-sm-9 col-lg-4 p-1 card"
            >
              <div classname="card-body">
                <div classname="card-title">important & urgent</div>
                {tasksPanel2.map((task) => {
                  return (
                    <TaskCard
                      title={task.title}
                      description={task.description}
                    />
                  );
                })}
              </div>
            </div>;
          }}
        </Droppable>
        <Droppable droppableId="task-panel-3">
          {(provided) => {
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              classname="col-12 col-sm-9 col-lg-4 p-1 card"
            >
              <div classname="card-body">
                <div classname="card-title">important & urgent</div>
                {tasksPanel2.map((task) => {
                  return (
                    <taskcard
                      title={task.title}
                      description={task.description}
                    />
                  );
                })}
              </div>
            </div>;
          }}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
