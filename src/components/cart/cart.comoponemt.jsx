import { render } from '@testing-library/react'
import React from 'react'
import "./cart.comopnent.css";
import SingleCard from '../singleCard/SingleCard'

export const Cart = (props) => {
    return <div className='cart '>
    
                <div className='p-0 m-0 row'>

                        {
                        props.users.map( user => 
                            <SingleCard key={user.id} user={user} />  )     
                        }

                </div>
                
            </div>
}