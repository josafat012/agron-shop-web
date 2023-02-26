import imgRedes from '../../assets/imgs/Group.png';
import lineaIzqFooter from '../../assets/imgs/Line32.png';
import lineaDerFooter from '../../assets/imgs/Line33.png';
import '../../assets/css/Footer.css';

function Footer() {
    return ( 
        <div className='footer-offline'>
            <div>
                <h4>SIGANOS</h4>
            </div>
            <div className="group">
                <img src={lineaIzqFooter} alt="" />
                <img src={imgRedes} alt="" />
                <img src={lineaDerFooter} alt="" />
            </div>

        </div>
     );
}

export default Footer;