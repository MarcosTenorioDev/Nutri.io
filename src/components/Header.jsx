import food from '../assets/images/food.png';
import '../assets/css/Header.css'

const Header = () =>{

    return (
        <header className='headerContainer'>
            <div className="titleContainer">   
                <h1 id='title'>Faça sua dieta completa em menos de 3 minutos!</h1>
                <h2 id='subtitle'>Sua dieta, da forma personalizada com a sua cara!</h2>
            </div>
            <div className="imgContainter">
                <img src={food} alt="" className='headerImg'/>
            </div>
            
        
        </header>
    )
}

export default Header