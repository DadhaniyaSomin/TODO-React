import "./App.css";
import { useState, useEffect } from "react";
import Header from "./componants/header";
import Layout from "./componants/content";
import Footer from "./componants/footer";
import AddItem from "./componants/AddItem";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState();

  useEffect(() => {
     const FetchItem = async() =>
     {
       try{
        const res  = await fetch(API_URL);
        console.log(res);
        if(! res.ok) throw Error("Did not get exepted data");
        const listitems = await res.json();
        console.log(listitems);
        setItems(listitems);
       }
       catch(err) 
       {
         console.log(err.stack);
       }
     }

     (async() => await FetchItem())();
  },[])

  const addItem = (data) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, data };
    const listitems = [...items, myNewItem];
    console.log(listitems);
    setItems(listitems);
  };

  const handleCheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listitems);
  };

  const handleDelete = (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setItems(listitems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
    // setItems
  };

  return (
    <div className="App">
      <Header title={" Shopping List"} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Layout
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer lenght={items.length} />
    </div>
  );
}

export default App;
