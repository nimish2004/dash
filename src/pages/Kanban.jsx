import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";

const initialData = {
  todo: ["Task 1", "Task 2"],
  doing: ["Task 3"],
  done: ["Task 4"],
};

const columnColors = {
  todo: "bg-red-100",
  doing: "bg-yellow-100",
  done: "bg-green-100",
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialData);
  const [newTask, setNewTask] = useState({ todo: "", doing: "", done: "" });
  const [editTask, setEditTask] = useState({ columnId: null, index: null });
  const [editText, setEditText] = useState("");

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceItems = [...columns[source.droppableId]];
    const [movedItem] = sourceItems.splice(source.index, 1);
    const destItems = [...columns[destination.droppableId]];
    destItems.splice(destination.index, 0, movedItem);

    setColumns({
      ...columns,
      [source.droppableId]: sourceItems,
      [destination.droppableId]: destItems,
    });
  };

  const handleAddTask = (columnId) => {
    if (!newTask[columnId].trim()) return;

    setColumns({
      ...columns,
      [columnId]: [...columns[columnId], newTask[columnId].trim()],
    });

    setNewTask({ ...newTask, [columnId]: "" });
  };

  const handleDeleteTask = (columnId, index) => {
    const updatedTasks = [...columns[columnId]];
    updatedTasks.splice(index, 1);
    setColumns({
      ...columns,
      [columnId]: updatedTasks,
    });
  };

  const startEditing = (columnId, index) => {
    setEditTask({ columnId, index });
    setEditText(columns[columnId][index]);
  };

  const saveEdit = () => {
    const updatedTasks = [...columns[editTask.columnId]];
    updatedTasks[editTask.index] = editText.trim() || updatedTasks[editTask.index];
    setColumns({
      ...columns,
      [editTask.columnId]: updatedTasks,
    });
    setEditTask({ columnId: null, index: null });
    setEditText("");
  };

  const cancelEdit = () => {
    setEditTask({ columnId: null, index: null });
    setEditText("");
  };

  return (
    <div className="flex-1 overflow-y-auto pl-64">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Kanban Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6">
          {Object.entries(columns).map(([columnId, tasks]) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`flex flex-col rounded-lg shadow-md p-4 w-1/3
                    ${columnColors[columnId]}
                    ${snapshot.isDraggingOver ? "ring-4 ring-blue-400" : ""}
                  `}
                >
                  <h3 className="font-semibold capitalize text-xl mb-4 text-gray-700 border-b border-gray-300 pb-2">
                    {columnId}
                  </h3>

                  <div className="flex flex-col gap-3 flex-grow min-h-[150px]">
                    {tasks.map((task, index) => (
                      <Draggable key={task + index} draggableId={task + index} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`bg-white p-3 rounded shadow cursor-move
                              select-none
                              transition-transform duration-150
                              flex justify-between items-center
                              ${snapshot.isDragging ? "bg-blue-200 shadow-lg scale-105" : "hover:shadow-md"}
                            `}
                          >
                            {editTask.columnId === columnId && editTask.index === index ? (
                              <div className="flex gap-2 items-center w-full">
                                <input
                                  type="text"
                                  value={editText}
                                  onChange={(e) => setEditText(e.target.value)}
                                  className="flex-grow border border-gray-300 rounded px-2 py-1"
                                />
                                <button
                                  onClick={saveEdit}
                                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={cancelEdit}
                                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <>
                                <span>{task}</span>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => startEditing(columnId, index)}
                                    className="text-blue-600 hover:text-blue-800"
                                    title="Edit Task"
                                  >
                                    ✏️
                                  </button>
                                  <button
                                    onClick={() => handleDeleteTask(columnId, index)}
                                    className="text-red-600 hover:text-red-800"
                                    title="Delete Task"
                                  >
                                    🗑️
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>

                  <div className="mt-4 flex gap-2">
                    <input
                      type="text"
                      placeholder={`Add new task in ${columnId}`}
                      className="flex-grow rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={newTask[columnId]}
                      onChange={(e) => setNewTask({ ...newTask, [columnId]: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleAddTask(columnId);
                      }}
                    />
                    <button
                      onClick={() => handleAddTask(columnId)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Add
                    </button>
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban;
