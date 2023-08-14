import React from 'react';
import { Link } from 'react-router-dom';


const data = [
    { club: "Fleet Feet - Ballard", location: "5404 22nd Ave NW, Seattle, WA 98107", time: "Tuesdays @ 6PM" },
    { club: "Fleet Feet - Capitol Hill", location: "911 E Pine St, Seattle, WA 98122", time: "Tuesdays @ 6PM" },
    { club: "Frelard", location: <Link to={"https://www.instagram.com/frelardrunclub"}>Frelard Instragram</Link>, time: "Thursdays @ 6:30PM" },
]

const RunClubs = () => {
	return (
		<div>
			<table>
				<tr>
					<th>Club Name</th>
					<th>Meeting Location</th>
					<th>Time</th>
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td>{val.club}</td>
							<td>{val.location}</td>
							<td>{val.time}</td>
						</tr>
					)
				})}
			</table>
		</div>
	);
};

export default RunClubs;