import '../assets/css/Banner.css'
import runner from '../assets/images/runner.png'
import avocado from '../assets/images/avocado.jpg'
import fruits from '../assets/images/fruits.jpg'


const Banner = () =>{
    return(
        <div id='banner'>
            <div className='bannerContent'>
                <div className='contentImgDescription'>  
                    <img src={runner} alt=""  className='bannerImg'/>
                    <p className='bannerDescription'>Monitore os seus hábitos</p>
                </div>
                
                <div className='contentImgDescription'>
                    <img src={avocado}alt="" className='bannerImg'/>
                    <p className='bannerDescription'>Adapte a dieta a sua realiade</p>
                </div>
                
                <div className='contentImgDescription'>
                    <img src={fruits} alt="" className='bannerImg'/>
                    <p className='bannerDescription'>Veja diversas receitas para sua dieta</p>
                </div>
                
            </div>
        </div>
        
    )
}

export default Banner;