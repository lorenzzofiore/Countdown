import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/img/logo.png'
import './nav.css'

export default function Nav () {
    return (
        <nav className='nav'> 
            <div className="logo">
                <Link className='logo-head' href='./' >
                    <Image src={Logo} width={90}></Image>
                </Link>
            </div>
            <nav>
                <ul className='nav-lista'>
                    <li className='nav-item'>
                        <Link className='nav-link' href="./">Inicio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' href="/nosotros">Nosotros</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' href="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}