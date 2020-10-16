import NavFilter from '../navFilter/NavFilter'

function Header(props){


    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="py-4 border-bottom">
              <h1 className="text-center" style={{color: '#408080'}}> RESERVA DE HOTELES </h1>
              <NavFilter hotels={props.hotels} handlerStateHeader={props.handlerState}/>
            </div>
          </div>
        </div>
      </div>
    )  
  }

  export default Header; 