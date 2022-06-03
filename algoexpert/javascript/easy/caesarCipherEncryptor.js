function caesarCipherEncryptor(str, k) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let key = k % 26;
  let res = '';

  for (let char of str) {
    let pos = alphabet.indexOf(char);
    if (pos + k >= 26) {
      pos = [(pos + k) % 26];
      res += alphabet[pos];
    } else {
      res += alphabet[pos + k];
    }
  }
  return res;
}