import React, {useState} from 'react';

export default function Users() {


    const marlin = { name: "Marlin", email: "marlin@gmail.com", id:"1" };
    const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
    const dory = { name: "Dory", email: "dory@gmail.com" , id: "3"};   

    const [users, setUsers] = useState([marlin, nemo, dory]);
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [email, setEmail] = useState(''); 
    console.log(name,email,id)

    const onSubmit = e => {
        e.preventDefault();
        const newUser = {id: id, name: name, email: email};
        setUsers([...users, newUser]);
      };

return (
    <section className="user-management">
    <h2>Users Management</h2>

    <ul id="users-list">
    {/* display all existing Users here */}
    {users.map((element, i) => { return (<li key={element.id}>Name: {element.name} Email: {element.email}</li>)})}
    </ul>

    <div>
    <h3>Add User</h3>
    <form id="add-user" action="#" onSubmit={onSubmit}>
        <fieldset>
         <label>Name</label>
        <input type="text" id="add-user-name" value={name}
  onChange={(e) => setName(e.target.value)}/>
        <label>ID</label>
        <input type ="integer" id="add-user-id" value={id}
  onChange={(e) => setID(e.target.value)}/> 
        <label>Email</label>
        <input type="text" id="add-user-email" value={email}
  onChange={(e) => setEmail(e.target.value)}/> 
        {/* Add more form fields here */}
        <input type="submit" value="Add" />
        </fieldset>
    </form>
    </div>

    <div>
    <h3>Delete User</h3>
    <form id="delete-user" action="#">
        <fieldset>
        <label>User ID</label>
        <input type="text" id="delete-user-id" />
        </fieldset>
        <input type="submit" />
    </form>
    </div>
    </section>
)
}
