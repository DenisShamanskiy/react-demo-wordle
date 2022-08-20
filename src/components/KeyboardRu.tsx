// import React, { useState } from 'react';

const KeyboardRU = () => {
    
    return (
      <div className="block h-[200px] mx-2 select-none">
        <div className="flex w-full mt-0 mb-2 mx-auto touch-manipulation">
            <button type="button" data-key="q" className="button-key">Й</button>
            <button type="button" data-key="w" className="button-key">Ц</button>
            <button type="button" data-key="e" className="button-key">У</button>
            <button type="button" data-key="r" className="button-key">К</button>
            <button type="button" data-key="t" className="button-key">Е</button>
            <button type="button" data-key="y" className="button-key">Н</button>
            <button type="button" data-key="u" className="button-key">Г</button>
            <button type="button" data-key="i" className="button-key">Ш</button>
            <button type="button" data-key="o" className="button-key">Щ</button>
            <button type="button" data-key="p" className="button-key">З</button>
            <button type="button" data-key="o" className="button-key">Х</button>
            <button type="button" data-key="p" className="button-key">Ъ</button>
        </div>
        <div className="flex w-full mt-0 mb-2 mx-auto touch-manipulation">
            <div className="block flex-[0.5]"></div>
            <button type="button" data-key="w" className="button-key">Ф</button>
            <button type="button" data-key="e" className="button-key">Ы</button>
            <button type="button" data-key="r" className="button-key">В</button>
            <button type="button" data-key="t" className="button-key">А</button>
            <button type="button" data-key="y" className="button-key">П</button>
            <button type="button" data-key="u" className="button-key">Р</button>
            <button type="button" data-key="i" className="button-key">О</button>
            <button type="button" data-key="o" className="button-key">Л</button>
            <button type="button" data-key="p" className="button-key">Д</button>
            <button type="button" data-key="o" className="button-key">Ж</button>
            <button type="button" data-key="p" className="button-key">Э</button>
            <button type="button" data-key="p" className="button-key mr-0">Ё</button>
            <div className="block flex-[0.5]"></div>
        </div>
        <div className="flex w-full mt-0 mb-2 mx-auto touch-manipulation">
            <button type="button" data-key="↵" className="button-key flex-[1.5] text-xs">ENTER</button>
            <button type="button" data-key="w" className="button-key">Я</button>
            <button type="button" data-key="e" className="button-key">Ч</button>
            <button type="button" data-key="r" className="button-key">С</button>
            <button type="button" data-key="t" className="button-key">М</button>
            <button type="button" data-key="y" className="button-key">И</button>
            <button type="button" data-key="u" className="button-key">Т</button>
            <button type="button" data-key="i" className="button-key">Ь</button>
            <button type="button" data-key="u" className="button-key">Б</button>
            <button type="button" data-key="i" className="button-key">Ю</button>
            <button type="button" data-key="←" className="button-key flex-[1.5]"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="game-icon" data-testid="icon-backspace"><path fill="#000000" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg></button>
        </div>
      </div>
    );
  }
  
  export default KeyboardRU;