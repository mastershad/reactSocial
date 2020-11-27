import React from 'react' ;
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    
    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);    
    let massagesElements = state.messages.map( m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = ()=> {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e)=> {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    { dialogsElement }
                </div>                
                <div className={styles.messagesData}>
                    <div>{ massagesElements }</div>
                    <div>
                        <div><textarea value={newMessageBody}
                                    onChange={onNewMessageChange}
                                    placeholder='Enter your message'></textarea></div>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;