import Header from "../../components/Header/Header"
import ThumbnailGrid from "../../components/ThumbnailGrid/ThumbnailGrid"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"

function Home(){

    return (
    <>    
    
    <div className="body">
        <Header />
        <Banner text="Chez vous, partout et ailleurs" imgUrl="src/assets/e270fc8fc902a1eb738458e7b29c1899.jpg"/>
        <ThumbnailGrid />
    </div>  
    <Footer />
    </>
    )
}

export default Home