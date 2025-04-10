import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PAGE_PATH } from '../constant';
import Accueil from '../pages/Accueil';
import Header from '../components/Header';
import PlainNavbar from '../components/PlainNavbar';
import NavbarCollapsed from '../components/NavbarCollapsed';
import { Container, Typography } from '@mui/joy';

const Router = () => {

    return (
        <BrowserRouter >
            <Header />

            {
                window.innerWidth > 600 ?
                    <PlainNavbar />
                    :
                    <NavbarCollapsed />
            }

            <Container sx={{py : 5}}>
                <Typography></Typography>

                <Routes>
                    <Route path='/*' Component={Accueil} />
                    {
                        PAGE_PATH.map((value, index) => (
                            <Route path={value.path} Component={value.component} key={index} />
                        ))
                    }
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default Router