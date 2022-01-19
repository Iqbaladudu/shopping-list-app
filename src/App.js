import { useState } from 'react'
import Navbar from './Components/Navbar'
import Container from './Components/Container'
import SearchInput from './Components/SearchInput'
import Info from './Components/Info'
import Todos from './Components/Todos'
import Empty from './Components/Empty'

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title: 'Susu ultra', count: 1},
    {title: 'Tahu sumedang', count: 1},
    {title: 'Semangka', count: 1},
  ])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value) {
      alert('No blank list!')
      return
    }

    const addedTodos = [{
      title: value,
      count: 1
    }, ...todos]

    setTodos(addedTodos)
    setValue('')
  }

  const handleAdditionCount = (index) => {
    const newTodos = [...todos]

    newTodos[index].count = newTodos[index].count + 1

    setTodos(newTodos)
  }

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos]

    if (newTodos[index].count > 0) {
      // Selama jumlah count masih di atas 0
      newTodos[index].count = newTodos[index].count - 1
    } else {
      // Hapus array value jika count kurang dari 1
      newTodos.splice(index, 1)
    }

    setTodos(newTodos)
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    }, 0)

    return totalCounts
  }

  return (
    <>
      <Navbar />
      <Container>
        <SearchInput 
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

      <Info
        todosLength={todos.length}
        totalCounts={getTotalCounts()}
        onDelete={() => setTodos([])}
      />

      {todos.length > 0 ? (
        <Todos
          todos={todos}
          onSubstraction={(index) => {
            handleSubstractionCount(index)
          }}
          onAddition={(index) => {
            handleAdditionCount(index)
          }}
        />
      ) : (
        <Empty />
      )}
      </Container>
    </>
  );
}

export default App;
