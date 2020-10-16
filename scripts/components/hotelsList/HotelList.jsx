 import HotelCard from '../hotelCard/HotelCard';

const HotelList = (props) => {

  if(props.hotels.length === 0){
    return(
      <div className="empty-search">
        <h3>Infortunamente ningun hotel coincide con tus parametros de busqueda...</h3>
      </div>
    )
  }
    
  return(
    <div>
      <div className="container">
        <div className="row py-4">
          {props.hotels.map((hotel) => {
            return (
              <HotelCard
                key={hotel.id}
                slug= {hotel.slug} 
                nameHotel= {hotel.name} 
                photo= {hotel.photo} 
                description= {hotel.description} 
                availabilityFrom= {hotel.availabilityFrom}
                availabilityTo= {hotel.availabilityTo} 
                city= {hotel.city} 
                country= {hotel.country} 
                price= {hotel.price}
                rooms= {hotel.rooms}
              />
            )
          })}
        </div>
      </div>
    </div>
  )

}

export default HotelList;
 