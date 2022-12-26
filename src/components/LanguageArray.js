export default function LanguageArray(UserData) {
  let language = [UserData[0].country];
  let j = 0;
  for (let z = 0; z < UserData.length; z++) {
    for (let k = 0; k < language.length; k++) {
      if (language[k] === UserData[z].country) {
        j = j + 1;
      }
    }

    if (j === 0) {
      language.push(UserData[z].country);
    }
    j = 0;
  }
  return language;
}
