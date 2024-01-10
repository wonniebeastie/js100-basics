const greet = languageCode => {
	switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
	};
}

const extractLanguage = locale => locale.slice(0, 2);

const extractRegion = locale => locale.slice(3, 5);


const localGreet = locale => {
	let enOrNot = extractLanguage(locale);
  return enOrNot;
}

console.log(localGreet('en_US.UTF-8'));