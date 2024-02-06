
import AppRouter from './Components/AppRouter';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import './main.scss';

const App = () => {
    return (
    <>
        <Navbar/>
        <AppRouter/>
        <Footer/>
    </>
        )
}

export default App