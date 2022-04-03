import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
	return (
		<header className='flex items-center justify-between p-3'>
			<img src='/jkm_logo.svg' alt='JKM Logo' />
			<div className='flex space-x-3'>
				<FaEnvelope className='text-green' size={20} />
				<FaGithub className='text-[#F5F5F5]' size={20} />
				<FaLinkedin className='text-[#0077B5]' size={20} />
			</div>
		</header>
	);
};

export default Header;
