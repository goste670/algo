let sentence = `short sentence delivers a powerful message with concise and effective language.
short sentence is a shanghai-based womenswear brand founded in 2015.
the brand pays homage to modern women through a collection of comfortable and timeless essentials.
commonplace and banal elements in everyday life inspire short sentence to design understated yet
evocative pieces and pursue life-affirming fashion.`;
let lengthCounter = 0;

let wordCounter = 0;

let vowelCounter = 0;



function isVowel(char) {
  return 'aeiouAEIOU'.includes(char);
}

for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];

  lengthCounter++;

  if (char === ' ' || char === '\n') {
    wordCounter++;
  }

  if (isVowel(char)) {
    vowelCounter++;
  }
}

wordCounter++;