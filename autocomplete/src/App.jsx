import './App.css'
import Autocomplete from './components/Autocomplete'

function App() {

  return (
    <div>
      <h1>Autocomplete</h1>
      {/* 
          1. Fetch API using debouncing
          2. Display the fetched data in a list
          3. Highlight the search text
          4. Cache the fetched data
      */}
      <Autocomplete/>
    </div>
  )
}

export default App
