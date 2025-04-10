import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PAGE_PAGE } from '../constant';
import Accueil from '../pages/Accueil';
import Header from '../components/Header';
import PlainNavbar from '../components/PlainNavbar';
import Footer from '../components/Footer';
import NavbarCollapsed from '../components/NavbarCollapsed';

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

            <Routes>
                <Route path='/*' Component={Accueil} />
                {
                    PAGE_PAGE.map((value, index) => (
                        <Route path={value.path} Component={value.component} key={index} />
                    ))
                }

            </Routes>
        </BrowserRouter>
    )
}

export default Router