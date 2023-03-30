import img1 from "../../assets/imgs/catcuidados1.png"
import "../../assets/css/MenuD3.css";

function MenuD3() {
    return ( 
        <>
            <h2 className="menu-div-tres__h2">Te damos los mejores cuidados para tu ganado y tus cultivos</h2>
            <div className="menu-div-tres">
                <div className="menu-div-tres-div">
                    <div className="menu-div-tres-div__contenedor">
                        <div className="menu-div-tres__img">
                            <img src={img1}/>
                        </div>
                        <div className="menu-div-tres__items">
                            <div className="menu-div-tres__items-div">
                                <div className="menu-div-tres__items-desc">
                                    <h4>Vigile constantemente su cultivo ya que es fundamental para determinar un crecimiento adecuado dentro del cultivo. Desde propiciar las condiciones óptimas de germinación.</h4>
                                </div>
                                <div className="menu-div-tres__items-btn">
                                    <button>Ver mas</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="menu-div-tres-div">
                    <div className="menu-div-tres-div__contenedor">
                        <div className="menu-div-tres__img">
                            <img src={img1}/>
                        </div>
                        <div className="menu-div-tres__items">
                            <div className="menu-div-tres__items-div">
                                <div className="menu-div-tres__items-desc">
                                    <h4>Vigile constantemente su cultivo ya que es fundamental para determinar un crecimiento adecuado dentro del cultivo. Desde propiciar las condiciones óptimas de germinación.</h4>
                                </div>
                                <div className="menu-div-tres__items-btn">
                                    <button>Ver mas</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
     );
}

export default MenuD3;