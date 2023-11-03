import React from 'react';
import './style.css';
import Data from '../../Data';
import { Link } from 'react-router-dom';


const Properies = () => {
    return (
        <div className='ProperiesContainer'>
            <h1>Barcha Mahsulotlar</h1>

            <div className="BoxCards">
                {Data?.map((Value, inx) => {
                    return (
                        <div key={inx} className="Cards">
                            <img width={150} src={Value.img} alt="" />
                            <Link to={`mahsulot/${Value.id}`}>
                                <h3>{Value.name}</h3>
                            </Link>
                            <b>Model: {Value.model}</b>
                            <p>Price: {Value.price}</p>

                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default Properies;
