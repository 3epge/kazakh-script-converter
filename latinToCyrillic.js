import { splitToWords, splitToLetters } from "./shared/util.js";
import alphabet from "./shared/alphabet.js";

function latinToCyrillic(sentence) {
  const words = splitToWords(sentence);
  const convertedWords = words.map((word) => convertLatinToCyrillic(word));
  return convertedWords.join(" ");
}

function convertLatinToCyrillic(word) {
  const letters = splitToLetters(word);
  const convertedLetters = letters.map((letter) =>
    latinToCyrillicLetter(letter)
  );
  return convertedLetters.join("");
}

function latinToCyrillicLetter(letter) {
  return alphabet.find((obj) => obj.latin === letter)?.cyrillic || letter;
}

export default latinToCyrillic;
