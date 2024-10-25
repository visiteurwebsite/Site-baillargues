import { MoonToggle, SunToggle } from '../../../UI/Icons';
export function ThemeSwitcher({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full bg-gray-200 p-2 dark:bg-gray-800"
    >
      {theme === 'dark' ? <MoonToggle /> : <SunToggle />}
    </button>
  );
}
