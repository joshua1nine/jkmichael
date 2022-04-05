import Image from 'next/image';
import Link from 'next/link';

type Props = {
	image: string;
	title: string;
	description: string;
	tech: { icon: any; title?: string }[];
	link: string;
	roles?: any[];
};

const Page = ({ image, title, description, tech, link = '', roles }: Props) => {
	return (
		<article className='bg-gray-400 rounded-md max-w-[375px]'>
			<Image width={375} height={220} src={image} className='rounded-t-md' />
			<div className='flex flex-col h-[275px]'>
				<div className='flex-1 p-4 pt-2'>
					<Link href={link}>
						<a target='_blank'>
							<h4 className='text-2xl font-bold mb-1 hover:text-green'>
								{title}
							</h4>
						</a>
					</Link>
					<div className='mb-3'>
						{roles.map((role, index) => {
							return (
								<span
									key={index}
									className={` ${
										index % 2 === 0
											? 'bg-orange text-white'
											: 'bg-green text-gray-900'
									} px-1 rounded mr-2`}>
									{role}
								</span>
							);
						})}
					</div>
					<p className='mb-2 leading-7'>{description}</p>
					<Link href={link}>
						<a className='inline-block' target='_blank'>
							<div className='text-orange uppercase hover:text-green'>
								Visit Site &gt;
							</div>
						</a>
					</Link>
				</div>
				<div className='flex items-start px-4 pb-4'>
					{tech.map(({ icon, title }, index) => {
						return (
							<div key={index} className='flex flex-col items-center'>
								<img className='h-7 mr-3' src={icon} title={title} />
							</div>
						);
					})}
				</div>
			</div>
		</article>
	);
};

export default Page;
