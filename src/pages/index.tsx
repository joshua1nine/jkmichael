import Image from 'next/image';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from '../components/Header';
import Page from '../components/Page';
import Card from '../components/Card';
import Link from 'next/link';
import { Hero } from '../components/Hero';

const Home = () => {
	return (
		<Page>
			<Header />
			<div className='container p-4 min-h-screen relative'>
				<main>
					<Hero />
					<section id='about' className='mb-36'>
						<div>
							<h2 className='mb-8'>Who am I?</h2>
							<div className='flex justify-center mb-4'>
								<Image
									className='rounded-lg'
									width={450}
									height={450}
									src='/portrait.jpg'
								/>
							</div>
							<p className='mb-6 leading-7 text-lg'>
								Hey there! My name is Joshua Michael and I love the creative and
								technical world of Web Development. I started developing like
								many do with WordPress. Quickly I became intrigued with
								JavaScript and JAM Stack applications. After creating a few
								headless WordPress sites with Next.js I was hooked on developing
								front-end user experiences in React. I have recently made my way
								into learning basic back-end development with Node.js and
								Sanity.io.
							</p>
							<div className='flex flex-wrap'>
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
					</section>
					<section id='work' className='mb-36 scroll-mt-6'>
						<h2 className='mb-12'>My Work</h2>
						<div className='flex flex-col space-y-12'>
							<Card
								image='/balloon-fest_prod-card.jpg'
								title='Firelight Balloon Fest'
								description='Festival info site that included a custom backend for vendor registration and payments portal.'
								link='https://www.firelakeballoonfest.com/'
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
								description='Golf course brochure site. Dynamic contact form allows users and to request event space or book a tournament.'
								link='https://www.firelakegolf.com/'
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
								description='CPN House of Hope is a resource rich website that helps victims of abuse find programs and services in their area.'
								link='https://www.cpnhouseofhope.com/'
								tech={[
									{ icon: '/icons/figma_logo.svg', title: 'Figma' },
									{ icon: '/icons/react_logo.svg', title: 'React.js' },
									{ icon: '/icons/next_logo.svg', title: 'Next.js' },
									{ icon: '/icons/vercel_logo.svg', title: 'Vercel' },
								]}
							/>
						</div>
					</section>
					<section id='contact' className='mb-40'>
						<h2 className='mb-12 text-center'>Contact</h2>
						<div className='flex flex-col items-center'>
							<Link href='mailto:joshua.kale.michael@gmail.com'>
								<a target='_blank'>
									<div
										className='flex items-center mb-4 hover:text-orange'
										id='email'>
										<FaEnvelope className='text-green mr-2' size={40} />{' '}
										joshua.kale.michael@gmail.com
									</div>
								</a>
							</Link>
							<Link href='https://github.com/joshua1nine'>
								<a target='_blank'>
									<div
										className='flex items-center mb-6 hover:text-orange'
										id='github'>
										<FaGithub className='text-[#F5F5F5] mr-2' size={40} />{' '}
										@joshua1nine
									</div>
								</a>
							</Link>
							<Link href='https://www.linkedin.com/in/jkmichael/'>
								<a target='_blank'>
									<div
										className='flex items-center mb-12 hover:text-orange'
										id='linkedin'>
										<FaLinkedin className='text-[#0077B5] mr-2' size={40} />{' '}
										/in/jkmichael
									</div>
								</a>
							</Link>
							<Link href='https://res.cloudinary.com/bearedweb/image/upload/v1649030743/Resume_-_Joshua_Michael_j0kmku.pdf'>
								<a className='btn'>What a resume?</a>
							</Link>
						</div>
					</section>
				</main>
			</div>
		</Page>
	);
};
export default Home;
