import React from 'react';
import {useForm} from 'react-hook-form';

const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        //console.log(data);
        props.addUser(data)
        e.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={
                register({
                    required: {value: true, message: 'Campo Obligatorio'}
                })
            } />
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username" ref={
                register({
                    required: {value: true, message: 'Campo Obligatorio'}
                })
            } />
            <div>
                {errors?.username?.message}
            </div>
            <button>Agregar nuevo usuario</button>
        </form>
     );
}
 
export default AddUserForm;