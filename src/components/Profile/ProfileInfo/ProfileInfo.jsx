import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return(
      <div className={styles.ProfileInfo}>
        <img className={styles.imgTop} src='https://uploads-ssl.webflow.com/5e96913c9bac7c0b5cb3391c/5f44a7398c0cdf460857e744_img-image-p-1080.jpeg' />
        <div className={styles.descriptionBlock}>
        </div>
      </div>
    )    
}

export default ProfileInfo;