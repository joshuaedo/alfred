import { useState } from "react";
import Task from "@/components/task/task.jsx";
import Modal from "@/components/modal/modal.jsx";
import { tasks } from "./db/tasks-db.js";

export default function App() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      {/* <Alfred /> */}
      <main className="p-24">
        <div className="grid grid-cols-1 gap-y-4 md:gap-y-10 pb-[9vh] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {tasks.map((task, index) => {
            const { src, id } = task;
            return (
              <Task index={index} setModal={setModal} key={id} src={src} />
            );
          })}
        </div>
        <Modal modal={modal} tasks={tasks} />
      </main>
    </>
  );
}
