import React, { Component, Fragment } from 'react';
import RentalCard from '../components/rental/RentalCard'
export class RentalHome extends Component {
  constructor() {
    super();
    this.state = {
      rentals: [
        {
          _id: '1',
          title: 'Nice view on ocean',
          city: 'San Francisco',
          category: 'condo',
          image: 'http://via.placeholder.com/350x250',
          numOfRooms: 4,
          shared: true,
          description: 'Very nice apartment in center of the city.',
          dailyPrice: 43,
        },
        {
          _id: '2',
          title: 'Modern apartment in center',
          city: 'New York',
          category: 'apartment',
          image: 'http://via.placeholder.com/350x250',
          numOfRooms: 1,
          shared: false,
          description: 'Very nice apartment in center of the city.',
          dailyPrice: 11,
        },
        {
          _id: '3',
          title: 'Old house in nature',
          city: 'Bratislava',
          category: 'house',
          image: 'http://via.placeholder.com/350x250',
          numOfRooms: 5,
          shared: true,
          description: 'Very nice apartment in center of the city.',
          dailyPrice: 23,
        },
      ],
    };
  }
  //buat functional render rental

  renderRentals(rentals) {
    //hrus return supaya bisa dirender/ditampilkan pada render() {}
    //debugger
    const newRentals = rentals.map((rental) => {
      //rental jadi props di RentalCard component
      return (
        <div key={rental._id} className='col-md-3'>
           <RentalCard rental={rental}/>
        </div>
      );
    });
    return newRentals;
  }

  //ditampilkan di data di render
  render() {
    const { rentals } = this.state;
    return (
      <Fragment>
        <div className='card-list'>
          <div className='container'>
            <h1 className='page-title'>Your Home All Arround The World</h1>
            <div className='row '>{this.renderRentals(rentals)}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RentalHome;

/*
catatan kalkau bikin map dikalang banyak element maka 
cari yg paling top element  yg utk ditaruh utk id keynya 
jadi intinya dari tag yg paling top atau atas
contoh diatas 
rentals,map((rental)=> {
    <div key={rental._id}>
        <div>
           <div>
           </div>

        </div>
    
    </div>
})
utk yg share bsa di irtenary kalau true brarti share kalau tidak whole 
 {rental.shared?'Shared:'Whole'}
*/

/*

rental.map nanti akan kita pisahkan dan akan kita buat komponen sndiri
kita passing dari sini lewat props
nanti ini kita pisahkan  dan 

*/

/*
buat functional render diuar render(rental ) {}  <--dengan passing parameter rental
kmduian taruh rental map disana st


*/
