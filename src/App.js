import React, {useState} from 'react';
import UserTable from './components/UserTable';
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {

  const userData = [
    {id: uuidv4(), name: 'MiNombreUno', username: 'prueba uno'},
    {id: uuidv4(), name: 'MiNombreDos', username: 'prueba dos'},
    {id: uuidv4(), name: 'MiNombreTres', username: 'prueba tres'},
  ]

  //state
  const [users, setUsers] = useState(userData);

  //Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar Usuarios
  const deleteUser = (id) => {
    //console.log(id);
    setUsers(users.filter(user => user.id !== id));
  }

  //Editar Usuario
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App con Hook</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Editar Usuario</h2>
                <EditUserForm 
                currentUser={currentUser}
                updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Agregar Usuario:</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }
          

        </div>
        <div className="flex-large">
          <h2>Ver Usuarios:</h2>
          <UserTable 
          users={users} 
          deleteUser={deleteUser} 
          editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
