import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo2.png';
import './Menu.css';
import Button from '../Button';

function Menu () {
    // as = {Link} -> está sendo realizado uma interpolação
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="Logo CBDevFlix" />
            </Link>
            <Button as= {Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;