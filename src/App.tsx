import { Toaster } from 'sonner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="booking" element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}