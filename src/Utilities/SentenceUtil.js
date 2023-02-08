import {patternForReplacement} from "../Constants.js";


class SentenceUtil {
    #word;
    #originalSentence;
    #sentenceWithReplacement;

    constructor(word) {
        this.#word = word;
        this.#originalSentence = `Tommy has a ${word}`;
    }

    /** Static method for creating a sentence. 
    The sentence should be contain a word for predicting.
    * @param {String} word: Word from database to predict.
    * @return {String}      Generated sentence.
    */
    static createSentence(word) {
        return new SentenceUtil(word);
    }

    /** Getter for original Sentence */
    get originalSentence() {
        return this.#originalSentence;
    }

    /** Getter for sentence with replacement */
    get sentenceWithReplacement() {
        // Workaround
        this.#sentenceWithReplacement = this.#originalSentence
            .split(this.#word)
            .map(function(str) {return str === "" ? patternForReplacement : str})
            .join("")
            .trim();
        return this.#sentenceWithReplacement;
    }
}

export default SentenceUtil;