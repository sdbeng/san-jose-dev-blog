import {useState} from 'react'
import PostItem from './post-item'


function PostsGrid(props) {
    const {posts} = props
    return (
        <ul>
            {posts.map(post => <PostItem key={post.slug} post={post} />)}
        </ul>
    )
}

export default PostsGrid
