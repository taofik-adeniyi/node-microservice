import React from 'react'
import { CreatePost } from './CreatePost'
import PostList from './PostList'

export const App = ()=>{
    return <div className="container">
        <h1>Create post for blog</h1>
        <CreatePost />
        <div>
            <h1>PostList</h1>
            <PostList />
        </div>
    </div>
}