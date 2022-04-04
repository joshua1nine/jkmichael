import Card from './Card';
export const Work = () => {
	return (
		<section id='work' className='mb-36 md:mb-56 lg:64 scroll-mt-6'>
			<h2 className='mb-12'>My Work</h2>
			<div className='flex flex-col space-y-12 md:flex-row md:flex-wrap md:space-y-0 md:gap-4 md:justify-center'>
				<Card
					image='/balloon-fest_prod-card.jpg'
					title='Firelight Balloon Fest'
					description='Festival info site that included a custom backend for vendor registration and payments portal.'
					link='https://www.firelakeballoonfest.com/'
					roles={['developer']}
					tech={[
						{ icon: '/icons/react_logo.svg', title: 'React.js' },
						{ icon: '/icons/next_logo.svg', title: 'Next.js' },
						{ icon: '/icons/stripe_logo.svg', title: 'Stripe' },
						{ icon: '/icons/sanity_logo.svg', title: 'Sanity' },
						{ icon: '/icons/vercel_logo.svg', title: 'Vercel' },
					]}
				/>
				<Card
					image='/firelakegolf_prod-card.jpg'
					title='FireLake Golf'
					description='Golf course brochure site. Dynamic contact form allows users and to request event space or book a tournament.'
					link='https://www.firelakegolf.com/'
					roles={['developer', 'designer']}
					tech={[
						{ icon: '/icons/figma_logo.svg', title: 'Figma' },
						{ icon: '/icons/react_logo.svg', title: 'React.js' },
						{ icon: '/icons/next_logo.svg', title: 'Next.js' },
						{ icon: '/icons/wordpress-svgrepo-com.svg', title: 'WordPress' },
						{ icon: '/icons/vercel_logo.svg', title: 'Vercel' },
					]}
				/>
				<Card
					image='/cpnhouseofhope_prod-card.jpg'
					title='CPN House of Hope'
					description='CPN House of Hope is a resource rich website that helps victims of abuse find programs and services in their area.'
					link='https://www.cpnhouseofhope.com/'
					roles={['developer', 'designer']}
					tech={[
						{ icon: '/icons/figma_logo.svg', title: 'Figma' },
						{ icon: '/icons/react_logo.svg', title: 'React.js' },
						{ icon: '/icons/next_logo.svg', title: 'Next.js' },
						{ icon: '/icons/wordpress-svgrepo-com.svg', title: 'WordPress' },
						{ icon: '/icons/vercel_logo.svg', title: 'Vercel' },
					]}
				/>
			</div>
		</section>
	);
};
