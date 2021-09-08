import React, {useState} from 'react'; 


export default function DeleteUser(props){
   
    const [deleteId, setdeleteId] = useState('');
    
    const handleDeleteButtonClick = e => {
        e.preventDefault();
        props.deleteUser(deleteId)
    
    }

    return (
    <div>
    <h3>Delete User</h3>
    <form id="delete-user" action="#" onSubmit={handleDeleteButtonClick}>
        <fieldset>
        <label>User ID</label>
        <input type="text" id="delete-user-id" value={deleteId} onChange={(e) => setdeleteId(e.target.value)}/>
        </fieldset>
        <input type="submit" />
    </form>
    </div>  
    ) 
} 

