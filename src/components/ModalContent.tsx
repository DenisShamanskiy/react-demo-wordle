import { useAppDispatch, useAppSelector } from "hook";
import { resetBoard } from "store/boardSlice";
import { restartGuessesRemaining } from "store/guessesRemainingSlice";
import { restartColorKey } from "store/keyboardSlice";
import { activeModal } from 'store/modalSlice';
import { restartRightGuess } from "store/rightGuessSlice";
import icon from "../icon/evil-icon.svg"


export const Restart = () => {

    const dispatch = useAppDispatch();

    const { window, title }  = useAppSelector(state => state.modal.modalSlice);

    const resetGame = () => {
        dispatch(restartRightGuess())
        dispatch(resetBoard())
        dispatch(restartColorKey())
        dispatch(restartGuessesRemaining())
        dispatch(activeModal({open: false, window: window, title: title}))
        if (title === "Сдаёшься?") {
            setTimeout(() => dispatch(activeModal({open: true, window: "LeaveGame"})), 700 )
        }
    }
    
    return (
        <div className="w-80">
            <h2 className="py-4 text-base font-bold text-center uppercase ">{title}</h2>
            <div className="py-4 flex justify-center items-center">
                <button className="inline-block w-4/12 h-9 mr-2 rounded bg-[#aa6464] font-bold text-white hover:scale-105" onClick={() => dispatch(activeModal({open: false, window: window, title: title}))}>НЕТ</button>
                <button className="inline-block w-4/12 h-9 ml-2 rounded bg-[#6475aa] font-bold text-white hover:scale-105" onClick={() => resetGame()}>ДА</button>
            </div>
        </div>
    );
}

export const GameLost = () => {

    const dispatch = useAppDispatch();

    const { open, window }  = useAppSelector(state => state.modal.modalSlice);

    const rightGuess  = useAppSelector(state => state.rightGuess.rightGuessSlice);

    const resetGame = () => {
        dispatch(restartRightGuess())
        dispatch(resetBoard())
        dispatch(restartColorKey())
        dispatch(restartGuessesRemaining())
        dispatch(activeModal({open: false, window: window}))
    }
    
    return (
        <div className="w-80">
            <div className="flex justify-center">
                <span className="flex w-7 h-7 my-4 bg-no-repeat justify-center" style={{backgroundImage: `url(${icon})`}}></span>
                <h2 className={`py-4 ml-3 mr-3 text-xl font-extrabold text-center text-[#aa6464] uppercase`}>Ты проиграл</h2>
                <span className="flex w-7 h-7 my-4 bg-no-repeat justify-center text-center" style={{backgroundImage: `url(${icon})`}}></span>
            </div>
            <p className=" text-center">Это было слово</p>
            <div className="mt-5 mb-5 flex justify-center items-center ">
                {[...rightGuess].map((item, ind) => {
                        return (
                            <div className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center text-2xl leading-8 font-extrabold align-middle box-border uppercase select-none bg-[#6aaa64] border-0 text-[#ffffff] ${!open && "opacity-0"}`} key={ind}>{item}</div>
                        );
                    })}
            </div>
            <p className="text-center">Попробуем еще?</p>
            <div className="py-4 flex justify-center items-center">
                <button className="inline-block w-4/12 h-9 mr-2 rounded bg-[#aa6464] font-bold text-white hover:scale-105" onClick={() => dispatch(activeModal({open: false, window: window}))}>НЕТ</button>
                <button className="inline-block w-4/12 h-9 ml-2 rounded bg-[#6475aa] font-bold text-white hover:scale-105" onClick={() => resetGame()}>ДА</button>
            </div>
        </div>
    );
}

export const LeaveGame = () => {

    const dispatch = useAppDispatch();

    const { open, window }  = useAppSelector(state => state.modal.modalSlice);

    const rightGuess  = useAppSelector(state => state.rightGuess.rightGuessSlice);
    
    return (
        <div className="w-80">
            <p className="py-4 text-base font-bold text-center border-b border-dotted border-[color:var(--color-tone-4)] uppercase box-border">Загаданное слово</p>
            <div className="py-4 flex justify-center items-center border-b border-dotted border-[color:var(--color-tone-4)]">
                {[...rightGuess].map((item, ind) => {
                        return (
                            <div className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center text-2xl leading-8 font-extrabold align-middle box-border uppercase select-none bg-[#6aaa64] border-0 text-[#ffffff] ${!open && "opacity-0"}`} key={ind}>{item}</div>
                        );
                    })}
            </div>
            <div className="py-4 flex justify-center items-center">
                <button className="inline-block w-4/12 h-9 rounded bg-[#6475aa] font-bold text-white hover:scale-105" onClick={() => dispatch(activeModal({open: false, window: window}))}>ХОРОШО</button>
            </div>
        </div>
    );
}