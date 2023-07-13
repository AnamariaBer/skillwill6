function replaceString(string, valueToReplace, valueToReplaceWith) {
    let newString = '';
    let startIndex = 0;
    while (startIndex < string.length) {
      const index = string.indexOf(valueToReplace, startIndex);
      if (index === -1) {
        
        newString += string.slice(startIndex);
        break;
      }
      newString += string.slice(startIndex, index);
     
      newString += valueToReplaceWith;
      
      startIndex = index + valueToReplace.length;
    }
    return newString;
  }

  const inputString = 'This is working';
const valueToReplace = 'i';
const valueToReplaceWith = 'X';
const outputString = replaceString(inputString, valueToReplace, valueToReplaceWith);
console.log(outputString); 


function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return `${firstLetter}${restOfWord}`;
    });
    return capitalizedWords.join(' ');
  }


  const sentence = 'the cat is laying under the table';
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);


function sortUsersByAge(users) {
    return users.sort((a, b) => a.age - b.age);
  }

  const users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
    { name: 'John', age: 25 }
  ];
  const sortedUsers = sortUsersByAge(users);
  console.log(sortedUsers);