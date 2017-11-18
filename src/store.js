import { createStore } from 'redux';

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_USER':
            console.log('asd');
            return {
                ...state,
                user: action.user,
                is_user_set: action.is_user_set
            }
        default:
            return state;
    }
};

export default createStore(reducer, { user: '', is_user_set: false });