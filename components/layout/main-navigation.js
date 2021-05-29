import Link from 'next/link'
import Logo from './logo'

function MainNavigation() {
    return (
        <header>
        <Logo />
        <nav>
            <ul>
                <li><Link href="/posts">Posts</Link></li>
            </ul>
        </nav>
            
        </header>
    )
}

export default MainNavigation
