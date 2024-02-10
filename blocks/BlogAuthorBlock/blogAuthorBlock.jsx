import React from 'react'
import BlogAuthorAndReply from '../../components/BlogAuthorAndReply/blogAuthorAndReply'
import BlogReplayForm from '../../components/BlogReplayForm/blogReplayForm'

export default function BlogAuthorBlock() {
    return (
        <div className='container-fluid pb-5'>
            <BlogAuthorAndReply />
            <BlogReplayForm />
        </div>
    )
}
