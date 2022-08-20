// import React, { useState } from 'react';

const Keyboard = () => {
    
    return (
      <div className="block h-[200px] mx-2 select-none">
        <div className="flex w-full mt-0 mb-2 mx-auto touch-manipulation">
            <button type="button" data-key="q" className="button-key">Q</button>
            <button type="button" data-key="w" className="button-key">W</button>
            <button type="button" data-key="e" className="button-key">E</button>
            <button type="button" data-key="r" className="button-key">R</button>
            <button type="button" data-key="t" className="button-key">T</button>
            <button type="button" data-key="y" className="button-key">Y</button>
            <button type="button" data-key="u" className="button-key">U</button>
            <button type="button" data-key="i" className="button-key">I</button>
            <button type="button" data-key="o" className="button-key">O</button>
            <button type="button" data-key="p" className="button-key">P</button>
        </div>
        <div className="flex w-full mt-0 mb-2 mx-auto touch-manipulation">
            <div className="block flex-[0.5]"></div>
            <button type="button" data-key="w" className="button-key">A</button>
            <button type="button" data-key="e" className="button-key">S</button>
            <button type="button" data-key="r" className="button-key">D</button>
            <button type="button" data-key="t" className="button-key">F</button>
            <button type="button" data-key="y" className="button-key">G</button>
            <button type="button" data-key="u" className="button-key">H</button>
            <button type="button" data-key="i" className="button-key">J</button>
            <button type="button" data-key="o" className="button-key">K</button>
            <button type="button" data-key="p" className="button-key mr-0">L</button>
            <div className="block flex-[0.5]"></div>
        </div>
        <div className="flex w-full mt-0 mb-2 mx-auto touch-manipulation">
            <button type="button" data-key="↵" className="button-key flex-[1.5] text-xs">ENTER</button>
            <button type="button" data-key="w" className="button-key">Z</button>
            <button type="button" data-key="e" className="button-key">X</button>
            <button type="button" data-key="r" className="button-key">C</button>
            <button type="button" data-key="t" className="button-key">V</button>
            <button type="button" data-key="y" className="button-key">B</button>
            <button type="button" data-key="u" className="button-key">N</button>
            <button type="button" data-key="i" className="button-key">M</button>
            <button type="button" data-key="←" className="button-key flex-[1.5]"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="game-icon" data-testid="icon-backspace"><path fill="#000000" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg></button>
        </div>
      </div>
    );
  }
  
  export default Keyboard;