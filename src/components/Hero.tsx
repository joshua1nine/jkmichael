export const Hero = () => {
	return (
		<section className='mt-8 mb-36 md:mt-16 md:mb-56 lg:mt-32 lg:mb-64'>
			<h3 className='text-orange text-xl mb-1'>Hello, my name is</h3>
			<h2 className='text-7xl font-bold mb-2'>Joshua Michael</h2>
			<p className='py-2 mb-4 text-lg max-w-lg md:text-2xl'>
				I am a <span className='text-orange'>front-end</span> web developer. I{' '}
				<span className='text-orange'>design</span> and{' '}
				<span className='text-orange'>develop</span> intuitive user experiences
				for the web.
			</p>
			<a className='btn' href='#work'>
				Check out my work
			</a>
		</section>
	);
};
