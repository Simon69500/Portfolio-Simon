import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';  // Import du ThemeProvider et createTheme

import BurgerMenu from './MenuBurger/BurgerMenu';
import { Icones } from "../Component/Icons/Icones";
import '../SCSS/Header.scss';
import '../SCSS/theme-light.scss';

const Header = () => {
    const [value, setValue] = React.useState('one');
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Créer le thème personnalisé
    const theme = createTheme({
        components: {
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        backgroundColor: '#F3F3F3', // Couleur de l'indicateur
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        color: '#9F9F9F', // Couleur des tabs non sélectionnés
                        fontSize: 'medium',
                        fontWeight: '600',
                        '&.Mui-selected': {
                            color: '#F3F3F3', // Couleur des tabs sélectionnés
                        },
                    },
                },
            },
        },
    });

    return (
        <>
            <div className="header">
                <Stack direction="row" spacing={2} className="icon-header">
                    <Avatar src={Icones.profil} alt="Simon Badin" sx={{ width: 56, height: 56 }} />
                </Stack>

                <Box className="box-menu">
                    {/* Envelopper les Tabs avec ThemeProvider */}
                    <ThemeProvider theme={theme}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="menu navigation"
                        >
                            <Tab value="one" label="Accueil" href="#main" />
                            <Tab value="two" label="A Propos" href="#about" />
                            <Tab value="three" label="Mes Compétences" href="#Competences" />
                            <Tab value="four" label="Mon Portfolio" href="#Portfolio" />
                            <Tab value="five" label="Me Contacter" href="#Contact" />
                        </Tabs>
                    </ThemeProvider>
                </Box>

                <div className="burger-menu">
                    <BurgerMenu />
                </div>
            </div>
        </>
    );
};

export default Header;
