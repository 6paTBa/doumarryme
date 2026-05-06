export interface Reason {
  num:  string
  text: string
}

export interface Moment {
  icon:  string
  title: string
  desc:  string
}

// ✏️ Edit all copy here — no need to touch component files

export const reasons: Reason[] = [
  { num: '01', text: 'Мне нравится твой характер' },
  { num: '02', text: 'Ты вызываешь у меня не только симпатию, но и уважение' },
  { num: '03', text: 'Я думаю о тебе чаще, чем хотел бы признать 😄' },
  { num: '04', text: 'Мне хочется строить что-то настоящее, а не играть в игры' },
  { num: '05', text: 'Ты уже стала для меня особенной' },
  { num: '06', text: 'Ты вызываешь у меня желание стараться' },
]

export const moments: Moment[] = [
  {
    icon:  '✦',
    title: 'Первый раз, когда я понял: ты - та самая',
    desc:  'Ты приготовила для меня блины, хотя я не просил',
  },
  {
    icon:  '✧',
    title: 'Хочется видеться с тобой всегда',
    desc:  'Потому что время с тобой всегда заканчивается слишком быстро',
  },
  {
    icon:  '♡',
    title: 'Прямо сейчас',
    desc:  'Этот сайт. Потому что ради тебя хочется быть лучшим',
  },
]

export const noButtonLabels: readonly string[] = [
  'Нет',
  'Точно нет?',
  'Подумай...',
  'Серьезно...',
]

export const petals: readonly string[] = ['🌸', '🌷',  '🌺', '💮', '🩷', '😘', '💐']
