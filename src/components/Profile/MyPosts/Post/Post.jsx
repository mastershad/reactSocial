import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return <div>
        New post        
          <div className={styles.posts}>
            <div className={styles.item}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlgc3gxFbLAY-b4EpoDLjXyFnY2DwcbpwirA&usqp=CAU' />
              {props.message}
              <div>
                <span>like </span>{props.LikesCount}
              </div>              
            </div>
        </div>
      </div>
}

export default Post;