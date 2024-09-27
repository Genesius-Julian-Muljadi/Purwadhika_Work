// main.tsx imports this App
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
// import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
// import { faTrashCan } from '@fortawesome/free-brands-svg-icons'

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
    <div className="text-white flex place-content-center bg-black">
      <div className="pt-10 w-3/5 h-screen">
        <div className="static flex place-content-center px-64">
          <p className="text-xl font-bold">Chores ToDo List</p>
        </div>
        <div className="static mt-5 text-white flex flex-row px-24" id="todolist">
          <div className="basis-1/12 pt-1.5 pl-1">
            <input type="checkbox" className="appearance-none rounded-sm outline outline-green-500 outline-2 size-4 hover:bg-green-800 checked:appearance-auto checked:accent-green-500"></input>
          </div>
          <div className="basis-5/6 pt-0.5">Figure out how to make keep the rounded border on checked checkbox</div>
          <div className="basis-1/12">
            <button className="rounded-md bg-transparent border border-red-300 size-9 pb-0.5 hover:bg-red-200">
              <FontAwesomeIcon icon={faTrashCan} style={{color: "#fca5a5",}} />
            </button>
          </div>
        </div>
        <div className="static mt-5 text-white flex flex-row px-24" id="todolist">
          <div className="basis-1/12 pt-1.5 pl-1">
            <input type="checkbox" className="appearance-none rounded-sm outline outline-green-500 outline-2 size-4 hover:bg-green-800 checked:appearance-auto checked:accent-green-500"></input>
          </div>
          <div className="basis-5/6 pt-0.5">Figure out how to add functionality to buttons</div>
          <div className="basis-1/12">
            <button className="rounded-md bg-transparent border border-red-300 size-9 pb-0.5 hover:bg-red-200">
              <FontAwesomeIcon icon={faTrashCan} style={{color: "#fca5a5",}} />
            </button>
          </div>
        </div>
        <div className="static mt-8 border-b border-transparent border-b-white" id="horizontalline">
        </div>
        <div className="static mt-4 text-xl font-bold text-center px-40">
          <label>Done : {tasksDone}</label>
        </div>
        <div className="static mt-3 px-24">
          <div className="mt-5 text-sm">
            <label>Add todo</label>
          </div>
          <div>
            <input type="text" className="relative top-2 bg-transparent border border-white rounded h-10 w-full focus:border-2 focus:bg-zinc-600" id="todotextbox"></input>
          </div>
          <div>
            <button className="relative top-5 rounded-md bg-sky-300 text-black font-bold p-2 w-28 hover:bg-opacity-70" id="todobutton">
              ADD TASK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
