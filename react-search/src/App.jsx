import './App.css'
import { SearchAndFind } from './components/searchAndFind'
import CurrencyConvertor from './components/CurrencyConvertor'
import Stopwatch from './components/Stopwatch'
import Debouce from './components/Debouce'
import Throttle from './components/Throttle'
import { useContext } from 'react'
import { TodoContext } from '../context/Todo'
import { CatelougeContext } from './context/Catelouge'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import CatelogList from './components/CatelougeList'
import Pagination from './components/Pagination'

function App() {

  // const getTodoValuesFromContext = useContext(TodoContext);
  // console.log(getTodoValuesFromContext)

  const getCatalougeContext = useContext(CatelougeContext);
  console.log(getCatalougeContext)

  return (
    <>
      {/* <SearchAndFind/> */}
      {/* <CurrencyConvertor/> */}
      {/* <Stopwatch/> */}
      {/* <Debouce/> */}
      {/* <Throttle/> */}
      {/* <TodoInput/>
      <TodoList/> */}
      {/* <Pagination/>
      <CatelogList/> */}
    </>
  )
}

export default App
