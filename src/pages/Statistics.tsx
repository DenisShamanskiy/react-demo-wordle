import CountStats from 'components/micro-components/CountStats'
import { useAppSelector } from 'utils/hook'
import Section from 'components/micro-components/Section'
import Heading2 from 'components/micro-components/Heading2'
import StatisticsNotAuth from './StatisticsNotAuth'

const Statistics = () => {
  const { win, loss, surrender, bar } = useAppSelector((state) => state.stats)
  const darkMode = useAppSelector((state) => state.settings.darkMode)
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)

  return (
    <Section style={'w-11/12 max-w-lg'}>
      <>
        <Heading2>Статистика</Heading2>

        {isLoggedIn ? (
          <>
            <div className='my-6 sm:my-8 grid grid-cols-3 gap-1'>
              {[win, surrender, loss].map((item, index) => {
                return <CountStats count={item} index={index} key={index} />
              })}
            </div>
            <div>
              <h3
                className={`${
                  darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
                } pb-4 sm:pb-6 flex justify-center font-bold text-sm sm:text-base uppercase`}
              >
                Выигрышные попытки
              </h3>
              <ul
                className={`border-y ${
                  darkMode ? 'border-wordleTone4Dark' : 'border-wordleTone4'
                } py-4 grid grid-rows-6 gap-y-1 sm:gap-y-2`}
              >
                {bar.map((row, index) => {
                  return (
                    <li className='w-full flex justify-center items-center' key={index}>
                      <p
                        className={`${
                          darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
                        } w-5 mr-2 sm:mr-3 flex text-sm sm:text-base font-bold`}
                      >
                        #{row.name}
                      </p>
                      <div
                        className={`w-10/12 h-3 sm:h-4 rounded-xl ${
                          darkMode ? 'bg-wordleTone4Dark/40' : 'bg-wordleTone4/40'
                        }`}
                      >
                        <span
                          className={`relative h-full rounded-xl block ${
                            darkMode ? 'bg-wordleGreenDark' : 'bg-wordleGreen'
                          } overflow-hidden`}
                          style={{ width: `${row.percent}` }}
                        ></span>
                      </div>
                      <p
                        className={`w-6 sm:w-7 h-6 sm:h-7 ml-3 sm:ml-4 flex justify-center items-center text-sm sm:text-lg font-extrabold uppercase box-border overflow-hidden ${
                          darkMode
                            ? 'bg-wordleGreyDark border-0 text-wordleWhite'
                            : 'bg-wordleWhite border border-wordleTone4 text-wordleQuartz'
                        }`}
                      >
                        {row.count}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </>
        ) : (
          <StatisticsNotAuth />
        )}
      </>
    </Section>
  )
}

export default Statistics
