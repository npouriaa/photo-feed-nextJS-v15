const Header = () => {
  return (
    <header className="w-full flex justify-center items-center max-sm:p-4 md2:p-6">
      <div className="max-sm:w-full md2:w-3/4 flex flex-col">
        <h1 className="max-sm:text-2xl md2:text-3xl capitalize font-bold text-blue-500">
          Photo feed
        </h1>
        <h3 className="max-sm:text-lg md2:text-2xl font-semibold">
          Next JS intercepted routes mechanism example
        </h3>
      </div>
    </header>
  );
};

export default Header;
