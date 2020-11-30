import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! how are you', likesCount: 16},
                {id: 2, message: 'It\'s my first post', likesCount: 33},  
                {id: 3, message: 'It\'s my second post', likesCount: 33},
                {id: 4, message: 'It\'s my third post', likesCount: 33} 
            ],        
            newPostText: 'Enter text'
        },
        
        dialogsPage: {
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
        },
        sideBar:{}
    },

    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },    
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);        
    }
}
  
export default store;
window.store = store;