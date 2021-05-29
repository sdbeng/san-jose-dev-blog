import classes from './post-item.module.css'
import Link from 'next/link'
import Image from 'next/image'

function PostItem(props) {
    const {title, image, excerpt, date, slug} = props.post

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    //i need to construct the image path here since i get the image props as a filename only
    const imagePath = `/images/posts/${slug}/${image}`
    
    //note: in order to pass my complex html to Link, I must wrap it around w/ an anchor tag!!

    return (
        <li className={classes.post}>
            <Link>
                <a>
                    <div className={classes.image}>
                        <Image src={imagePath} alt={title} width={300} height={200} />
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem
