import "./App.css";
import { useState ,useEffect } from "react";
import Header from "./componants/header";
import Layout from "./componants/content";
import Footer from "./componants/footer";
import AddItem from "./componants/AddItem";

function App() {
  
  const [items, setItems] = useState( JSON.parse(localStorage.getItem('shopinglist')) || []) ;

  const [newItem, setNewItem] = useState();

  useEffect(() => {
    //  console.log("changes");
    console.log("asd");
    localStorage.setItem("shopinglist", JSON.stringify(items));
  },[items])


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
