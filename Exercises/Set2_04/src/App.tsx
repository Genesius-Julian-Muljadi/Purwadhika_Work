// main.tsx imports this App

function App() {
  let tasksDone: number = 0;

  // function addNewTask() {
  //   const input: string = String(document.getElementById("todotextbox").innerText);
  //   const newElement = document.createElement("div");
  //   newElement.className = "flex flex-row";
  //   newElement.appendChild(document.createElement("div"));
  //   const newElementToDo = document.createElement("p");
  //   newElementToDo.textContent = input;
  //   newElement.appendChild(newElementToDo);
  //   newElement.appendChild(document.createElement("div"));

  //   const list = document.getElementById("todolist");
  //   list.appendChild(newElement);

  //   return undefined
  // };

  return (
    <body className="bg-black text-white">
      <div className="size-full border-red-500 border-2">
        <div className="flex place-content-center">
          <p className="text-xl text-white">Chores ToDo List</p>
        </div>
        <div className="text-white flex flex-row" id="todolist">
          <div className="border-yellow-500 border-2 basis-1/6"></div>
          <div className="border-yellow-500 border-2 basis-2/3">todostuff</div>
          <div className="border-yellow-500 border-2 basis-1/6"></div>
        </div>
        <div className="border-b-2 border-b-white">
          horizontal line
        </div>
        <div className="text-white text-xl text-center">
          Done : {tasksDone}
        </div>
        <div>
          <div className="mt-6 text-white text-sm">Add todo</div>
          <div className="text-white">
            <input type="text" className="relative top-2 text-black" id="todotextbox"></input>
          </div>
          <div className="text-white">
            {/* <button className="relative top-3 bg-blue-300 text-black" onClick={addNewTask()}>ADD TASK</button> */}
          </div>
        </div>
      </div>
    </body>
  )
}

export default App
