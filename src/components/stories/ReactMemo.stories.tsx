import React, {useState} from "react";

export default {
    title: 'React.Memo demo'
}



const NewMessagesCounter = (props: { count:number }) => {
    return <div>{props.count}</div>
}
type UsersType = {
    users:Array<string>
}
const UsersSecret = (props: UsersType) => {
    console.log('USERS')
    return <div>
        {props.users.map((u,i)=><div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter,setCounter]=useState(0)
    const [users,setUsers]=useState(['Mary','Petya','Leto','Joy'])
    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]

        setUsers(newUsers)
    }
    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}