import lokomotive from './img-min/lokomotive.jpg'
import brakeShoe from './img-min/brake-shoe.jpg';
import hopper from './img-min/hopper.jpg';
import platformCar from './img-min/platform-car.jpg';
import railwayBridge from './img-min/railway-bridge.jpg';
import sapsan from './img-min/sapsan.jpg';
import sleepers from './img-min/sleepers.jpg';

export const questions = [
  {
    title: 'Что изображено на картинке?',
    image: lokomotive,
    variants: ['Локомотив', 'Паровоз', 'Ласточка'],
    correct: 0,
  },
  {
    title: 'Что изображено на картинке?',
    image: brakeShoe,
    variants: ['Тормоз', 'Башмак', 'Туфелька'],
    correct: 1,
  },
  {
    title: 'Что изображено на картинке?',
    image: hopper,
    variants: [
      'Грузовой вагон',
      'Вагон-Тележка',
      'Хоппер',
    ],
    correct: 2,
  },
  {
    title: 'Что изображено на картинке?',
    image: platformCar,
    variants: [
      'Вагон-рефрижератор',
      'Почтовый вагон',
      'Вагон-платформа',
    ],
    correct: 2,
  },
  {
    title: 'Что изображено на картинке?',
    image: sapsan,
    variants: [
      'Беркут',
      'Ласточка',
      'Сапсан',
    ],
    correct: 2,
  }
]