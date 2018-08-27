import { LOGIN, REGISTER, NEW_POST, LIKE, DELETE_MESSAGE, GET_MESSAGE_ID, GET_MESSAGES, GET_LOGOUT, GET_USER } from './Types'

const initialState = {
    messages: []
}
export default function (state = initialState, action) {

    switch (action.type) {
        case LOGIN:
            return state;

        case REGISTER:
            return state;

        case NEW_POST:
            break;

        case LIKE:
            break;

        case DELETE_MESSAGE:
            break;

        case GET_MESSAGES:
            return state;

        case GET_MESSAGE_ID:
            return state;

        case GET_LOGOUT:
            return state

        case GET_USER:
            return state

        default:
            return state;
    }
}