import { beerDataComparison } from "./beer-comparison";
import { beerCharacteristicsEN } from "./english-beer-characteristic";
import { beerCharacteristicsPT } from "./portuguese-beer-characteristic";
import { ENGLISHQUESTIONS, PORTUGUESEQUESTIONS } from "./questions-per-language";
import { recipeStyles } from "./recipe-styles";

export const PORTUGUESE_QUESTIONS = {
    characteristicsQuestions:  [
      {question: PORTUGUESEQUESTIONS.QS1, title: PORTUGUESEQUESTIONS.QS1TITLE, characteristcs: beerCharacteristicsPT},
      {question: PORTUGUESEQUESTIONS.QS3, title: PORTUGUESEQUESTIONS.QS3TITLE},
    ],
    proccessAndSuppliesQuestions:  [
      {question: PORTUGUESEQUESTIONS.QS9, title: PORTUGUESEQUESTIONS.QS9TITLE},
      {question: PORTUGUESEQUESTIONS.QS11, title: PORTUGUESEQUESTIONS.QS11TITLE},
      {question: PORTUGUESEQUESTIONS.QS13, title: PORTUGUESEQUESTIONS.QS13TITLE},
      {question: PORTUGUESEQUESTIONS.QS15, title: PORTUGUESEQUESTIONS.QS15TITLE},
      {question: PORTUGUESEQUESTIONS.QS8, title: PORTUGUESEQUESTIONS.QS8TITLE},
      {question: PORTUGUESEQUESTIONS.QS4, title: PORTUGUESEQUESTIONS.QS4TITLE},
    ],
    comparisonQuestions: {question: PORTUGUESEQUESTIONS.QS0, title: PORTUGUESEQUESTIONS.QS0TITLE, comparison: beerDataComparison},
    recipeQuestions: {question: PORTUGUESEQUESTIONS.QS14, title: PORTUGUESEQUESTIONS.QS14TITLE, recipe: recipeStyles}
  }

export const ENGLISH_QUESTIONS = {
    characteristicsQuestions:  [
      {question: ENGLISHQUESTIONS.QS1, title: ENGLISHQUESTIONS.QS1TITLE, characteristcs: beerCharacteristicsEN},
      {question: ENGLISHQUESTIONS.QS3, title: ENGLISHQUESTIONS.QS3TITLE},
    ],
    proccessAndSuppliesQuestions:  [
      {question: ENGLISHQUESTIONS.QS9, title: ENGLISHQUESTIONS.QS9TITLE},
      {question: ENGLISHQUESTIONS.QS11, title: ENGLISHQUESTIONS.QS11TITLE},
      {question: ENGLISHQUESTIONS.QS13, title: ENGLISHQUESTIONS.QS13TITLE},
      {question: ENGLISHQUESTIONS.QS15, title: ENGLISHQUESTIONS.QS15TITLE},
      {question: ENGLISHQUESTIONS.QS8, title: ENGLISHQUESTIONS.QS8TITLE},
      {question: ENGLISHQUESTIONS.QS4, title: ENGLISHQUESTIONS.QS4TITLE},
    ],
    comparisonQuestions: {question: ENGLISHQUESTIONS.QS0, title: ENGLISHQUESTIONS.QS0TITLE, comparison: beerDataComparison},
    recipeQuestions: {question: ENGLISHQUESTIONS.QS14, title: ENGLISHQUESTIONS.QS14TITLE, recipe: recipeStyles}
  }