import { FETCHING_FRIENDS_START, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_ERROR, ADDING_FRIENDS_START, ADDING_FRIENDS_SUCCESS, ADDING_FRIENDS_ERROR} from '../actions'

const intialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

export const friendsReducer = (state = intialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true
            }

        case FETCHING_FRIENDS_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload
            }
        
        case FETCHING_FRIENDS_ERROR:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        
        case ADDING_FRIENDS_START:
            return {
                ...state,
                savingFriends: true,
            }

        case ADDING_FRIENDS_SUCCESS:
            return {
                ...state,
                savingFriends: false,
            }    
            
        default:
            return state;    
    }
}