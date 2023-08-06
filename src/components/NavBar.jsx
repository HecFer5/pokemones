import React, { useEffect } from 'react'
import { Logo, Sol, Luna } from './icons'
import './NavBar.css'
import { useState } from 'react'

const NavBar = () => {

    const [tema, sedtTEma] = useState('claro')
    const handleChange = (e) => sedtTEma(e.target.checked ? 'oscuro' : 'claro')
    useEffect(() => {
        document.body.setAttribute('data-tema', tema)
    }, [tema])
    return (
        <nav>
            <Logo />
            <div className='switch'>
                <Sol />

                <label>
                    <input type="checkbox" className='check-switch' hidden onChange={handleChange} />
                    <span className='slider' ></span>
                </label>
                <Luna />
            </div>
        </nav>
    )
}

export default NavBar