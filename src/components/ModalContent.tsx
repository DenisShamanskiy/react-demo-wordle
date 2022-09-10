import { useAppDispatch, useAppSelector } from "hook";
import { resetBoard } from "store/boardSlice";
import { resetCurrentGuess } from "store/currentGuessSlice";
import { restartGuessesRemaining } from "store/guessesRemainingSlice";
import { restartColorKey } from "store/keyboardSlice";
import { activeModal } from 'store/modalSlice';
import { resetLetters } from "store/nextLetterSlice";
import { restartRightGuess } from "store/rightGuessSlice";
import { resetStats, surrenderStats } from "store/statsSlice";
import { WORDS } from "../words";
import skull from "../icon/skull.svg"
import close from "../icon/close.svg"

export const Content = {

    Confirmation: function Confirmation() {

        const dispatch = useAppDispatch();
    
        const { window, title, description }  = useAppSelector(state => state.modal.modalSlice);
    
        const handleConfirmation = () => {
            if (title === "Сбросить статистику?") {
                localStorage.removeItem("stats")
                dispatch(resetStats())
                dispatch(activeModal({open: false, window: window, title: title, description: description}))   
            }
            if (title === "Начнём сначала?") {
                dispatch(restartRightGuess())
                dispatch(resetBoard())
                dispatch(restartColorKey())
                dispatch(resetLetters())
                dispatch(resetCurrentGuess())
                dispatch(restartGuessesRemaining())
                dispatch(activeModal({open: false, window: window, title: title, description: description}))
            }
            if (title === "Сдаёшься?") {
                dispatch(restartRightGuess())
                dispatch(resetBoard())
                dispatch(restartColorKey())
                dispatch(resetLetters())
                dispatch(resetCurrentGuess())
                dispatch(restartGuessesRemaining())
                dispatch(activeModal({open: false, window: window, title: title, description: description}))
                setTimeout(() => dispatch(activeModal({open: true, window: "LeaveGame"})), 700 )
                dispatch(surrenderStats())
            }
            if (title === "Критическое обновление") {
                localStorage.clear()
                dispatch(activeModal({open: false, window: window, title: title, description: description}))
            }
        }
        
        return (
            <div className="w-80">
                <h2 className="py-4 text-base font-bold text-center uppercase">{title}</h2>
                <p className="py-4 flex justify-center items-center border-y border-dotted border-[color:var(--color-tone-4)] text-center">{description}</p>
                <div className="pt-8 pb-4 flex justify-center items-center">
                    <button className="inline-block w-4/12 h-9 mr-2 rounded bg-[#aa6464] font-bold text-white hover:scale-105 transition duration-300 ease-in-out" onClick={() => dispatch(activeModal({open: false, window: window, title: title, description: description}))}>НЕТ</button>
                    <button className="inline-block w-4/12 h-9 ml-2 rounded bg-[#6475aa] font-bold text-white hover:scale-105 transition duration-300 ease-in-out" onClick={() => handleConfirmation()}>ДА</button>
                </div>
            </div>
        );
    },

    GameLost: function GameLost() {
    
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
                    <span className="flex w-7 h-7 my-4 bg-no-repeat bg-center bg-contain justify-center" style={{backgroundImage: `url(${skull})`}}></span>
                    <h2 className={`py-4 ml-3 mr-3 text-xl font-extrabold text-center text-[#aa6464] uppercase`}>Ты проиграл</h2>
                    <span className="flex w-7 h-7 my-4 bg-no-repeat bg-center bg-contain justify-center text-center" style={{backgroundImage: `url(${skull})`}}></span>
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
                    <button className="inline-block w-4/12 h-9 mr-2 rounded bg-[#aa6464] font-bold text-white hover:scale-105 transition duration-300 ease-in-out" onClick={() => dispatch(activeModal({open: false, window: window}))}>НЕТ</button>
                    <button className="inline-block w-4/12 h-9 ml-2 rounded bg-[#6475aa] font-bold text-white hover:scale-105 transition duration-300 ease-in-out" onClick={() => resetGame()}>ДА</button>
                </div>
            </div>
        );
    },
    
    LeaveGame: function LeaveGame () {
    
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
                    <button className="inline-block w-4/12 h-9 rounded bg-[#6475aa] font-bold text-white hover:scale-105 transition duration-300 ease-in-out" onClick={() => dispatch(activeModal({open: false, window: window}))}>ХОРОШО</button>
                </div>
            </div>
        );
    },
    
    Rules: function Rules () {
    
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
                <button className="inline-block w-6 h-6 top-0 right-0 rounded-full bg-center bg-contain absolute hover:scale-110 transition duration-300 ease-in-out" style={{backgroundImage: `url(${close})`}} onClick={() => dispatch(activeModal({open: false, window: window}))}></button>
                <section>
                    <p className="my-4 text-sm">Угадай <strong>СЛОВО</strong> за 6 попыток</p>
                    <p className="my-4 text-sm">Каждое предположение должно быть допустимым словом из 5 букв.</p>
                    <p className="my-4 text-sm">После каждой попытки цвет плитки будет меняться, чтобы показать, насколько ваше предположение было близко к слову.</p>
                    <div className="border-y border-[color:var(--color-tone-4)]">
                        <p className="my-4 text-sm font-bold">Примеры</p>
                        <div className="my-6">
                        {["к","р","о","в","ь"].map((item, ind) => {
                            return (
                                <div className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center text-2xl leading-8 font-extrabold align-middle box-border uppercase select-none ${ind !== 0 ? "bg-[#ffffff] border-2 border-[#878a8c]" : "bg-[#6aaa64] border-0 text-[#ffffff]"}`} key={ind}>{item}</div>
                            );
                        })}
                        <p className="my-4 text-sm">Буква <strong>К</strong> есть в загаданном слове и находится на правильном месте.</p>
                        </div>
                        <div className="my-6">
                        {["г","н","и","л","ь"].map((item, ind) => {
                            return (
                                <div className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center text-2xl leading-8 font-extrabold align-middle box-border uppercase select-none ${ind !== 1 ? "bg-[#ffffff] border-2 border-[#878a8c]" : "bg-[#c9b458] border-0 text-[#ffffff]"}`} key={ind}>{item}</div>
                            );
                        })}
                        <p className="my-4 text-sm">Буква <strong>Н</strong> есть в загаданном слове, но стоит в другом месте.</p>
                        </div>
                        <div className="my-6">
                        {["ч","е","р","е","п"].map((item, ind) => {
                            return (
                                <div className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center text-2xl leading-8 font-extrabold align-middle box-border uppercase select-none ${ind !== 2 ? "bg-[#ffffff] border-2 border-[#878a8c]" : "bg-[#787c7e] border-0 text-[#ffffff]"}`} key={ind}>{item}</div>
                            );
                        })}
                        <p className="my-4 text-sm">Буквы <strong>Р</strong> нет в загаданном слове.</p>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-center">В игре <strong>{WORDS.length}</strong> {num_word(WORDS.length)}</p>
                </section>
            </div>
        );
    },
    
    Stats: function Stats () {
    
        const dispatch = useAppDispatch();
    
        const { window, }  = useAppSelector(state => state.modal.modalSlice);
    
        const { win, loss, surrender, bar } = useAppSelector(state => state.stats.stats);
    
        const resetStats = () => {
            dispatch(activeModal({open: false, window: window}))
            setTimeout(() => {
                dispatch(activeModal({open: true, window: "Confirmation", title: "Сбросить статистику?", description: "Будет удалена вся текущая статистика игры"}))
            }, 500);
            
        }
        
        return (
            <div className="relative w-80 w-max-96">
                <h2 className="text-base font-bold text-center uppercase box-border">Статистика</h2>
                <button className="inline-block w-6 h-6 top-0 right-0 rounded-full bg-center bg-contain absolute hover:scale-110 transition duration-300 ease-in-out" style={{backgroundImage: `url(${close})`}} onClick={() => dispatch(activeModal({open: false, window: window}))}></button>
                <section className="mt-4 pt-4">
                   <div className="flex justify-center">
                    <div className="w-[80px] mr-4 flex flex-col justify-center text-center text-myGreen">
                        <div className="text-[35px] font-semibold">{win}</div>
                        <div className="font-semibold">Выиграл</div>
                    </div>
                    <div className="w-[80px] mr-4 flex flex-col justify-center text-center text-myYellow">
                    <div className="text-[35px] font-semibold">{surrender}</div>
                        <div className="font-semibold">Сдался</div>
                    </div>
                    <div className="w-[80px] flex flex-col justify-center text-center text-myRed">
                    <div className="text-[35px] font-semibold">{loss}</div>
                        <div className="font-semibold">Проиграл</div>
                    </div>
                   </div>
                   <div className="mt-4 mb-8 border-b border-[color:var(--color-tone-4)]">
                    <p className="py-4 flex justify-center border-b border-[color:var(--color-tone-4)] font-bold">Выигрышные попытки</p>
                    <ul className="py-4">
    
                    {bar.map((row, index) => {
                        return (
                            <li className="flex justify-center items-center w-full mb-1" key={index}>
                            <p className="mr-2 flex w-5 font-bold">#{row.name}</p>
                            <div className=" w-9/12 rounded-xl h-3 relative bg-slate-100">
                                <span className="block h-full bg-myGreen relative overflow-hidden rounded-xl" style={{width: `${row.percent}`}}></span>
                            </div>
                            <p className="flex w-6 h-6 ml-auto justify-center items-center font-extrabold align-middle uppercase box-border select-none bg-[#ffffff] border border-[#878a8c] border-opacity-30">{row.count}</p>
                        </li>
                        );
                    })}
    
                    </ul>
                   </div>
                    <button className="w-4/12 h-9 mb-4 mx-auto block rounded bg-[#aa6464] font-bold text-white hover:scale-105 transition duration-300 ease-in-out" onClick={() => resetStats()}>СБРОСИТЬ</button>
                </section>
            </div>
        );
    }
}