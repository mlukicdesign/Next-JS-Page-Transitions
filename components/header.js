import Link from 'next/link'

const Header = () => (
    <header>
        <div className='logo'>
            <Link href="/">Cheese</Link>
        </div>
        <div className='header-items'>
            <div className='header-item'>
                <Link href="/">Home</Link>
            </div>
            <div className='header-item'>
                <Link href="/about">About</Link>
            </div>
            <div className='header-item'>
                <Link href="/services">Services</Link>
            </div>
            <div className='header-item'>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    </header>
)

export default Header;