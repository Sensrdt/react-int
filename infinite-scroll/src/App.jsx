import LoadListUsingScroll from "./LoadListUsingScroll"
import './App.css'
import LoadListUsingObserver from "./LoadListUsingObserver"

const ITEM_HEIGHT = 40
const BUFFER = 5
const THRESHOLD = 100

function App() {
  return <div>
    {/* <LoadListUsingScroll /> */}
    <LoadListUsingObserver/>
  </div>
}

export default App
