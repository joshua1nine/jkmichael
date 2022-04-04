import Link from 'next/link';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
	return (
		<header className='flex items-center justify-between p-3 xl:p-6'>
			<img src='/jkm_logo.svg' alt='JKM Logo' />
			<div className='flex space-x-6'>
				<Link href='mailto:joshua.kale.michael@gmail.com'>
					<a target='_blank'>
						<FaEnvelope className='text-green' size={30} />
					</a>
				</Link>
				<Link href='https://github.com/joshua1nine'>
					<a target='_blank'>
						<FaGithub className='text-[#F5F5F5]' size={30} />
					</a>
				</Link>
				<Link href='https://www.linkedin.com/in/jkmichael/'>
					<a target='_blank'>
						<FaLinkedin className='text-[#0077B5]' size={30} />
					</a>
				</Link>
			</div>
		</header>
	);
};

export default Header;
