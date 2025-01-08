import Header from "../../components/Header/Header"
import './home.scss'
import ThumbnailGrid from "../../components/ThumbnailGrid/ThumbnailGrid"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"

function Home(){

    return (
    <>    
    <Header />
    <div className="body">
        <Banner text="Chez vous, partout et ailleurs" imgUrl="https://s3-alpha-sig.figma.com/img/4706/e7dd/e270fc8fc902a1eb738458e7b29c1899?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fUjrjeMUyHCooH6hRkUla-d1ZiayS85RC8lx8Z5ecCMFanOg5vDXavmJM~iF2h4YTDhiWdkRU7u3MbMihNzEA0OvfqRH0OMp1vsIK2usXaQJRLS69qitaq19zvAORVC2DOZ~sW9eGDk7VG9r5onbikEcyylVzujJ~RonM2o-w-P0gCuyQCx2FronQr3Oa1ctMeVyWgwUNh5YmBCartaWsOfVHaylD4NFYqlQWdbCSnkS1EjmTGne9galzH~KTudM5Ggbplz-K6fysN-0aufsTHLz49JyaUIhzemp2I54eBGWo57qbAkR~RV0Rz510RCQV31SoRUg5O8o-Zweg~~-0g__"/>
        <ThumbnailGrid />
    </div>  
    <Footer />
    </>
    )
}

export default Home