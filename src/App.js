import React from 'react';
import data from './data';
import NavBar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  const cards = data.map(item=>{
    return(<Card 
          key={item.id}
          item={item}
          darkMode={darkMode} 
    />)
  }) 

  return(
      <div>
        <NavBar 
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode} 
        />
        <main className={darkMode ? "dark" : ""}>
          {cards}
        </main>
      </div>
        
    )
}
export default App;
