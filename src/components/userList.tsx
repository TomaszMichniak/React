import { getUsers } from "../requests/userRequest";
import React, { useEffect, useState } from 'react';
 import {User} from "../types/userType"

 export default function UserList({id}:{id :number}){
    
    const[users,setUser]= useState<User[] | null>(null);
    useEffect(()=>{
        (async () => {
            const data =  await getUsers();
            setUser(data);
        })()
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
            <tbody>

        {users ? users.map((user,index) => 
            <tr>
                 <td>{user.id}</td>
                 <td>{user.name}</td>
                 <td>{user.email}</td>
            </tr>
        ) : null}
            </tbody>
        </table>
    </div>
    )
}