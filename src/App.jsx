
import './App.css'
import Friends from './friends';

function App() {
 
function handleClick(){
  alert('button clicked')

}
const handleClick2 =()=>{
  alert('button 2 clicked')
}
const addToFive = (num) =>{
alert(num + 5); 
}
  return (
    <>
    <Friends></Friends>

      <h3>React cORE cONCEPT 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third clicked')}}>Third</button>
      <button onClick={addToFive}>Four</button>
     
    </>
  )
}

export default App
