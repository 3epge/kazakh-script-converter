import { splitToWords, splitToLetters } from "./shared/util.js";
import alphabet from "./shared/alphabet.js";

function cyrillicToLatin(sentence) {
  const words = splitToWords(sentence);
  const convertedWords = words.map((word) => convertCyrillicToLatin(word));
  return convertedWords.join(" ");
}

function convertCyrillicToLatin(word) {
  const letters = splitToLetters(word);
  const convertedLetters = letters.map((letter) =>
    cyrillicToLatinLetter(letter)
  );
  return convertedLetters.join("");
}

function cyrillicToLatinLetter(letter) {
  return alphabet.find((obj) => obj.cyrillic === letter)?.latin || letter;
}

export default cyrillicToLatin;
