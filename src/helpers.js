import question from "./components/Question";
import answer from "./components/Answer";

export const shuffleAnswers = (question) => {
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers,
    ];

    return unshuffledAnswers
        .map((answer) => ({ sort: Math.random(), value: answer}))
        .sort((a,b) => a.sort - b.sort)
        .map((obj) => obj.value);
};

export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}