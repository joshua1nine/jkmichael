const Header = () => {
	return (
		<header className='flex items-center justify-between p-3'>
			<img src='/jkm_logo.svg' alt='JKM Logo' />
			<nav className='space-x-3'>
				<a className='inline-block text-white' href='#work'>
					Work
				</a>
				<a className='inline-block text-white' href='#skills'>
					Skills
				</a>
				<a
					className='inline-block text-white p-1 rounded leading-none bg-orange'
					href='#contact'>
					Contact
				</a>
			</nav>
		</header>
	);
};

export default Header;
