import Board from './Board';
import Keyboard from './Keyboard';

const Main = () => {
    
    return (
      <div className="w-full max-w-lg h-[calc(100%_-_2.5rem)] sm:h-[calc(100%_-_66px)] my-0 mx-auto flex flex-col">
        <Board/>
        <Keyboard/>
        {/* <KeyboardRU/> */}
      </div>
    );
  }
  
  export default Main;