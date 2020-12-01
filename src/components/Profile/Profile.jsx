import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return <div className={styles.Profile}>
        <ProfileInfo />
        <MyPostsContainer />     
      </div>
}

export default Profile;