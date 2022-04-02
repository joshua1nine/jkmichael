import { ReactNode, useState } from 'react';
import { HiX, HiTerminal } from 'react-icons/hi';

export const Terminal = () => {
	const [activeTab, setActiveTab] = useState('front-end');

	interface TabProps {
		children: ReactNode;
		id: string;
	}

	const Tab = ({ children, id }: TabProps) => {
		return (
			<li
				onClick={() => setActiveTab(id)}
				className={`${
					activeTab === id ? 'bg-gray-500' : 'bg-gray-300'
				} font-mono py-1 px-2 flex justify-between items-center w-full max-w-xs rounded rounded-b-none`}
				id={id}>
				<span>
					<HiTerminal className='text-green' />
				</span>
				{children}
				<HiX />
			</li>
		);
	};

	interface TabContentProps {
		children: ReactNode;
		id: string;
	}
	const TabContent = ({ children, id }: TabContentProps) => {
		return (
			<div
				className={`${
					activeTab === id ? 'block' : 'hidden'
				} font-mono h-96 bg-gray-500 rounded rounded-tl-none p-3`}
				id={id}>
				{children}
			</div>
		);
	};

	return (
		<article>
			<ul className='flex'>
				<Tab id='front-end'>Front End</Tab>
				<Tab id='back-end'>Back End</Tab>
			</ul>
			<TabContent id='front-end'>
				<div className='mb-4'>
					PS C:\Users\Joshua&gt; npm run front-end-skills
				</div>
				<h3 className='text-4xl text-gray-900 bg-red mb-4'>Front End</h3>
				<div>
					<span className='text-2xl'>HTML:</span> Proficient
				</div>
				<div className='bg-green w-11/12 h-4'></div>
				<div>
					<span className='text-2xl'>CSS:</span> Proficient
				</div>
				<div className='bg-green w-11/12 h-4'></div>
				<div>
					<span className='text-2xl'>REACT:</span> Intermediate
				</div>
				<div className='bg-green w-11/12 h-4'></div>
				<div>
					<span className='text-2xl'>NEXT:</span> Intermediate
				</div>
				<div className='bg-green w-11/12 h-4'></div>
			</TabContent>
			<TabContent id='back-end'>
				<span>PS C:\Users\Joshua&gt; npm run back-end-skills</span>
			</TabContent>
		</article>
	);
};
