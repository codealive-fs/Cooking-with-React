import React, {useState} from "react";
import CounterHooks from "./CounterHooks";


export const ThemeContext = React.createContext()

function App() {
  console.log("render app");
const [theme, setTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <CounterHooks initialCount={0} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'green' ? 'blue' : 'green'
      })}>Toggle</button>
    </ThemeContext.Provider> 
  )
}

export default App;
