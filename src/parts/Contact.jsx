import React from 'react'

const Contact = () => {

	return (
			<div className="container pt-20">
				<div className="flex flex-col items-center">
					<h2 className="text-primary text-6xl md:text-7xl text-center font-bold mb-2 leading-none">Let's Talk</h2>
					<p className="text-gray-500 font-medium my-5">
						Feel free to contact us.
					</p>
					<a href="/contact" className="theme-btn">Contact Us</a>
				</div>
			</div>
	)
}

export default Contact;