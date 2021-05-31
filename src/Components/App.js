import React from 'react'

// Components
import NavBar from './Header/NavBar'
import Slider from './Slider/Carousel'
import InitialMobileProducts from './Products/InitialMobileProducts'
import MoreMobileProducts from './Products/MoreMobileProducts'
import DesktopProducts from './Products/DesktopProducts'
import FAQ from './FAQ/FAQcontainer'
import Footer from './Footer/Footer'
import { BrowserRouter } from 'react-router-dom'



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Slider />
                <InitialMobileProducts />
                <MoreMobileProducts />
                <DesktopProducts />
                <FAQ />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
