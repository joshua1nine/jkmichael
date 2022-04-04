import Link from 'next/link';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Contact = () => {
	return (
		<section id='contact' className='mb-36 md:mb-56 lg:64'>
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
					<a target='_blank' className='btn'>
						What a resume?
					</a>
				</Link>
			</div>
		</section>
	);
};
