import moon from "../assets/moon.svg";
import bordedMoon from "../assets/moon-light-mode.svg";

type Props = {
  theme: "light" | "dark";
  onToggle: () => void;
};

const Header = ({ theme, onToggle }: Props) => {
  return (
    <>
      <header className="bg-white dark:bg-slate-700 text-slate-800 dark:text-white flex justify-between px-9 items-center h-22.5 w-full">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Where in the world?
        </h1>

        <button
          onClick={onToggle}
          className="flex justify-center items-center gap-2 cursor-pointer bg-transparent border-none text-slate-800 dark:text-white"
        >
          <img
            src={theme === "dark" ? moon : bordedMoon}
            className="h-9"
            alt="theme icon"
          />
          <span className="font-semibold text-sm">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </header>
    </>
  );
};

export default Header;