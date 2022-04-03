import Image from 'next/image';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from '../components/Header';
import Page from '../components/Page';
import Card from '../components/Card';

const Home = () => {
	return (
		<Page>
			<Header />
			<div className='container p-4 min-h-screen'>
				<main>
					<img
						src='webguy-logo.svg'
						className='absolute opacity-5 top-0 -right-1/2 max-w-[1200px] w-[500px] h-auto'
					/>
					<section className='mt-8 mb-28'>
						<h3 className='text-orange text-xl'>Hello, my name is</h3>
						<h2 className='text-6xl font-bold'>Joshua Michael</h2>
						<p className='py-2 mb-2'>
							I am a <span className='text-orange'>full stack</span> developer.
							I <span className='text-orange'>design</span> and develop
							intuitive user experiences for the{' '}
							<span className='text-orange'>web</span>.
						</p>
						<a className='btn' href='#work'>
							Check out my work
						</a>
					</section>
					<section id='about' className='mb-28'>
						<div>
							<h2 className='mb-4'>Who am I?</h2>
							<p className='mb-4'>
								Hey there! My name is Joshua Michael and I love the creative and
								technical world of Web Development. I started developing like
								many do with WordPress. Quickly I became intrigued with
								JavaScript and JAM Stack applications. After creating a few
								headless WordPress sites with Next.js I was hooked on developing
								front-end user experiences in React. I have recently made my way
								into learning basic back-end development with Node.js and
								Sanity.io.
							</p>
							<div className='flex flex-wrap mb-4'>
								<img
									src='/icons/html_logo.svg'
									alt=''
									className='h-10 mr-5 mb-3'
									title='html'
								/>
								<img
									src='/icons/css_logo.svg'
									alt=''
									className='h-10 mr-5 mb-3'
									title='css'
								/>
								<img
									src='/icons/javascript-logo-svgrepo-com.svg'
									alt=''
									className='h-10 mr-5 mb-3'
									title='css'
								/>
								<img
									src='/icons/react_logo.svg'
									alt=''
									className='h-10 mr-5 mb-3'
									title='react'
								/>
								<img
									src='/icons/figma_logo.svg'
									alt=''
									className='h-10 mr-5 mb-3'
									title='figma'
								/>
								<img
									src='/icons/next_logo.svg'
									alt=''
									className='h-10 mr-5 mb-3'
									title='next.js'
								/>
								<img
									src='/icons/node-svgrepo-com.svg'
									alt=''
									className='h-10 mr-5 mb-3'
									title='node.js'
								/>
								<img
									src='/icons/sanity_logo.svg'
									alt=''
									className='h-10 mr-5 mb-3'
									title='sanity'
								/>
								<img
									src='/icons/vercel_logo.svg'
									alt=''
									className='h-10 mr-5 mb-3'
									title='vercel'
								/>
							</div>
						</div>
						<Image
							className='rounded-lg'
							width={450}
							height={450}
							src='/portrait.jpg'
						/>
					</section>
					<section id='work'>
						<h2 className='mb-4'>My Work</h2>
						<div>
							<Card
								image='/balloon-fest_prod-card.jpg'
								title='Firelight Balloon Fest'
								description='Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id
								dui posuere blandit. Vivamus suscipit tortor eget felis
								porttitor volutpat. Donec rutrum congue leo eget malesuada.'
								tech={[
									{ icon: '/icons/react_logo.svg', title: 'React.js' },
									{ icon: '/icons/next_logo.svg', title: 'Next.js' },
									{ icon: '/icons/vercel_logo.svg', title: 'Vercel' },
									{ icon: '/icons/stripe_logo.svg', title: 'Stripe' },
								]}
							/>
							<Card
								image='/firelakegolf_prod-card.jpg'
								title='FireLake Golf'
								description='Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id
								dui posuere blandit. Vivamus suscipit tortor eget felis
								porttitor volutpat. Donec rutrum congue leo eget malesuada.'
								tech={[
									{ icon: '/icons/figma_logo.svg', title: 'Figma' },
									{ icon: '/icons/react_logo.svg', title: 'React.js' },
									{ icon: '/icons/next_logo.svg', title: 'Next.js' },
									{ icon: '/icons/vercel_logo.svg', title: 'Vercel' },
								]}
							/>
							<Card
								image='/cpnhouseofhope_prod-card.jpg'
								title='Firelight Balloon Fest'
								description='Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id
								dui posuere blandit. Vivamus suscipit tortor eget felis
								porttitor volutpat. Donec rutrum congue leo eget malesuada.'
								tech={[
									{ icon: '/icons/figma_logo.svg', title: 'Figma' },
									{ icon: '/icons/react_logo.svg', title: 'React.js' },
									{ icon: '/icons/next_logo.svg', title: 'Next.js' },
									{ icon: '/icons/vercel_logo.svg', title: 'Vercel' },
								]}
							/>
						</div>
					</section>
					<section>
						<h2>Contact</h2>
						<div className='flex items-center' id='email'>
							<FaEnvelope className='text-green' size={40} />{' '}
							joshua.kale.michael@gmail.com
						</div>
						<div className='flex items-center' id='github'>
							<FaGithub className='text-[#F5F5F5]' size={40} /> @joshua1nine
						</div>
						<div className='flex items-center' id='linkedin'>
							<FaLinkedin className='text-[#0077B5]' size={40} /> /in/jkmichael
						</div>
						<a href='#'>What a resume?</a>
					</section>
				</main>
			</div>
		</Page>
	);
};
export default Home;
