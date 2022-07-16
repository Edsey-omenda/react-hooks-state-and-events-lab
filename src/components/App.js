import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [items, setItems] = useState(itemData);
  const [isTheme, setTheme]= useState(false)

    function handleTheme(){
    setTheme((isTheme) => (!isTheme) )
  
    }
  
  
    const appClass = isTheme ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleTheme}>
          {isTheme ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;




