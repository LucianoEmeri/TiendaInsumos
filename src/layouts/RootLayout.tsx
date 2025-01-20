import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { Banner } from '../components/home/Banner';
import { Newsletter } from '../components/home/Newsletter';
import { Sheet } from '../components/shared/Sheet';
import { useGlobalStore } from '../store/global.store';
import { NavbarMobile } from '../components/shared/NavbarMobile';
import WhatsAppButton from '../components/shared/WhatsAppButton';


export const RootLayout = () => {
	const { pathname } = useLocation();
	const isSheetOpen = useGlobalStore(state => state.isSheetOpen);
	const setActiveNavMobile = useGlobalStore(state => state.activeNavMobile);

	return (
		<div className="h-screen flex flex-col font-montserrat">
			<Navbar />

			<div className="pt-[64px] flex-1">
				{pathname === '/' && <Banner />}

				<main className="container my-8">
					<Outlet />
				</main>

				{pathname === '/' && <Newsletter />}
			</div>

			{isSheetOpen && <Sheet />}

			{setActiveNavMobile && <NavbarMobile />}

			<Footer />

			<WhatsAppButton
				phoneNumber="+543435048422"
				message="Hola, estoy interesado en sus productos."
			/>
		</div>
	);
};
