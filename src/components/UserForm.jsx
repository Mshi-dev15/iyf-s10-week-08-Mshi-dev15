import {useState} from 'react';

function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const[age, setAge] =useState(0);

    return (
        <div>
            <h3>User Form</h3>
        <div>
        <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
        />
        <p>Name: {name}</p>
        </div>
        <div>
            <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        />
        <p>Email: {email}</p>

        </div>
        <div>
            <input
            type="number"
        value={age}
        onChange={(e)=> setAge(Number(e.target.value))}
        placeholder='Age'
        />
        <p>Age: {age}</p>
        </div>

        </div>
    );
}
export default UserForm;