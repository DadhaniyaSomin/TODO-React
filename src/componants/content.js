import ItemList from "./ItemList";

// import { FaTrashAlt } from "react-icons";
function Layout({items , handleCheck , handleDelete}) {

  return (
    <>
      {items.length ? (
        <ItemList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      ) : (
        <p style={{ margin: "2rem" }}>Your List is Empty.</p>
      )}
      </>
  );
}


export default Layout;
