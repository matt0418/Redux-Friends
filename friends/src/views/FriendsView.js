import React from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../actions'
import { Friends, CreateFriendForm } from '../components'
import { Spinner } from "reactstrap";
import './FriendsView.css'

class FriendsView extends React.Component {
    // constructor() {
    //     super();
    // }

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        return(
            <div className = 'container'>
                <h1>Friend List</h1>
                {this.props.fetchingFriends ? <Spinner className="spinner" type="grow" style={{ width: '10rem', height: '10rem' }}/> : <Friends friends={this.props.friends}/>}
                <CreateFriendForm />
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


