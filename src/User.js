import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const User = () => {
    const [user, setUser] = useState([])

     useEffect(()=> {
         axios('https://jsonplaceholder.typicode.com/users')
             .then(res=> setUser(res.data))
     },[])

    return (
        <div>
            {
                user.map(item=>
                    <div key={item.id}>

                           <Link to={`/user/${item.id}`}>{item.name}</Link>

                    </div>
                )
            }


        </div>
    );
};

export default User;