import React from 'react'
import { connect } from 'react-redux'
import { addFriend } from '../actions'
import './FriendForm.css'

class CreateFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newFriend: {
                name: '',
                email: '',
                age: ''
            }
        }
    }

    handleChanges = e => {
        this.setState({
            newFriend:{...this.state.newFriend, [e.target.name] : e.target.value}
        })
    }

    addFriend = (e) => {
        // e.preventDefault()
        this.props.addFriend(this.state.newFriend)
        this.setState({
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }


    
    render() {
        return(
            <div>
                <form className="add-friend">
                    <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.newFriend.name}
                    onChange={this.handleChanges}
                    />
                    <input
                    type="number"
                    name="age"
                    placeholder="age"
                    value={this.state.newFriend.age}
                    onChange={this.handleChanges}
                    />
                    <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={this.state.newFriend.email}
                    onChange={this.handleChanges}
                    />
                    <button type="submit" onClick = {this.addFriend}>Add Friend</button>
                </form>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        savingFriends: state.savingFriends,
        friends: state.friends,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {
        addFriend
    }
)(CreateFriendForm)
