import Image from 'next/image';
import Link from 'next/link';

type Props = {
	image: string;
	title: string;
	description: string;
	tech: { icon: any; title?: string }[];
	link: string;
};

const Page = ({ image, title, description, tech, link = '' }: Props) => {
	return (
		<article className='bg-gray-400 rounded-md'>
			<Image width={375} height={220} src={image} className='rounded-t-md' />
			<div className='flex flex-col h-[275px]'>
				<div className='flex-1 p-4 pt-2'>
					<Link href={link}>
						<a target='_blank'>
							<h4 className='text-2xl font-bold mb-4 hover:text-green'>
								{title}
							</h4>
						</a>
					</Link>
					<p className='mb-2 leading-7'>{description}</p>
					<Link href={link}>
						<a className='inline-block'>
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
