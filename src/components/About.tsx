import Image from 'next/image';

export const About = () => {
	return (
		<section id='about' className='mb-36 md:mb-56 lg:64'>
			<div>
				<h2 className='mb-8 lg:hidden'>Who am I?</h2>
				<div className='lg:flex lg:flex-row-reverse'>
					<div className='flex justify-center mb-4 lg:block lg:ml-2'>
						<Image
							className='rounded-lg'
							width={400}
							height={400}
							src='/portrait.jpg'
						/>
					</div>
					<article className='lg:flex-1'>
						<h2 className='mb-8 hidden lg:block'>Who am I?</h2>
						<p className='mb-6 leading-7 text-lg max-w-2xl'>
							Hey there! My name is Joshua Michael and I love the creative and
							technical world of Web Development. I started developing like many
							do with WordPress. Quickly I became intrigued with JavaScript and
							JAM Stack applications. After creating a few headless WordPress
							sites with Next.js I was hooked on developing front-end user
							experiences in React. I have recently made my way into learning
							basic back-end development with Node.js and Sanity.io.
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
					</article>
				</div>
			</div>
		</section>
	);
};
