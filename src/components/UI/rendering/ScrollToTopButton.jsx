'use client';
import { FaArrowUp } from 'react-icons/fa';
import { ScrollToTopButtonLogic } from '../logic/ScrollToTopButtonLogic';

export function ScrollToTopButton() {
  const { ScrollToTop, showButton } = ScrollToTopButtonLogic();

  return (
    showButton && (
      <button
        onClick={ScrollToTop}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-slate-500/50 p-2"
      >
        <FaArrowUp size={24} />
      </button>
    )
  );
}
