import React from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../actions'
import { Friends, CreateFriendForm, UpdateFriendForm } from '../components'

class FriendsView extends React.Component {
    // constructor() {
    //     super();
    // }

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <Friends friends={this.props.friends}/>
                <CreateFriendForm />
                <UpdateFriendForm />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    error: state.friendsReducer.error
})

export default connect(
    mapStateToProps,
    {
        getFriends
    }
)(FriendsView)


