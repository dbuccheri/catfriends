import React from 'react';

const Scroll = (figlio) => {
	return (
		<div style={{ overflowY: 'scroll', border:'1px solid black', height: '500px'}}>
			{figlio.children}
		</div>
		);
}

export default Scroll;