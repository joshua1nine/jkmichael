import Image from 'next/image';
import { useState } from 'react';
import Header from '../components/Header';
import Page from '../components/Page';
import Card from '../components/Card';
import { Terminal } from '../components/Terminal';

const Home = () => {
	return (
		<Page>
			<Header />
			<div className='container p-4 min-h-screen'>
				<main>
					<section>
						<h3 className='text-orange text-xl'>Hello, my name is</h3>
						<h2 className='text-5xl font-bold'>Joshua Michael</h2>
						<p className='leading-8 py-2'>
							I am a{' '}
							<span className='relative h-5 p-0'>
								<span className='py-[2px] px-1 rounded-sm bg-orange mx-[2px]'>
									full stack
								</span>
							</span>{' '}
							developer. I{' '}
							<span className='py-[2px] px-1 rounded-sm bg-orange mx-[2px]'>
								design
							</span>{' '}
							and develop intuitive user experiences for the{' '}
							<span className='py-[2px] px-1 rounded-sm bg-orange mx-[2px]'>
								web
							</span>
							.
						</p>
						<a href='#work'>Check out my work</a>
					</section>
					<section id='about'>
						<div>
							<h2>Who am I?</h2>
							<p>
								Hey there! My name is Joshua Michael and I love the creative and
								technical world of Web Development. I started developing like
								many do with WordPress. Quickly I became intrigued with
								JavaScript and JAM Stack applications. After creating a few
								headless WordPress sites with Next.js I was hooked on developing
								front-end user experiences in React. I have recently made my way
								into learning basic back-end development with Node.js and
								Sanity.io.
							</p>
						</div>
						<Image
							className='rounded-lg'
							width={450}
							height={450}
							src='/portrait.jpg'
						/>
					</section>
					<section>
						<h2>My Work</h2>
						<div>
							<Card
								image='/balloon-fest_prod-card.jpg'
								title='Firelight Balloon Fest'
								description='Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id
								dui posuere blandit. Vivamus suscipit tortor eget felis
								porttitor volutpat. Donec rutrum congue leo eget malesuada.'
								tech={[
									{ icon: 'react_logo.svg', title: 'React.js' },
									{ icon: 'next_logo.svg', title: 'Next.js' },
									{ icon: 'vercel_logo.svg', title: 'Vercel' },
									{ icon: 'stripe_logo.png', title: 'Stripe' },
								]}
							/>
							<Card
								image='/firelakegolf_prod-card.jpg'
								title='FireLake Golf'
								description='Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id
								dui posuere blandit. Vivamus suscipit tortor eget felis
								porttitor volutpat. Donec rutrum congue leo eget malesuada.'
								tech={[
									{ icon: 'figma_logo.svg', title: 'Figma' },
									{ icon: 'react_logo.svg', title: 'React.js' },
									{ icon: 'next_logo.svg', title: 'Next.js' },
									{ icon: 'vercel_logo.svg', title: 'Vercel' },
								]}
							/>
							<Card
								image='/cpnhouseofhope_prod-card.jpg'
								title='Firelight Balloon Fest'
								description='Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id
								dui posuere blandit. Vivamus suscipit tortor eget felis
								porttitor volutpat. Donec rutrum congue leo eget malesuada.'
								tech={[
									{ icon: 'figma_logo.svg', title: 'Figma' },
									{ icon: 'react_logo.svg', title: 'React.js' },
									{ icon: 'next_logo.svg', title: 'Next.js' },
									{ icon: 'vercel_logo.svg', title: 'Vercel' },
								]}
							/>
						</div>
					</section>
					<section>
						<h2>Contact</h2>
					</section>
				</main>
			</div>
		</Page>
	);
};
export default Home;
