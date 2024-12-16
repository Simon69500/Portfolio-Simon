import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import BurgerMenu from './MenuBurger/BurgerMenu';


import { Icones } from "../Component/Icons/Icones";
import '../SCSS/Header.scss';
import '../SCSS/theme-light.scss';

const Header = () => {

    const [value, setValue] = React.useState('one');
    

    const handleChange = (event , newValue) =>{
        setValue(newValue);
    };

    return (
        <>
            <div className="header">

                <Stack direction="row" spacing={2} className="icon-header">
                <Avatar src={Icones.profil} alt="Simon Badin" sx={{ width: 56, height: 56}}/>
                </Stack>

                <Box className="box-menu"
                    sx={{
                        width: '100%'
                    }}
                >

                    <Tabs 
                    value={value}
                    onChange={handleChange}
                    aria-label="menu navigation"
                    sx={{color: '#D5E2FF', fontSize:'medium', fontWeight: '600' }}  
                    >
                    
                    <Tab 
                    value="one"
                    label="Accueil" 
                    href="#main"
                    onChange={handleChange}
                    sx={{color: '#D5E2FF', fontSize:'medium', fontWeight: '600'}} 
                    />
                    

                    <Tab  
                    value="two"
                    label="A Propos" 
                    href="#about"
                    onChange={handleChange}
                    sx={{color: '#D5E2FF', fontSize:'medium', fontWeight: '600'}} 
                    />
                    
                    <Tab 
                    value="three"
                    label="Mes Compétences"
                    onChange={handleChange}
                    href="#Competences"
                    sx={{color: '#D5E2FF', fontSize:'medium', fontWeight: '600'}}  
                    />
                    
                    <Tab 
                    value="four"
                    label="Mon Portfolio" 
                    onChange={handleChange}
                    href="#Portfolio"
                    sx={{color: '#D5E2FF', fontSize:'medium', fontWeight: '600'}}  
                    />
                    
                    <Tab 
                    value="five"
                    label="Me Contacter" 
                    onChange={handleChange}
                    href="#Contact"
                    sx={{color: '#D5E2FF', fontSize:'medium', fontWeight: '600'}} 
                    />

                    </Tabs>
                </Box>

                <div className="burger-menu"> 
                    <BurgerMenu />
                </div>

            </div>
        </>
    );
};

export default Header ;