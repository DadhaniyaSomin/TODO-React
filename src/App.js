import "./App.css";
import { useState } from "react";
import Header from "./componants/header";
import Layout from "./componants/content";
import Footer from "./componants/footer";

function App() {
  // let title = prompt("Enter yout title");

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      items: "askbdkjasbd",
    },
    {
      id: 2,
      checked: true,
      items: "askbdkjasbd",
    },
    {
      id: 3,
      checked: true,
      items: "askbdkjasbd",
    },
  ]);

  const handleCheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listitems);
    localStorage.setItem("shopinglist", JSON.stringify(listitems));
  };

  const handleDelete = (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setItems(listitems);
    localStorage.setItem("shopinglist", JSON.stringify(listitems));
  };

  return (
    <div className="App">
      <Header title={" Shopping List"} />
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
