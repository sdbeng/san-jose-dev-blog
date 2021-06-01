import classes from './post-content.module.css'
import PostHeader from './post-header'
import ReactMarkdown from 'react-markdown'

const DUMMY_POST = {
    slug:'hello-devs', title:'hello devs', image:'coding-event-mesm.jpg', content:'# I will write markdown here later ', date:'2021-05-29',
}

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent
