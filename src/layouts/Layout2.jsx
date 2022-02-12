import Header from "components/Header";
import Footer from "components/Footer";

const Layout2 = ({children}) => {
  return (
    <div className='mainContainer footerred'>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout2