import React from 'react'

const Friends = props => {
    console.log(props)
    return(
        <div>
            {props.friends.map(friend => {
                return (
                <div className ="friend">
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
                )    
            })}
        </div>
    )
}

export default Friends