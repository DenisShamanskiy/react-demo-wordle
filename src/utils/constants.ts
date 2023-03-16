import { IBoardRow } from 'types/store'

export const API_URL =
  process.env.NODE_ENV !== 'development'
    ? process.env['REACT_APP_API_URL_PRODUCTION']
    : process.env['REACT_APP_API_URL']

export const exampleRules = [
  {
    word: ['к', 'р', 'о', 'в', 'ь'],
    discreption: [
      'Буква',
      'К',
      'есть в загаданном слове и находится на правильном месте',
    ],
  },
  {
    word: ['г', 'н', 'и', 'л', 'ь'],
    discreption: [
      'Буква',
      'Н',
      'есть в загаданном слове, но стоит в другом месте',
    ],
  },
  {
    word: ['ч', 'е', 'р', 'е', 'п'],
    discreption: ['Буквы', 'Р', 'нет в загаданном слове'],
  },
]

export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
export const ruRegex = /^[А-яЁё]{5}$/

export const board: IBoardRow[][] = [...new Array(6)].map(() =>
  new Array(5).fill({ letter: '', color: '' }),
)

export const keyBoard = [
  [
    { value: 'й', color: '' },
    { value: 'ц', color: '' },
    { value: 'у', color: '' },
    { value: 'к', color: '' },
    { value: 'е', color: '' },
    { value: 'н', color: '' },
    { value: 'г', color: '' },
    { value: 'ш', color: '' },
    { value: 'щ', color: '' },
    { value: 'з', color: '' },
    { value: 'х', color: '' },
    { value: 'ъ', color: '' },
  ],
  [
    { value: 'ф', color: '' },
    { value: 'ы', color: '' },
    { value: 'в', color: '' },
    { value: 'а', color: '' },
    { value: 'п', color: '' },
    { value: 'р', color: '' },
    { value: 'о', color: '' },
    { value: 'л', color: '' },
    { value: 'д', color: '' },
    { value: 'ж', color: '' },
    { value: 'э', color: '' },
    { value: 'ё', color: '' },
  ],
  [
    { value: 'я', color: '' },
    { value: 'ч', color: '' },
    { value: 'с', color: '' },
    { value: 'м', color: '' },
    { value: 'и', color: '' },
    { value: 'т', color: '' },
    { value: 'ь', color: '' },
    { value: 'б', color: '' },
    { value: 'ю', color: '' },
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
