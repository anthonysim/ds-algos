function generateDocument(characters, document) {
  let docArr = document.split('');

  for (let char of characters) {
    if (docArr.includes(char)) {
      docArr.splice(docArr.indexOf(char), 1);
    }
  }
  return docArr.length === 0 ? true : false;
}