import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { Banner } from '../components/home/Banner';
import { Newsletter } from '../components/home/Newsletter';

export const RootLayout = () => {
	const { pathname } = useLocation();

	return (
		<div className="h-screen flex flex-col font-montserrat">
			<Navbar />

			<div className="pt-[68px] flex-1">
				{pathname === '/' && <Banner />}

				<main className="container my-8">
					<Outlet />
				</main>

				{pathname === '/' && <Newsletter />}
			</div>

			<Footer />
		</div>
	);
};
