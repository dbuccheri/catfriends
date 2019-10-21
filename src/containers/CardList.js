import React from 'react';
import Card from './Card';





const CardList = ({cats}) => {


return (

				<div>
					 {

					 	
					 		cats.map(
			(cat,i) => {

			return(
					<Card 
					key={i} 
					id={cat.id} 
					name={cat.name} 
					email={cat.email}
					 />
			);

				}
		)		 }
				</div>	

	);


}


export default CardList;

