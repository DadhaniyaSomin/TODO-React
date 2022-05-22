import "./App.css";
import { useState, useEffect } from "react";
import Header from "./componants/header";
import Layout from "./componants/content";
import Footer from "./componants/footer";
import AddItem from "./componants/AddItem";
import apiRequest from "./componants/apiRequest";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState();
  const [fetchError, setFetchErrot] = useState(null);

  useEffect(() => {
    const FetchItem = async () => {
      try {
        const res = await fetch(API_URL);

        console.log(res);
        if (!res.ok) throw Error("Did not get exepted data");
        const listitems = await res.json();
        console.log(listitems);
        setItems(listitems);
        setFetchErrot(null);
      } catch (err) {
        // console.log(err.massage);
        setFetchErrot(err.message);
      }
    };

    (async () => await FetchItem())();
  }, []);

  const addItem = async (data) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, items:data };
    const data2 = JSON.stringify(myNewItem);
    const listitems = [...items, myNewItem];
    // console.log(listitems);
    setItems(listitems);

    const postOption = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: data2
    };

    // alert(postOption);
    const result = await apiRequest(API_URL, postOption);
    //  console.log(result);
    if (result) setFetchErrot(result);
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
      <main>
        {fetchError && (
          <p style={{ color: "red" }}>{` Error : ${fetchError}`}</p>
        )}
        {!fetchError && (
          <Layout
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer lenght={items.length} />
    </div>
  );
}

export default App;
