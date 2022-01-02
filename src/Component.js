import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderFood  } from './slice.js';



function CustomerCard() {
const [orders, setOrders] = useState();

// Using useSelector hook we obtain the redux store value
const food = useSelector((state) => state.customers.food);

const dispatch = useDispatch();
//  show all data 
console.log(food)

// Using the useDispatch hook to send payload back to redux




const addOrder = () => {
	setOrders({
		'name':'abhijeet',
		'sunil kumar ': 'abhijeet kumar '
	})

    
    
    
    
   
	dispatch(orderFood(orders))
}

return (
	<div>
	<div className="customer-food-card-container">
		<p></p>

		<div className="customer-foods-container">
		{/* {food.map((foo) => (
			<div className="customer-food">{foo}</div>
		))} */}

		<div className="customer-food-input-container">
			{/* <input value={orders} onChange={(event) =>
			setOrders(event.target.value)} /> */}

			<button onClick={addOrder}>Add</button>
		</div>
		</div>
	</div>
	</div>
);
}

export default CustomerCard;
