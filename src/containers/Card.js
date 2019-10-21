import React from 'react';

const Card = ({id, name, email}) => {
	return (

		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2' >
			<img alt='Cat' src={`https://robohash.org/${email+id}?set=set4&size=150x150`} />
			<h2> {name} </h2>
			<p> {email} </p>
		</div>

	);
}

export default Card;