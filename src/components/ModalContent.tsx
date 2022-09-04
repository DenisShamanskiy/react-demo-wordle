import { useAppDispatch, useAppSelector } from "hook";
import { resetBoard } from "store/boardSlice";
import { resetCurrentGuess } from "store/currentGuessSlice";
import { restartGuessesRemaining } from "store/guessesRemainingSlice";
import { restartColorKey } from "store/keyboardSlice";
import { activeModal } from 'store/modalSlice';
import { resetLetters } from "store/nextLetterSlice";
import { restartRightGuess } from "store/rightGuessSlice";
import { WORDS } from "../words";
import icon from "../icon/evil-icon.svg"
import close from "../icon/close-round-line-icon.svg"


export const Restart = () => {

    const dispatch = useAppDispatch();

    const { window, title }  = useAppSelector(state => state.modal.modalSlice);

    const resetGame = () => {
        dispatch(restartRightGuess())
        dispatch(resetBoard())
        dispatch(restartColorKey())
        dispatch(resetLetters())
        dispatch(resetCurrentGuess())
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

    const rightGuess  = useAppSelector(state => state.rightGuess.rightGuessSlice.currentWord);

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
            <p className="py-4 text-base font-bold text-center border-b border-dotted border-[color:var(--color-tone-4)] uppercase box-border">Загаданное слово</p>
            <div className="py-4 flex justify-center items-center border-b border-dotted border-[color:var(--color-tone-4)]">
                {[...rightGuess].map((item, ind) => {
                        return (
                            <div className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center text-2xl leading-8 font-extrabold align-middle box-border uppercase select-none bg-[#6aaa64] border-0 text-[#ffffff] ${!open && "opacity-0"}`} key={ind}>{item}</div>
                        );
                    })}
            </div>
            <p className="pt-8 pb-4 text-base font-bold text-center uppercase box-border">Попробуем еще?</p>
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

    const { previousWord }  = useAppSelector(state => state.rightGuess.rightGuessSlice);
    
    return (
        <div className="w-80">
            <p className="py-4 text-base font-bold text-center border-b border-dotted border-[color:var(--color-tone-4)] uppercase box-border">Загаданное слово</p>
            <div className="py-4 flex justify-center items-center border-b border-dotted border-[color:var(--color-tone-4)]">
                {[...previousWord].map((item, ind) => {
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

export const Rules = () => {

    const dispatch = useAppDispatch();

    const { window }  = useAppSelector(state => state.modal.modalSlice);

    function num_word(value: number){  
        const words = ['слово', 'слова', 'слов']
        value = Math.abs(value) % 100; 
        const num = value % 10;
        if(value > 10 && value < 20) return words[2]; 
        if(num > 1 && num < 5) return words[1];
        if(num === 1) return words[0]; 
        return words[2];
    }
    
    return (
        <div className="relative w-full w-max-96">
            <h2 className="text-base font-bold text-center uppercase box-border">Как играть</h2>
            <button className="inline-block w-6 h-6 top-0 right-0 rounded-full bg-center bg-contain absolute hover:scale-105 transition duration-300 ease-in-out" style={{backgroundImage: `url(${close})`}} onClick={() => dispatch(activeModal({open: false, window: window}))}></button>
            <section>
                <p className="my-4 text-sm">Угадай <strong>СЛОВО</strong> за 6 попыток</p>
                <p className="my-4 text-sm">Каждое предположение должно быть допустимым словом из 5 букв.</p>
                <p className="my-4 text-sm">После каждой попытки цвет плитки будет меняться, чтобы показать, насколько ваше предположение было близко к слову.</p>
                <div className="border-y border-[color:var(--color-tone-4)]">
                    <p className="my-4 text-sm font-bold">Примеры</p>
                    <div className="my-6">
                    {["к","р","о","в","ь"].map((item, ind) => {
                        return (
                            <div className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center text-2xl leading-8 font-extrabold align-middle box-border uppercase select-none ${ind !== 0 ? "bg-[#ffffff] border-2 border-[#878a8c] text-[#000000]" : "bg-[#6aaa64] border-0 text-[#ffffff]"}`} key={ind}>{item}</div>
                        );
                    })}
                    <p className="my-4 text-sm">Буква <strong>К</strong> есть в загаданном слове и находится на правильном месте.</p>
                    </div>
                    <div className="my-6">
                    {["г","н","и","л","ь"].map((item, ind) => {
                        return (
                            <div className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center text-2xl leading-8 font-extrabold align-middle box-border uppercase select-none ${ind !== 1 ? "bg-[#ffffff] border-2 border-[#878a8c] text-[#000000]" : "bg-[#c9b458] border-0 text-[#ffffff]"}`} key={ind}>{item}</div>
                        );
                    })}
                    <p className="my-4 text-sm">Буква <strong>Н</strong> есть в загаданном слове, но стоит в другом месте.</p>
                    </div>
                    <div className="my-6">
                    {["ч","е","р","е","п"].map((item, ind) => {
                        return (
                            <div className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center text-2xl leading-8 font-extrabold align-middle box-border uppercase select-none ${ind !== 2 ? "bg-[#ffffff] border-2 border-[#878a8c] text-[#000000]" : "bg-[#787c7e] border-0 text-[#ffffff]"}`} key={ind}>{item}</div>
                        );
                    })}
                    <p className="my-4 text-sm">Буквы <strong>Р</strong> нет в загаданном слове.</p>
                    </div>
                </div>
                <p className="my-4 text-xs text-center">В игре <strong>{WORDS.length}</strong> {num_word(WORDS.length)}</p>
            </section>
        </div>
    );
}

// export const Cog = () => {

//     const dispatch = useAppDispatch();

//     const { window }  = useAppSelector(state => state.modal.modalSlice);

//     const resetGame = () => {
//         localStorage.clear()
//         dispatch(activeModal({open: false, window: window}))
//     }
    
//     return (
//         <div className="w-80">
//             <h2 className="py-4 text-base font-bold text-center uppercase ">Cog</h2>
//             <div className="py-4 flex justify-center items-center">
//                 <button className="inline-block w-4/12 h-9 ml-2 rounded bg-[#6475aa] font-bold text-white hover:scale-105" onClick={() => resetGame()}>ДА</button>
//             </div>
//         </div>
//     );
// }