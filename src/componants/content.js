import { useState } from "react";
// import { FaTrashAlt } from "react-icons";
function Layout() {
  //   const [name,setName] = useState('Somin');
  //   let [count,setCount] = useState(0);

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
  //   const handleNameChange = () => {
  //     const name = ["somin", "bhavik", "zeel"];
  //     const int = Math.floor(Math.random() * 3);
  //      count++;
  //      setName(name[int]);
  //      setCount(count);
  //   };

  //   const handleclick = () =>{
  //     alert(count);
  //  }

  //   const handleclick2 = (name) =>{
  //       alert(`${name} has clicked the clicked`);
  //   }

  const hnadleCheck =  (id) => {
       const listitems = items.map((item) => item.id === id ? {...item , checked : !item.checked} : item);
       setItems(listitems);        
  }


  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input 
                    type="checkbox"
                    onChange={() => hnadleCheck(item.id)} 
                    checked={item.checked} />
            <label>{item.items}</label>

                 <button>Delete</button>
            {/* <FaTrashAlt 
                role="button" 
                tabIndex="0" /> */}
          </li>
        ))}
      </ul>
    </main>
    // <div>
    //   <p>Hello , {name}</p>
    //   <button onClick={handleNameChange}> chnage name</button>
    //   <button onClick={handleclick}> Click Me!</button>
    // </div>
  );
}

export default Layout;
