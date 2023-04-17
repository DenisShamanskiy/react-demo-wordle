import { IBoardRow, IKeyBoardRow } from 'types/store'

export const API_URL =
  process.env.NODE_ENV !== 'development'
    ? process.env['REACT_APP_API_URL_PRODUCTION']
    : process.env['REACT_APP_API_URL']

export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export const ruRegex = /^[А-яЁё]{5}$/

export const board: IBoardRow[][] = [...new Array(6)].map(() =>
  new Array(5).fill({ value: null, color: null }),
)

export const keyBoard: IKeyBoardRow[][] = [
  [
    { value: 'й', color: null },
    { value: 'ц', color: null },
    { value: 'у', color: null },
    { value: 'к', color: null },
    { value: 'е', color: null },
    { value: 'н', color: null },
    { value: 'г', color: null },
    { value: 'ш', color: null },
    { value: 'щ', color: null },
    { value: 'з', color: null },
    { value: 'х', color: null },
    { value: 'ъ', color: null },
  ],
  [
    { value: 'ф', color: null },
    { value: 'ы', color: null },
    { value: 'в', color: null },
    { value: 'а', color: null },
    { value: 'п', color: null },
    { value: 'р', color: null },
    { value: 'о', color: null },
    { value: 'л', color: null },
    { value: 'д', color: null },
    { value: 'ж', color: null },
    { value: 'э', color: null },
    { value: 'ё', color: null },
  ],
  [
    { value: 'я', color: null },
    { value: 'ч', color: null },
    { value: 'с', color: null },
    { value: 'м', color: null },
    { value: 'и', color: null },
    { value: 'т', color: null },
    { value: 'ь', color: null },
    { value: 'б', color: null },
    { value: 'ю', color: null },
  ],
]

export const statistics = {
  win: 0,
  fail: 0,
  leave: 0,
  bar: [
    {
      percent: '0%',
      count: 0,
    },
    {
      percent: '0%',
      count: 0,
    },
    {
      percent: '0%',
      count: 0,
    },
    {
      percent: '0%',
      count: 0,
    },
    {
      percent: '0%',
      count: 0,
    },
    {
      percent: '0%',
      count: 0,
    },
  ],
}

export const shadowClasses =
  'shadow-popped active:shadow-pushed dark:shadow-poppedDark dark:active:shadow-pushedDark hover:shadow-hover dark:hover:shadow-hoverDark'

export const disabledClasses =
  'disabled:shadow-disabled dark:disabled:shadow-disabledDark disabled:text-w-disabled dark:disabled:text-w-disabled-dark disabled:grayscale'
