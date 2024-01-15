import React from 'react';

function Schedule() {
	return (
		<div className="panel" id="schedule">
			<div className="panel-container">
				<h1 className="panel-title">Schedule</h1>
				<iframe src={'https://view.monday.com/embed/5856431756-8dec5c38ede4c7f135096e7160baa2f4?r=use1'} width={'100%'} height={'700'} style={{ borderRadius: '10px', border: '0', boxShadow: '5px 5px 56px 0px rgba(0,0,0,0.25)' }}></iframe>;
			</div>
		</div>
	);
}

export default Schedule;
