import {useState} from 'react'
import AllPosts from '../../components/posts/all-posts'

const DUMMY_POSTS = [
    {slug:'hello-devs', title:'hello devs', image:'coding-event-mesm.jpg', excerpt:'hello devs time to get coding', date:'2021-05-29' },
    {slug:'wwdc', title:'wwdc', image:'wwdc.jpg', excerpt:'hello devs time to get coding', date:'2021-05-29' },
    {slug:'nextjs', title:'nextjs is on', image:'nextjs.png', excerpt:'lorem ipsum dojpefdjpo fojepfjef jefjpoefpeoj poufpouefqfoup3ojpoj eofu', date:'2021-05-30' },
  ]

function AllPostsPage() {
    return (
        <AllPosts posts={DUMMY_POSTS}/>
    )
}

export default AllPostsPage
