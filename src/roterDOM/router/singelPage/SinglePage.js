import  React from 'react';
import './style.css'
import { useParams } from 'react-router';
import Data from '../../Data';

const SinglePage = () => {
    const { id } = useParams()


    const result = Data?.filter(i => i.id == id)
    return (
        <div>
            {
                result?.map((Value, inx) => {
                    return (
                        <div key={inx} className="Cards">
                            <img src={Value.img} alt="" />

                            <h3>{Value.name}</h3>

                            <b>Model: {Value.model}</b>
                            <p>Price: {Value.price}</p>

                        </div>
                    )
                })

            }
        </div>
    )
}

export default SinglePage
