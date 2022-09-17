export const exampleRules = [
  {
    word: ["к", "р", "о", "в", "ь"],
    discreption: [
      "Буква",
      "К",
      "есть в загаданном слове и находится на правильном месте",
    ],
  },
  {
    word: ["г", "н", "и", "л", "ь"],
    discreption: [
      "Буква",
      "Н",
      "есть в загаданном слове, но стоит в другом месте",
    ],
  },
  {
    word: ["ч", "е", "р", "е", "п"],
    discreption: ["Буквы", "Р", "нет в загаданном слове"],
  },
];

export const dataCountStats = [
  {
    text: "Выиграл",
    style: "text-wordleGreen",
  },
  {
    text: "Сдался",
    style: "text-wordleYellow",
  },
  {
    text: "Проиграл",
    style: "text-wordleRed",
  },
];
