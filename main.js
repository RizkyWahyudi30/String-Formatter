function cleanText(text) {
  return text.trim();
}

function capitalizeText(text) {
  let textToLower = text.toLowerCase();

  let changeToUpper = textToLower.split(" ").map((kata) => {
    return kata[0].toUpperCase() + kata.slice(1);
  });

  return changeToUpper.join(" ");
}

function formatDisplayName(firstName, lastName) {
  let firstname = firstName;
  let lastname = lastName;
  let fullName = `${cleanText(firstname)} ${cleanText(lastname)}`;

  let cleaningText = cleanText(fullName);
  let capitalizetext = capitalizeText(cleaningText);

  return capitalizetext;
}

console.log(formatDisplayName(" ava", "STONE "));
console.log(formatDisplayName("nOAh", " kim"));
console.log(formatDisplayName(" mINA ", "pATEL"));
