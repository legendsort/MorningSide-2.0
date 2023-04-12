import React from 'react'
import Hero from '../components/Hero'
import Services from '../parts/Services'
import AboutUs from '../parts/AboutUs'
import Team from '../parts/Team'
import Blog from '../parts/Blog'
import Contact from '../parts/Contact'

const LandingPage = () => {
	return (
		<div>
			<Hero />
			<AboutUs />
			<Services />
			<Team />
			<Contact />
		</div>
	)
}

export default LandingPage;