import Navbar from "../components/Navbar";
import GenerateDiet from "../components/GenerateDiet";
import '../assets/css/global.css'
import Header from '../components/Header'
import Banner from "../components/Banner";
import Table from "../components/Table"
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer"
import Chat from "../components/Chat"


const Home = () => {



  return (
    <div className="homePage">
      <Navbar />
      <Chat />

      <div className="contentHeader">  
        <Header />
        <GenerateDiet />
      </div>
      <Banner />
      <Table />
      <EmailForm />
      <Footer />

      
    </div>
  );
}

export default Home;
