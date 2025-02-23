const Header = () => {
  return (
    <header className="w-full flex justify-center items-center max-sm:p-4 xl:p-6">
      <div className="max-sm:w-full xl:w-4/5 flex flex-col">
        <h1 className="max-sm:text-2xl xl:text-3xl capitalize font-bold text-blue-500">
          Photo feed
        </h1>
        <h3 className="max-sm:text-lg xl:text-2xl font-semibold">
          Next JS intercepted routes mechanism example
        </h3>
      </div>
    </header>
  );
};

export default Header;
