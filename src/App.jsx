import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
function App() {
  const saludar = () => {
    alert('Hola!')
  }
  const despedir = () => {
    console.log('Adiós!')
  }

  return (
    <>
    <NavBar />
    <ItemListContainer mensaje="¡Bienvenidos a nuestra tienda!" />
    </>
  )
}

export default App