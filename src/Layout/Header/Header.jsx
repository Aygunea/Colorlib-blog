import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, BarsOutlined, CloseOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Dropdown, Space } from 'antd';
import { GoChevronDown } from "react-icons/go";
import './header.css';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const totalItemCount = useSelector(state => state.basket.totalcount)
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Elements
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    T-shirt
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    Underware
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Clothing
                </a>
            ),
        },
        {
            key: '5',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Accessories
                </a>
            ),
        },
        {
            key: '6',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    Shoes
                </a>
            ),
        },
        {
            key: '7',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Briefs
                </a>
            ),
        },
        {
            key: '8',
            label: 'Menu two',
            children: [
                {
                    key: '8-1',
                    label: 'T-shirt',
                },
                {
                    key: '8-2',
                    label: 'Underware',
                },
                {
                    key: '8-3',
                    label: 'Clothing',
                },
                {
                    key: '8-4',
                    label: 'Accessories',
                },
                {
                    key: '8-5',
                    label: 'Shoes',
                },
                {
                    key: '8-6',
                    label: 'Briefs',
                },
            ],
        },
        {
            key: '9',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Menu Three
                </a>
            ),
        },
    ];
    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <ul className="navbar">
                        <Link to="/home">
                            <p className="logo">Product .</p>
                        </Link>
                        <li>
                            <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                                <ul>
                                    <li><NavLink to="/home">New</NavLink></li>
                                    <li>
                                        <NavLink to="/home">
                                            <Space direction="vertical">
                                                <Space wrap>
                                                    <Dropdown
                                                        menu={{
                                                            items,
                                                        }}
                                                        placement="bottom"
                                                    >
                                                        <div style={{ display: "flex", alignItems: "center" }}>
                                                            Men
                                                            <GoChevronDown />
                                                        </div>
                                                    </Dropdown>
                                                </Space>

                                            </Space>
                                        </NavLink>
                                    </li>
                                    <li><NavLink to="/home">Women</NavLink></li>
                                    <li><NavLink to="/home">Accessories</NavLink></li>
                                    <li><NavLink to="/home">Jewelry</NavLink></li>
                                    <li><NavLink to="/home">About</NavLink></li>
                                    <li><NavLink to="/home">Contact</NavLink></li>

                                </ul>
                            </nav>
                        </li>
                        <li>
                            <div className='shopping-area'>
                                <Link><SearchOutlined /></Link>
                                <Link to="/admin"><UserOutlined /></Link>
                                <Link to="/cart">
                                    <ShoppingCartOutlined />
                                    <div className="total-count">
                                        {totalItemCount}
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li className='menu-icon' onClick={menuOpen ? closeMenu : openMenu}>
                            {menuOpen ? <CloseOutlined /> : <BarsOutlined />}
                        </li>
                    </ul>
                </div>
                {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
            </header>

        </>

    );
}

export default Header;
