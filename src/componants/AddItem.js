// import {FaPlus} from 'react-icons';
function AddItem({newItem,setNewItem,handleSubmit})
{
    return(
        <form className="addForm" onSubmit={handleSubmit}>
           <label htmlFor="additem" >
             Add Item : 
           </label>
           <input
              autoFocus
              id="addItem"
              type= 'text'
              placeholder=" Add Item"
              required
              value={newItem}
              onChange = {(e) =>setNewItem(e.target.value)} 
           />
           <button
            type="submit"
             aria-label="Add Item"
           />
           
        </form>
    );
}

export default AddItem;