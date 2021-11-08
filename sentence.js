class Sentence {
    constructor(sentence) {
        this.text = sentence;
        this.selected = false;
    }
}

const sentence = [
    new Sentence("הומואים ולסבים"),
    new Sentence("היי וואוו!!"),
    new Sentence("מה זה הרעשים האלה"),
    new Sentence("מה בלעת פטיפון??"),
    new Sentence("יונתן בן משה במילעל"),
    new Sentence("פגשתי פעם את..."),
    new Sentence("יש לי חתן אתיופי"),
    new Sentence("יש לי חבר שהוא"),
    new Sentence("חתונות אזרחיות"),
    new Sentence("בן גביר"),
    new Sentence("הסתכלתי לו בלבן של העיניים!!")
];

let queue = [];