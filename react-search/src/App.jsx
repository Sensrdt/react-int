import './App.css'
import { SearchAndFind } from './components/searchAndFind'
import CurrencyConvertor from './components/CurrencyConvertor'
import Stopwatch from './components/Stopwatch'
import Debouce from './components/Debouce'
import Throttle from './components/Throttle'
import { useContext, useState } from 'react'
import { TodoContext } from '../context/Todo'
import { CatelougeContext } from './context/Catelouge'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import CatelogList from './components/CatelougeList'
import Pagination from './components/Pagination'
import CheckboxValues from './CheckboxValues'
import Checkboxes from './components/Checkboxes'

function App() {

  // const getTodoValuesFromContext = useContext(TodoContext);
  // console.log(getTodoValuesFromContext)

  const [checkboxValues, setCheckboxValues] = useState(CheckboxValues)

  const getCatalougeContext = useContext(CatelougeContext);
  console.log(getCatalougeContext)

  const updateCheckboxes = (newVal, name, children) => {
      console.log(newVal, name, children);

      setCheckboxValues(prev => {
          // Recursively update children's checked state
          const updateChildren = (items, isChecked) => {
              return (items || []).map(item => ({ // ✅ Ensure `items` is an array
                  ...item,
                  isChecked: isChecked,
                  children: item.children ? updateChildren(item.children, isChecked) : []
              }));
          };

          const updateParentStatus = (items) => {
              if (!Array.isArray(items)) return items; 

              return items.map(item => {
                  if (Array.isArray(item.children) && item.children.length > 0) {
                      const updatedChildren = updateParentStatus(item.children);
                      const allChildrenChecked = updatedChildren.every(child => child.isChecked);
                      return { ...item, isChecked: allChildrenChecked, children: updatedChildren };
                  }
                  return item;
              });
          };

          return prev.map(val => {
              if (val.name === name) {
                  return {
                      ...val,
                      isChecked: newVal,
                      children: val.children ? updateChildren(val.children, newVal) : []
                  };
              }
              return val;
          }).map(updateParentStatus);
      });
  };



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
      {
        checkboxValues.map((val, index) => {
          return <Checkboxes values={val} key={index} updateCheckboxes={updateCheckboxes}/>
        })
      }
    </>
  )
}

export default App
