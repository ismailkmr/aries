import React, {useState,setState} from 'react';
function RegistrationForm() {
    const [users, setUsers] = useState([])
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "name"){
            setName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    const handleSubmit  = () => {
        users.push({name:name,email:email,password:password});
        localStorage.setItem('users', JSON.stringify(users));
        console.log(users)
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="name">
                    <label className="form__label label-element" for="Name">Name </label>
                    <input  type="text" name="" id="name" value={name}  className="form__input input-element" onChange = {(e) => handleInputChange(e)} placeholder="Name"/>
                </div>
                <div className="email">
                    <label className="form__label label-element" for="email">Email </label>
                    <input  type="email" id="email" className="form__input input-element" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label label-element" for="password">Password </label>
                    <input className="form__input input-element" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>                
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm