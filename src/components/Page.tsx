import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const Page = ({ children }: Props) => {
	return <div className='bg-gray-900'>{children}</div>;
};

export default Page;
