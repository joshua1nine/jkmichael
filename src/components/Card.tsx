import { ReactNode } from 'react';
import Image from 'next/image';

type Props = {
	image: string;
	title: string;
	description: string;
	tech: { icon: any; title?: string }[];
};

const Page = ({ image, title, description, tech }: Props) => {
	return (
		<article>
			<Image width={375} height={220} src={image} />
			<h4>{title}</h4>
			<p>{description}</p>
			<div className='flex items-start'>
				{tech.map(({ icon, title }, index) => {
					return (
						<div key={index} className='flex flex-col items-center'>
							<img className='h-5' src={icon} title={title} />
						</div>
					);
				})}
			</div>
		</article>
	);
};

export default Page;
