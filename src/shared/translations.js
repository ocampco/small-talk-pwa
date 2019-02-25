// TODO: support non-english translations
const ENGLISH = {
  ENGLISH: [
    {
      context: 'Hello',
      translation: 'Hola',
    },
  ],
  SPANISH: [
    {
      context: 'Hello',
      translation: 'Hola',
      pronounciation: 'o-la',
    },
    {
      context: 'Goodbye',
      translation: 'Buenas Dias/Noches/Tardes',
      pronounciation: 'bwe-nas dee-yas/noh-ches/tar-des',
    },
    {
      context: 'Yes',
      translation: 'Si',
      pronounciation: 'si',
    },
    {
      context: 'No',
      translation: 'No',
      pronounciation: 'no',
    },
    {
      context: 'Thanks',
      translation: 'Gracias',
      pronounciation: 'grah-si-ahs',
    },
  ],
};

const SPANISH = {
  SPANISH: [
    {
      context: 'Hola',
      translation: 'Hello',
    },
  ],
  ENGLISH: [
    {
      context: 'Hola',
      translation: 'Hello',
    },
    {
      context: 'Buenas Dias/Noches/Tardes',
      translation: 'Goodbye',
    },
    {
      context: 'Si',
      translation: 'Yes',
    },
    {
      context: 'No',
      translation: 'No',
    },
    {
      context: 'Gracias',
      translation: 'Thanks',
    },
  ],
};

export default {
  ENGLISH,
  SPANISH,
};
