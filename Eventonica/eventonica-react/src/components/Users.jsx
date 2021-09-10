import React, { useState, useEffect } from 'react';
import DeleteUser from './DeleteUser';

export default function Users() {


 
    // empty array argument needed to avoid infinite loop 

    // const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
    // const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
    // const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

    const [users, setUsers] = useState(['m','n','d']);
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [email, setEmail] = useState(null);

    console.log(id)


    const getUsers = () => {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(res => setUsers(res))
    };


    useEffect(() => {
        getUsers(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    
    },[]);


    const clearForm = () => {
        setName('');
        setID('');
        setEmail('')
    }

    const onSubmit = e => {
        e.preventDefault();
        const newUser = { id: id, name: name, email: email };
        setUsers([...users, newUser]);
        clearForm()

       
    };

    const deleteUser = (deleteId) => {
        const newUsers = users.filter(i => i.id !== deleteId)
        setUsers(newUsers)
    };


    return (
        <section className="user-management">
            <h2>Users Management</h2>

            <ul id="users-list">
            {users != null ? users.map((element, i) => { return (<li key={element.id}>Name: {element.name} Email: {element.email}</li>)}):null}
                {/* display all existing Users here */}

                {/* {users.map((element, i) => { return (<li key={element.id}>Name: {element.name} Email: {element.email}</li>) })} */}

            </ul>

            <div>
                <h3>Add User</h3>
                <form id="add-user" action="http://localhost:3000/users" method="POST" onSubmit={onSubmit}>
                    <fieldset>
                        <label>Name</label>
                        <input type="text" id="add-user-name" value={name}
                            onChange={(e) => setName(e.target.value)} id="name"/>
                        <label>ID</label>
                        <input type="integer" id="add-user-id" value={id}
                            onChange={(e) => setID(e.target.value)} id="Id"/>
                        <label>Email</label>
                        <input type="text" id="add-user-email" value={email}
                            onChange={(e) => setEmail(e.target.value)} id="email"/>
                        {/* Add more form fields here */}
                        <input type="submit" value="Add" />
                    </fieldset>
                </form>
                <DeleteUser deleteUser={deleteUser} />
            </div>


        </section>
    )
}
