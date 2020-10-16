class NavFilter extends React.Component {

    constructor(props){
        super(props)
        this.state={
            /* selectedPriceType:'', 
            selectedSizeType:'',
            selectedCountry:'', 
            hotels: props.hotels   */       
        }
        /* this.handlerFilterPrice=this.handlerFilterPrice.bind(this);
        this.handlerFilterSize=this.handlerFilterSize.bind(this);
        this.handlerFilterCountry=this.handlerFilterCountry.bind(this); */
        /* this.handlerEventFilterSelected=this.handlerEventFilterSelected.bind(this); */
        /* this.filterHotels=this.filterHotels.bind(this) */
        
    
    };

    

    

    /* handlerFilterPrice(e){
        //console.log(e) 
        this.setState({selectedPriceType:e.target.value})
    }

    handlerFilterSize(e){
        this.setState({selectedSizeType:e.target.value})
    }

    handlerFilterCountry(e){
        this.setState({selectedCountry:e.target.value})
    } */

 /*    handlerEventFilterSelected({name, value}){
        this.setState(()=>{
            return {[name]:value}
        },
        this.filterHotels) )
    } */

    /* filterHotels(){
        console.log('Hello Camilo, haces desarrollos web muy buenos, eres exitoso');
        console.log(this.state.hotels)

        let tempHotels=[...this.state.hotels]
        console.log(tempHotels)
        if (this.state.selectedPriceType !== 'Cualquier precio'){
            console.log(this.state.selectedPriceType);
            tempHotels=tempHotels.filter((hotel)=>{console.log(hotel.price);hotel.price===this.state.selectedPriceType})
            
        }

        console.log(tempHotels)


        this.setState({
            hotels: tempHotels
        });

        console.log(this.state.hotels)



    }
 */


    render() {

         const handlerEventFilter = this.props.handlerStateHeader;

        //console.log(this.state.selectedPriceType);

        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#0058B7'}}>

                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                    
                        <ul className="navbar-nav ml-auto mr-auto">
                            
                            <RenderCheckin />
                            <RenderCheckout />
                            <RenderFilterCountry handlerFilterC={handlerEventFilter} />
                            <RenderFilterPrice handlerFilterP={handlerEventFilter} /> 
                            <RenderFilterSize handlerFilterS={handlerEventFilter} />   
                            {/* <RenderFilterCountry handlerFilterC={this.handlerFilterCountry} />
                            <RenderFilterPrice handlerFilterP={this.handlerFilterPrice} /> 
                            <RenderFilterSize handlerFilterS={this.handlerFilterSize} />         
 */}
                        </ul>
                    </div>

                </nav>                
            </div>
        )
    }
}

function RenderCheckin(){
    return(
        <li className="nav-item px-1 py-2">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-sign-in"></i></span>
                </div>
                <input type="date" class="form-control" min="2020-01-01" max="2021-12-31"/>
            </div>
        </li>
    )   

}

function RenderCheckout(){
    return(
        <li className="nav-item px-1 py-2">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-sign-out"></i></span>
                </div>
                <input type="date" class="form-control" min="2020-01-01" max="2021-12-31"/>
            </div>
        </li>
    )
}

class RenderFilterCountry extends React.Component{
    render(){

        return(

            <li className="nav-item px-1 py-2">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="inputGroupSelect03"><i className="fa fa-map-marker"></i></label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect03" name="selectedCountry" onChange={event=>this.props.handlerFilterC(event.target)}/* onChange={this.props.handlerFilterC} */>
                        <option selected>Todos los países</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Chile">Chile</option>
                        <option value="Uruguay">Uruguay</option>
                    </select>
                </div>
            </li>
    
        )

    }
    
}

class RenderFilterSize extends React.Component{
    render(){
        return(
        
            <li className="nav-item px-1 py-2">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="inputGroupSelect01"><i className="fa fa-bed"></i></label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" name="selectedSizeType" onChange={event=>this.props.handlerFilterS(event.target)}/* onChange={this.props.handlerFilterS} */>
                        <option selected>Cualquier tamaño</option>
                        <option value="1">Grande</option>
                        <option value="2">Mediano</option>
                        <option value="3">Pequeño</option>
                    </select>
                </div>
            </li>
    
        )

    }

    
    
};

class RenderFilterPrice extends React.Component{

    /* constructor(){
        super()
        this.state={
          selectedPriceType:''
        }

        this.eventFilterPrice=this.eventFilterPrice.bind(this)
    }

     eventFilterPrice (e) {
        this.setState({selectedPriceType:e.target.value})
    } 
 */
    render(){

        return( 
        
            <li className="nav-item px-1 py-2">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="inputGroupSelect02"><i class="fa fa-usd"></i></label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" name="selectedPriceType" onChange={event=>this.props.handlerFilterP(event.target)}/* onChange={this.props.handlerFilterP} *//* onChange={function(e){this.setState({selectedPriceType:e.target.value})}} */>
                        <option selected>Cualquier precio</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>
                </div>
            </li>
    
        )

    }

    
};

/* renderSelectedPrice(selectedPriceType){
    {console.log(selectedPriceType)}
};
   */

export default NavFilter