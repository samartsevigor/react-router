import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";


const UserDetails = () => {
    const params = useParams()
   const [user, setUser] = useState({})

    useEffect(()=> {
        axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(({data})=>setUser(data))
    },[])

    return (
        <div>
            {user.name}
            {user.username}
            {user.email}
            {user.address?.street}
            {user.address?.phone}

        </div>
    );
};

export default UserDetails;