import React from 'react'
import './Friends.css'

const Friends = props => {
    return(
        <div>
            {props.friends.map((friend, id) => {
                return (
                <div className ="friend" key={id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
                )    
            })}
        </div>
    )
}

export default Friends