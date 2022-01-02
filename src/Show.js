

import React from 'react'
import { useDespatch, useSelector } from 'react-redux'

function Show() {


    const food = useSelector((state) => state.customers.food)


    console.info(' thatnis rigth now ', food)
    return (
        <div>




            <h1>abhijeet kumar right now </h1>




        </div>
    )
}

export default Show
