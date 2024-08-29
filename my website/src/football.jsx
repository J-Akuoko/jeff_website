import React, { useEffect, useState } from 'react';
import epl from './assets/images/epl_image.jpg';
import laliga from './assets/images/la_liga_image.webp';
import bundes from './assets/images/bundes_image.jpg';
import { Link } from 'react-router-dom'

export default function Football() {
    const imagesArray = [epl, laliga, bundes];
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setImageIndex(prev_count => ((prev_count + 1) % imagesArray.length))

        }, 5000);
        return () => clearTimeout(timerId)
    })


    return (
        <div>
            <div>
                <img src={imagesArray[imageIndex]} alt="" style={{ width: '100vw', height: '40rem', objectFit: 'centre' }} />
            </div>



            <div className='image_grid'>

                <div className='lewa'>
                    <Link to='/united'> <img src={laliga} alt="" /></Link>
                    <p>Smith and Woke impress for England as Sri Lanka Battle into Lead</p>

                </div>

                <div className='lewa'>
                    <Link to='/united'> <img src={laliga} alt="" /></Link>
                    <p>Robert Lewandowski braces himself up for a new Season</p>

                </div>

                <div className='lewa'>
                    <Link to='/united'> <img src={laliga} alt="" /></Link>
                    <p>Smith and Woke impress for England as Sri Lanka Battle into Lead</p>

                </div>




            </div>

            <div className='image_grid'>

                <div className='lewa'>
                    <Link to='/united'> <img src={laliga} alt="" /></Link>
                    <div className='smith'><p>Smith and Woke impress for England as Sri Lanka Battle into Lead</p> </div>

                </div>

                <div className='lewa'>
                    <Link to='/united'> <img src={laliga} alt="" /></Link>
                    <p>Robert Lewandowski braces himself up for a new Season</p>

                </div>

                <div className='lewa'>
                    <Link to='/united'> <img src={laliga} alt="" /></Link>
                    <p>Smith and Woke impress for England as Sri Lanka Battle into Lead</p>

                </div>




            </div>



        </div>









    );

}

