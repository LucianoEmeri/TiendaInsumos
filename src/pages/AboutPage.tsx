export const AboutPage = () => {
	return (
		<div>
			<img
				src='https://sdygfmfocvxwbeoojqwh.supabase.co/storage/v1/object/public/product-images/img/aboutus.webp'
				alt='Imagen de fondo'
				className='absolute top-16 left-0 w-screen h-[500px] object-cover'
			/>

			<div className='relative mt-[500px] space-y-5 px-4'>
				<h1 className='text-center pt-5 text-5xl font-semibold tracking-tight mb-10'>
					¿Quiénes somos?
				</h1>

				<div className='flex flex-col gap-4 tracking-tighter leading-7 text-lg font-medium text-slate-800'>
					<p>
						TiendaInsumos es una tienda en línea que se dedica a la
						venta de insumos, fundada en 2025. Nuestro objetivo es
						ofrecer a nuestros clientes la mejor calidad y precio en
						insumos. Contamos con un equipo de profesionales que se
						encargan de seleccionar los mejores productos para ti.
					</p>

					<p>
						En TiendaInsumos podrás encontrar una amplia variedad de
						insumos de las mejores marcas. Además, contamos con
						promociones y descuentos exclusivos para que puedas comprar
						tus insumos al mejor precio.
					</p>

					<h2 className='text-3xl font-semibold tracking-tighh mt-8 mb-4'>
						¡No esperes más y compra tus productos en Tienda<span className="text-red-600">Insumos</span>!
					</h2>

					<p className="mb-4">
						Para más información, no dudes en ponerte en contacto con
						nosotros, a través de nuestro correo electrónico: <span/>
						<a className="text-red-600" href='mailto:ventas@tiendainsumos.com'>
							ventas@tiendainsumos.com
						</a>{' '}
						o llamando al <a className="text-red-600" href='tel:3435049487'>3435049487</a>
					</p>
				</div>
			</div>
		</div>
	);
};
