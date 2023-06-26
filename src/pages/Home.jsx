import Navbar from "../components/Navbar";
import GenerateDiet from "../components/GenerateDiet";
 import '../assets/css/global.css'
import Header from '../components/Header'



const Home = () => {



  return (
    <div className="homePage">
      <Navbar />
      <div className="content"> 
        
        <Header />
      </div>
      
      
    </div>
  );
}

export default Home;
