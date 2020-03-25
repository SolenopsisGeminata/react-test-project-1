const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id:1, isFollowed: false, avatar: "", firstName:"First name", lastName: "Last name", status: "I'm a boss", country: "Russia", city: "Moscow"},
        {id:2, isFollowed: false, avatar: "", firstName:"First name", lastName: "Last name", status: "I'm a boss", country: "Russia", city: "Moscow"},
        {id:3, isFollowed: true, avatar: "", firstName:"First name", lastName: "Last name", status: "I'm a boss", country: "Russia", city: "Moscow"},
        {id:4, isFollowed: true, avatar: "", firstName:"First name", lastName: "Last name", status: "I'm a boss", country: "Russia", city: "Moscow"},
        {id:5, isFollowed: true, avatar: "", firstName:"First name", lastName: "Last name", status: "I'm a boss", country: "Russia", city: "Moscow"},
        {id:6, isFollowed: false, avatar: "", firstName:"First name", lastName: "Last name", status: "I'm a boss", country: "Russia", city: "Moscow"},
    ],
};

const usersReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    const _follow = (userID) => {
        stateCopy.users = state.users.map(u => {
            if (u.id === userID) {
                return {...u, isFollowed: true}
            }
            return u;
        });
    };
    
    const _unfollow = (userID) => {
        stateCopy.users = state.users.map(u => {
            if (u.id === userID) {
                return {...u, isFollowed: false}
            }
            return u;
        });
    };

    const _setUsers = (users) => {
        stateCopy.users = [...state.users, ...users];
    }

    switch (action.type) {
        case FOLLOW:
            _follow(action.userID);
            return stateCopy;
        case UNFOLLOW:
            _unfollow(action.userID);
            return stateCopy;
        case SET_USERS:
            _setUsers(action.users);
            return stateCopy;
        default:
            return state;
    }
}

export const followActionCreator = (userID) => ({
    type: FOLLOW,
    userID: userID,
  });

export const unfollowActionCreator = (userID) => ({
    type: UNFOLLOW,
    userID: userID,
});

export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    users: users,
});

export default usersReducer;