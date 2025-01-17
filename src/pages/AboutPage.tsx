export const AboutPage = () => {
	return (
		<div className='space-y-5'>
			<h1 className='text-center text-4xl font-semibold tracking-tight mb-5'>
				¿Quiénes somos?
			</h1>

			<img
				src='https://img.freepik.com/foto-gratis/trabajadores-fabrica-ropa-trabajo-cascos-amarillos-caminando-sala-produccion-industrial-discutiendo-sobre-plazo-entrega_342744-230.jpg?t=st=1737062143~exp=1737065743~hmac=af9ba8c6f8e2206f2f862a2184ee5a52fd0f141d5c29b760969c2445f2f28454&w=1380'
				alt='Imagen de fondo'
				className='h-[500px] w-full object-cover'
			/>

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
	);
};
