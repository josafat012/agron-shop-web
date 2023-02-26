import img from '../../assets/imgs/imagen2.png';
import '../../assets/css/SectionThreeHome.css';

function SectionThreeHome() {
    return ( 
        <div className="sectionThreeHome">
            <div className='sectionThreeHome-container'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p>Con nosotros te daremos los mejores cuidados para tu ganado y tus cultivos porque si el campo no produce la cuidad no come.</p>
                </div>
            </div>
        </div>
     );
}

export default SectionThreeHome;