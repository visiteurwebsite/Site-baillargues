'use client';

import { useEffect, useState } from 'react';
import Navbar from '../rendering/Navbar';

export function NavbarLogic() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <Navbar mounted={mounted} />;
}
