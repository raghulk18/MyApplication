import Footer from '../../components/footer/footer';
import HomeBanner from '../../components/home-banner/home-banner';
import './home.scss';

function Home() {
    return ( 
        <div className = "main-container" >
            <HomeBanner/>
            <Footer/>
        </div>
    );
}

export default Home;