import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import Logo192 from "../asset/logo192.png";
import '../SCSS/Header.scss';

const Header = () => {

    return (
        <>
            <div className="header">
                <div className="img">
                <img src={Logo192} alt="logo" className="logo"/>
                </div>
                <Stack direction="row" spacing={3} sx={{padding:'10px', marginRight:'20px'}}>
                    <Button variant="text" href="#main" sx={{border:'0.1px solid', borderColor: '#3358d4'}}>Accueil</Button>
                    <Button variant="text" href="#about" sx={{border:'0.1px solid', borderColor: '#3358d4',}}>Profil</Button>
                    <Button variant="text" href="#Competences" sx={{border:'0.1px solid', borderColor: '#3358d4',}}>Compétences</Button>
                    <Button variant="text" href="#Portfolio" sx={{border:'0.1px solid', borderColor: '#3358d4',}}>Portfolio</Button>
                    <Button variant="text" href="#Contact" sx={{border:'0.1px solid', borderColor: '#3358d4',}}>Contact</Button>
                </Stack>
               

            </div>
        </>
    );
};

export default Header ;