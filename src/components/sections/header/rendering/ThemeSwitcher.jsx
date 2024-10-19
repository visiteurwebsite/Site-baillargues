import { MoonToggle, SunToggle } from '../../../UI/Icons';
export function ThemeSwitcher({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {theme === 'dark' ? <MoonToggle /> : <SunToggle />}
    </button>
  );
}
