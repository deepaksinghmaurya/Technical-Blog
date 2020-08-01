import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd'
const navLinks = [
    {
        title: 'Home',
        path: '/home'
    },
    {
        title: 'blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

export default function Navigation() {
    return (
        <nav className="site-navigation">
            <span className="menu-title">My-App</span>
            <div className="menu-content-container">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}> {link.title} </Link>

                        </li>
                    ))}
                </ul>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />

            </div>

        </nav >)
}