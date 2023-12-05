// Libraries
import { Outlet } from 'react-router-dom';

// Components
import Header from '../pages/Header';
import Footer from '../pages/Footer';

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
