import Navbar from "../components/Navbar";
import GenerateDiet from "../components/GenerateDiet";
import '../assets/css/global.css'
import Header from '../components/Header'
import Banner from "../components/Banner";
import Table from "../components/Table"


const Home = () => {



  return (
    <div className="homePage">
      <Navbar />

      <div className="contentHeader">  
        <Header />
        <GenerateDiet />
      </div>
      <Banner />
      <Table />
      
    </div>
  );
}

export default Home;
