import React from 'react'

function RentalCard({rental}) {
  return (
    <div>
      <div className='card bmw-card'>
        <img className='card-img-top' src={rental.image} alt={rental.title} />
        <div className='card-body'>
          {/* <h6 className='card-subtitle mb-0 text-muted'> */}
          <h6 className={`card-subtitle mb-0 type-${rental.category}`}>
            {rental.shared ? 'Shared' : 'Whole'} {rental.category} &#183;
            {rental.city}
          </h6>
          <h5 className='card-title big-font'>{rental.title}</h5>
          <p className='card-text'>
            ${rental.dailyPrice} per-Night &#183;Free Cancelation
          </p>
        </div>
      </div>
    </div>
  );
}

export default RentalCard


/*
kalau kita mau ubah warna warni masukan jadikan sbagai class
varibale di css cara speti diatas saya mau category apartementnya 
karena text-muted overwrite maka kita ilangkan saja textmudenya
kit abuat class type-${}

className = {`element $variabble`} <----ini wajib dibacktic
jik ada element yg gunakan variable atau kita buat smacam variable 
utk utak atik cssnya jadi dynamis maka wajib hukumnua di back-tic `
kita ambil variable state renta.category  yaitu ada 3 
condo ,apartement,house 
kita buat class di html baru yatiu type-rental.category karn bntuknya 
varibel kita jadikan text literal varibale  type-${rental.category}
nah kita buat perbedaan setting awarna jika 
condo = warna hijau 
house = warna biru 
apartement = jinga

di css rentalhouse kita ubah 
*/