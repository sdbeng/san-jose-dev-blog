import classes from './post-content.module.css'
import PostHeader from './post-header'

const DUMMY_POST = {
    slug:'hello-devs', title:'hello devs', image:'coding-event-mesm.jpg', content:'# I will write markdown here later ', date:'2021-05-29',
}

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
    return (
        <article>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            {DUMMY_POST.content}
        </article>
    )
}

export default PostContent
