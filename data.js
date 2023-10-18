const people = ['Adams', 'Lincoln', 'Washington'];
const months = [
  'February',
  'May',
  'June',
  'July',
  'September',
  'October',
  'November',
];
const holidays = [
  "Presidents' Day",
  'Memorial Day',
  'Flag Day',
  'Independence Day',
  'Labor Day',
  'Columbus Day',
  'Thanksgiving',
];

const places = [
  'Alaska',
  'California',
  'Canada',
  'Delaware',
  'Mexico',
  'New York City',
  'United States',
  'Washington',
  'Washington, D.C.',
];

const civics = [
  'American Indians',
  'capital',
  'citizens',
  'Civil War',
  'Congress',
  'Father of Our Country',
  'flag',
  'free',
  'freedom of speech',
  'President',
  'right',
  'Senators',
  'state/states',
  'White House',
];

const verbs = [
  'can',
  'come',
  'elect',
  'have/has',
  'is/was/be',
  'lives/lived',
  'meets',
  'pay',
  'vote',
  'want',
];

const otherContents = [
  'blue',
  'dollar bill',
  'fifty/50',
  'first',
  'largest',
  'most',
  'north',
  'one',
  'one hundred/100',
  'people',
  'red',
  'second',
  'south',
  'taxes',
  'white',
];

const otherFunctions = [
  'and',
  'during',
  'for',
  'here',
  'in',
  'of',
  'on',
  'the',
  'to',
  'we',
];

export const allWords = [
  ...people,
  ...months,
  ...holidays,
  ...places,
  ...civics,
  ...verbs,
  ...otherContents,
  ...otherFunctions,
];

export const wordsByCategory = {
  People: people,
  Months: months,
  Holidays: holidays,
  Places: places,
  Civics: civics,
  Verbs: verbs,
  'Other (Content)': otherContents,
  'Other (Function)': otherFunctions,
  All: allWords,
};
