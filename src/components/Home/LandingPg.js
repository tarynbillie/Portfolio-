import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../Nav/Top/TopNav';
// import Footer from '../Footer/Footer.js';
import '../Home/home.scss';
import '../Nav/Top/topNav.scss';

export default class LandingPage extends Component {
	render () {
		return (
			<div className='home'>
				<section className='hero'>
					<div className='blurb'>
						<div className='blurb__transition-one'>
							<h1>Hello, my name is Taryn Li</h1>
						</div>
						<div className='blurb__transition-two'>
							<h2>I am a Jr. Full Stack Developer from Toronto, Ontario.</h2>
						</div>
						<Link to={'/projects'}>
							<button className='project'>
								<span>Checkout my recent work</span>
							</button>
						</Link>
						<div className='social-media'>
							<a href='https://github.com/tarynbillie' target='_blank' rel='noopener noreferrer'>
								<svg
									width='35px'
									height='35px'
									viewBox='0 0 28 28'
									version='1.1'
									xmlns='http://www.w3.org/2000/svg'
									xlink='http://www.w3.org/1999/xlink'>
									<title>GitHub</title>
									<desc>Please visit my GitHub</desc>
									<path
										d='M14,0 C6.2685,0 0,6.2685 0,14 C0,20.5601667 4.51733333,26.0493333 10.6073333,27.5683333 C10.542,27.3793333 10.5,27.16 10.5,26.8881667 L10.5,24.4953333 C9.93183333,24.4953333 8.97983333,24.4953333 8.74066667,24.4953333 C7.78283333,24.4953333 6.93116667,24.0835 6.51816667,23.3181667 C6.05966667,22.4676667 5.98033333,21.1668333 4.844,20.3711667 C4.50683333,20.1063333 4.7635,19.8041667 5.152,19.845 C5.8695,20.048 6.4645,20.5403333 7.0245,21.2706667 C7.58216667,22.0021667 7.84466667,22.1678333 8.8865,22.1678333 C9.39166667,22.1678333 10.1476667,22.1386667 10.8593333,22.0266667 C11.242,21.0548333 11.9035,20.16 12.712,19.7376667 C8.05,19.2581667 5.82516667,16.9388333 5.82516667,13.79 C5.82516667,12.4343333 6.40266667,11.123 7.38383333,10.0181667 C7.06183333,8.9215 6.657,6.685 7.5075,5.83333333 C9.60516667,5.83333333 10.8733333,7.19366667 11.1778333,7.56116667 C12.2231667,7.203 13.3711667,7 14.5775,7 C15.7861667,7 16.9388333,7.203 17.9865,7.5635 C18.2875,7.19833333 19.5568333,5.83333333 21.6591667,5.83333333 C22.5131667,6.68616667 22.1036667,8.932 21.7781667,10.0263333 C22.7535,11.1288333 23.3275,12.4366667 23.3275,13.79 C23.3275,16.9365 21.1061667,19.2546667 16.4511667,19.7365 C17.7321667,20.405 18.6666667,22.2833333 18.6666667,23.6985 L18.6666667,26.8881667 C18.6666667,27.0095 18.6398333,27.097 18.6258333,27.2008333 C24.0811667,25.2886667 28,20.1086667 28,14 C28,6.2685 21.7315,0 14,0 Z'
										id='Path'
									/>
								</svg>
							</a>
							<a href='https://www.linkedin.com/in/taryn-li/' target='_blank' rel='noopener noreferrer'>
								<svg
									width='34px'
									height='34px'
									viewBox='0 0 28 28'
									version='1.1'
									xmlns='http://www.w3.org/2000/svg'
									xlink='http://www.w3.org/1999/xlink'>
									<title>LinkedIn</title>
									<desc>Please visit my LinkedIn</desc>
									<path
										d='M22.75,0 L5.25,0 C2.35156277,0 0,2.35156277 0,5.25 L0,22.75 C0,25.6484372 2.35156277,28 5.25,28 L22.75,28 C25.6484372,28 28,25.6484372 28,22.75 L28,5.25 C28,2.35156277 25.6484372,0 22.75,0 Z M8.65745246,23.7680294 L4.30769231,23.7680294 L4.28245246,10.7439909 L8.63221154,10.7439909 L8.65745246,23.7680294 Z M6.37319738,9.04026415 L6.34795646,9.04026415 C4.926082,9.04026415 4.00901415,8.06009615 4.00901415,6.84014477 C4.00901415,5.59074492 4.95552938,4.64423077 6.40264477,4.64423077 C7.84976015,4.64423077 8.73737954,5.59074492 8.76682692,6.84014477 C8.76682692,8.06009615 7.84555262,9.04026415 6.37319738,9.04026415 Z M23.738582,23.7680294 L19.3509615,23.7680294 L19.3509615,16.6923077 C19.3509615,14.980168 18.8966346,13.8149038 17.3653846,13.8149038 C16.195914,13.8149038 15.5649038,14.6015628 15.2620192,15.3629808 C15.1484372,15.636418 15.1189909,16.0108178 15.1189909,16.3936295 L15.1189909,23.7680294 L10.7103371,23.7680294 L10.6850962,10.7439909 L15.09375,10.7439909 L15.1189909,12.582332 C15.6826923,11.7115385 16.6207935,10.4789666 18.8671872,10.4789666 C21.6520435,10.4789666 23.7343755,12.2962743 23.7343755,16.2043269 L23.7343755,23.7680294 L23.738582,23.7680294 Z'
										id='Shape'
									/>
								</svg>
							</a>
							<a href='/assets/Taryn Li Resume.pdf' download>
								<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 28 28'>
									<path d='M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z' />
									<path fill='none' d='M0 0h24v24H0z' />
								</svg>
							</a>
						</div>
					</div>
					<div />
				</section>
				<TopNav />
			</div>
		);
	}
}
