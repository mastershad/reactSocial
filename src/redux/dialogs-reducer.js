
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Congratulation!!!'},
        {id: 3, message: 'You are the best!'},
        {id: 4, message: 'Most vonderful coder'},
        {id: 5, message: 'Loving Dady'},
        {id: 6, message: 'Tender husband'},
        {id: 7, message: 'Smart houseowner'}
    ],
    
    dialogs: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Ioan'},
        {id: 4, name: 'Ian'},
        {id: 5, name: 'Vano'},
        {id: 6, name: 'Iohan'},
        {id: 7, name: 'Navi'} 
    ],

    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
               messages: [...state.messages, {id: 6 , message: body}]
            };
        default:
            return state;
    }    
}


export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
    })  
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
    })
export default dialogsReducer;