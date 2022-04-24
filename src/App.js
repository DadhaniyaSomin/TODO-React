import "./App.css";
import { useState } from "react";
import Header from "./componants/header";
import Layout from "./componants/content";
import Footer from "./componants/footer";
import AddItem from "./componants/AddItem";

function App() {
  //

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      data: "askbdkjasbd",
    },
    {
      id: 2,
      checked: true,
      data: "askbdkjasbd",
    },
    {
      id: 3,
      checked: true,
      data: "askbdkjasbd",
    },
  ]);

  const [newItem, setNewItem] = useState();

  const setAndSaveItem = (data) => {
      setItems(data);
      localStorage.setItem("shopinglist", JSON.stringify(data));
  }

  const addItem = (data) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, data };
    const listitems = [...items, myNewItem];
    console.log(listitems);
    setAndSaveItem(listitems);
  };

  const handleCheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItem(listitems);
  };

  const handleDelete = (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setAndSaveItem(listitems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
    // setAndSaveItem
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
