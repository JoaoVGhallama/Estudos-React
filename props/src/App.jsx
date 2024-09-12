import './App.css'
import Name from './Name.jsx'

function App() {
  const num = 10
    return(
      <div>
        <Name name ="TEST" num = {num} />
        <Name name = "TEST 2" num = {num}/>
      </div>
    )
}

export default App
