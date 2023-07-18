import '../assets/css/Footer.css'

const Footer = () =>{
    const date = new Date().getFullYear()
    return (
        <footer id="footer">
          <div className="container">
            <p className='footerText'>&copy; {date} NUTRI.IO Todos os direitos reservados.</p>
          </div>
        </footer>
      );
}

export default Footer