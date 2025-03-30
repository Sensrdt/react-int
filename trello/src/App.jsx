import { useEffect, useState } from "react"
import TaskLists from "./components/TaskLists"
import Tasks from "./components/Tasks"


const typeOfTasks = ["todo", "inProgress", "completed"]

function App() {
  const [taskList, setTaskList] = useState({
    todo : [
    {
      id : 1,
      type: "todo",
      title: "Fixing UI"
    },
    {
      id : 2,
      type: "completed",
      title: "Fixing backend"
    },
  ],
  inProgress: [
    {
      id : 3,
      type: "inProgress",
      title: "Writing trello clone"
    },
  ],
  completed:[
    {
      id : 4,
      type: "inProgress",
      title: "Writing task component"
    }
  ]
})

  const handleAddNewCard = (payload) => {
    
    payload["id"] = 99
    console.log(payload)
    setTaskList(prev => {
      console.log(prev)
      return {
        ...prev,
        [payload.type]: [...(prev[payload.type] ?? []),  payload],
      }
    })
  }
   const [title, setTitle] = useState("");
    const [type, setType] = useState("todo");

    const handleSubmit = (e) => {
      e.preventDefault()
        handleAddNewCard({
            title,
            type
        })
    }

  useEffect(() => {
    console.log(taskList, type)
  }, [taskList, type])

  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input value={title} placeholder="enter card title" onChange={(e) => setTitle(e.target.value)}/>
            <select onChange={(e) => setType(e.target.value)}>
                {
                    typeOfTasks.map((val, idx) => {
                        return (
                            <option key={idx}>
                                {val}
                            </option>
                        )
                    })
                }
            </select>
            <button>Add Card</button>
        </form>
        {
          typeOfTasks.map((val, idx) => {
            return (
              <div key={idx}>
                <TaskLists name={val} >
                  {taskList[val]
                    .map((items) => {
                      return <Tasks key={items.id} task={items} />;
                    })}
                </TaskLists>
              </div>
            );
          })
        }

      </div>
    </div>
  )
}

export default App
