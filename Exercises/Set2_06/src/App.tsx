import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
// import { useInputCount } from './mycustomcomponents/useinputcount';
// import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
// import { faTrashCan } from '@fortawesome/free-brands-svg-icons'

function App() {
  const [tasksDoneCount, setTDC] = useState(0);

  function CheckToCount() {
    const checkbox = document.activeElement as HTMLInputElement;
    if (checkbox.checked) {
      setTDC(tasksDoneCount + 1);
      console.log("incremented")
    } else {
      setTDC(tasksDoneCount - 1);
      console.log("decremented")
    };
  };

  function deleteListItem() {
    const thislistitem = document.activeElement?.parentElement?.parentElement as HTMLDivElement;
    const checkbox = document.activeElement?.parentElement?.parentElement?.firstChild?.firstChild as HTMLInputElement;
    if (checkbox.checked) {
      console.log (tasksDoneCount)
      setTDC(tasksDoneCount - 1);
      console.log("also decremented" + tasksDoneCount)
    };
    thislistitem?.remove();
  };

  function createListItem() {
    console.log("running");
    const textbox = document.getElementById("todotextbox") as HTMLInputElement;
    const text = textbox.value;
    console.log(typeof text);
    console.log(text);
    if (text == undefined || text.length === 0) {
      console.log("returned quickly" + text);
      return;
    };
    console.log("textlength ok" + text);

    const newflexelement = document.createElement("div");
    newflexelement.className = "static mt-5 text-white flex flex-row px-24";
    console.log("newflexelement ok")

    const checkboxdiv = document.createElement("div");
    checkboxdiv.className = "basis-1/12 pt-1.5 pl-1";
    const checkboxelement = document.createElement("input");
    checkboxelement.type = "checkbox";
    checkboxelement.className = "appearance-none rounded-sm outline outline-green-500 outline-2 size-4 hover:bg-green-800 checked:appearance-auto checked:accent-green-500";
    checkboxelement.onclick = CheckToCount;
    checkboxdiv.appendChild(checkboxelement);
    newflexelement.appendChild(checkboxdiv);
    console.log("checkbox ok")

    const textdiv = document.createElement("div");
    textdiv.className = "basis-5/6 pt-0.5";
    textdiv.innerText = text;
    newflexelement.appendChild(textdiv);
    console.log("textdiv ok")

    const trashcandiv = document.createElement("div");
    trashcandiv.className = "basis-1/12";
    const trashcanelement = document.createElement("button");
    trashcanelement.className = "rounded-md bg-transparent border border-red-300 size-9 pb-0.5 hover:bg-red-200";
    trashcanelement.onclick = deleteListItem;
    trashcanelement.innerHTML = '<FontAwesomeIcon icon={faTrashCan} style={{color: "#fca5a5",}} />'
    trashcandiv.appendChild(trashcanelement);
    newflexelement.appendChild(trashcandiv);
    console.log("trashcan ok")

    document.getElementById("containerdiv")?.insertBefore(newflexelement, document.getElementById("horizontalline"));
  }

  return (
    <div className="text-white flex place-content-center bg-black">
      <div className="pt-10 w-3/5 h-screen" id="containerdiv">
        <div className="static flex place-content-center px-64">
          <p className="text-xl font-bold">Chores ToDo List</p>
        </div>
        <div className="static mt-5 text-white flex flex-row px-24" id="todolist">
          <div className="basis-1/12 pt-1.5 pl-1" id="checkboxdiv">
            <input type="checkbox" className="appearance-none rounded-sm outline outline-green-500 outline-2 size-4 hover:bg-green-800 checked:appearance-auto checked:accent-green-500"
              onClick={CheckToCount}></input>
          </div>
          <div className="basis-5/6 pt-0.5">Figure out how to make keep the rounded border on checked checkbox</div>
          <div className="basis-1/12">
            <button className="rounded-md bg-transparent border border-red-300 size-9 pb-0.5 hover:bg-red-200"
              onClick={deleteListItem} id="testbutton1">
              <FontAwesomeIcon icon={faTrashCan} style={{color: "#fca5a5",}} />
            </button>
          </div>
        </div>
        <div className="static mt-5 text-white flex flex-row px-24" id="todolist2">
          <div className="basis-1/12 pt-1.5 pl-1">
            <input type="checkbox" className="appearance-none rounded-sm outline outline-green-500 outline-2 size-4 hover:bg-green-800 checked:appearance-auto checked:accent-green-500"
              onClick={CheckToCount}></input>
          </div>
          <div className="basis-5/6 pt-0.5">Figure out how to keep the trash can icon on the button</div>
          <div className="basis-1/12">
            <button className="rounded-md bg-transparent border border-red-300 size-9 pb-0.5 hover:bg-red-200"
              onClick={deleteListItem}>
              <FontAwesomeIcon icon={faTrashCan} style={{color: "#fca5a5",}} />
            </button>
          </div>
        </div>
        <div className="static mt-8 border-b border-transparent border-b-white" id="horizontalline">
        </div>
        <div className="static mt-4 text-xl font-bold text-center px-40">
          <label>Done : {tasksDoneCount}</label>
        </div>
        <div className="static mt-3 px-24">
          <div className="mt-5 text-sm">
            <label>Add todo</label>
          </div>
          <div>
            <input type="text" className="relative top-2 bg-transparent border border-white rounded h-10 w-full focus:border-2 focus:bg-zinc-600" id="todotextbox"></input>
          </div>
          <div>
            <button className="relative top-5 rounded-md bg-sky-300 text-black font-bold p-2 w-28 hover:animate-fade-90" id="todobutton"
              onClick={(createListItem)}>
              ADD TASK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
