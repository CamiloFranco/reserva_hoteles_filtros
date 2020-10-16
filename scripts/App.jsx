import  { hotelsData } from './data.js';
import Header from './components/header/Header';
import HotelList from './components/hotelList/HotelList';

const clonHotelsData = hotelsData;
class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      hotelsData,
      selectedPriceType:'',
      selectedSizeType:'',
      selectedCountry:'' 
    }
    this.handlerEventFilterSelected=this.handlerEventFilterSelected.bind(this);
    this.filterHotels=this.filterHotels.bind(this);
  }

  /*  clonHotelsData = this.state.hotelsData; */

  handlerEventFilterSelected({name, value}){

    this.setState({hotelsData : clonHotelsData});

    this.setState(()=>{
        return {[name]:value}
    } ,
    this.filterHotels )
}

 filterHotels(){
        console.log('Hola01');
       /*  console.log(this.state.hotelsData) */

        let tempHotels=[...this.state.hotelsData]
        
        /* function priceCompare(hotel){
          return this.state.selectedPriceType===hotel.price
        } */
        const priceCompare = (hotel) => {
          /* console.log(hotel.price);
          console.log(this.state.selectedPriceType); */
          let price = String(hotel.price)
          return this.state.selectedPriceType === price
        }

        const countryCompare = (hotel) => {
          console.log(hotel.country);
          console.log(this.state.selectedCountry);
          let country = String(hotel.country) 
          return this.state.selectedCountry === country
        }
        
        if (this.state.selectedPriceType !== 'Cualquier precio'){
            console.log("Hola 26 09 909");
            console.log(tempHotels); 

            tempHotels=tempHotels.filter(priceCompare/* (hotel)=>{console.log(hotel.price);console.log(this.state.selectedPriceType);hotel.price===this.state.selectedPriceType} */)
            console.log(tempHotels);
        } else

        if (this.state.selectedCountry !== 'Todos los países'){
          console.log("Hola 29 09 0857");
          console.log(tempHotels); 

          tempHotels=tempHotels.filter(countryCompare)
          console.log(tempHotels);
      }

        /* console.log(tempHotels) */

        return (this.setState({
            hotelsData: tempHotels
        }))
       /*  console.log(this.state.hotelsData) */

    }

  
  render(){
    
    return ( 
      <React.Fragment>
        <div>
          <Header hotels={this.state.hotelsData} handlerState={this.handlerEventFilterSelected} />
          <HotelList hotels={this.state.hotelsData} />
        </div>
      </React.Fragment>
    )
  }

}

export default App;


