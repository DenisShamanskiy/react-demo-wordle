const Header = () => {
  
  return (
    <header className="h-10 sm:h-[65px] px-4 md:px-5 flex flex-row items-center justify-start flex-nowrap text-[color:var(--color-tone-1)] border-b border-[color:var(--color-tone-4)] box-content">
        <div className=" grow-[2] font-bold text-[28px] md:text-[32px] lg:text-[36px] tracking-[0.01em] text-left md:text-center left-0 right-0 pointer-events-none relative box-border leading-none  ">Wordle RU</div>
    </header>
  );
}

export default Header;
