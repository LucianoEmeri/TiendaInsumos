const brands = [
	{
		image: '/img/brands/3m-logo.webp',
		alt: '3M',
	},
	{
		image: '/img/brands/dupont-logo.webp',
		alt: 'DuPont',
	},
	{
		image: '/img/brands/kodak-logo.webp',
		alt: 'Kodak',
	},
	{
		image: '/img/brands/bosch-logo.webp',
		alt: 'Bosch',
	},
	{
		image: '/img/brands/honeywell-logo.webp',
		alt: 'Honeywell',
	},
	{
		image: '/img/brands/staples-logo.webp',
		alt: 'Staples',
	},
];

export const Brands = () => {
	return (
		// <div className='flex flex-col items-center gap-3'>
		// 	<h2 className='font-bold text-2xl'>Marcas que disponemos</h2>

		// 	<p className='w-2/3 text-center text-sm md:text-base'>
		// 		Los insumos que necesitas están acá, contamos con gran variedad de marcas reconocidas.
		// 	</p>

			<div className='grid grid-cols-3 gap-6 items-center md:grid-cols-6'>
				{brands.map((brand, index) => (
					<div key={index}>
						<img src={brand.image} alt={brand.alt} />
					</div>
				))}
			</div>
		// </div>
	);
};
