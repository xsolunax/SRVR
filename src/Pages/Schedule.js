import React, { useEffect, useState } from 'react';
/* 
	{id: '', date: '', title: ''}
*/

const tournamentSchedule = [
	{ id: '1', date: 'February 12, 2024', title: 'VCT Challengers Open Qualifier 2', time: '4:00 PM '},
	{ id: '2', date: 'February 16, 2024', title: 'SRVR UBCEA x SFUEA x UVicEA Winter WonderLAN', time: '' },
	{ id: '3', date: 'February 18, 2024', title: '1Millisecond Tournament', time: '' },
	{ id: '4', date: 'February 7, 2024', title: '', time: '' },
];

const sortedTournamentList = tournamentSchedule.map((item) => item).sort((a, b) => parseInt(b.id) - parseInt(a.id));

function Schedule() {
	const [schedule, setSchedule] = useState([]);

	useEffect(() => {
		setSchedule(sortedTournamentList);
	}, []);

	return (
		<div className="news-list">
			{schedule.map((scheduleItem) => {
				return (
					<div className="schedule-item" key={scheduleItem.id}>
						
					</div>
				);
			})}
		</div>
	);
}

export default Schedule;
