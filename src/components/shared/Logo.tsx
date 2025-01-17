import { Link } from 'react-router-dom';

export const Logo = () => {
	return (
		<Link
			to='/'
			className={`text-2xl font-bold tracking-tighter transition-all`}
		>
			<p className='hidden lg:block'>
			Tienda
				<span className='text-red-600'>Insumos</span>
			</p>

			<p className='flex text-4xl lg:hidden'>
				<span className='-skew-x-6'>T</span>
				<span className='text-red-600 skew-x-6'>I</span>
			</p>
		</Link>
	);
};
