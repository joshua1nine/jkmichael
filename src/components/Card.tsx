import Image from 'next/image';

type Props = {
	image: string;
	title: string;
	description: string;
	tech: { icon: any; title?: string }[];
};

const Page = ({ image, title, description, tech }: Props) => {
	return (
		<article className='bg-gray-500'>
			<Image width={375} height={220} src={image} />
			<div className='p-3'>
				<h4 className='text-2xl font-bold mb-4'>{title}</h4>
				<p className='mb-8'>{description}</p>
				<div className='flex items-start'>
					{tech.map(({ icon, title }, index) => {
						return (
							<div key={index} className='flex flex-col items-center'>
								<img className='h-6 mr-2' src={icon} title={title} />
							</div>
						);
					})}
				</div>
			</div>
		</article>
	);
};

export default Page;
