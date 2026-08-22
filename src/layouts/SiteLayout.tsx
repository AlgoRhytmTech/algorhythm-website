import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-ink-900">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
