//initialize global variables
let button = document.getElementById("button");
let mixedMessage = document.getElementById("mixed-message");

function generateMixedMessage() {
    //initialize local variables
    sentence = "";
    //create arrays that will store random words to create a random sentence
    determiners = ["My", "Our", "Your", "His", "Her", "Their", "First", "Second", "Third", "Each", "Every", "No", "Any", "Another", "The", "Rather", "All of", "Its", "Next", "Last"];
    adjectives = ["attractive", "bald", "beautiful", "chubby", "fit", "calm", "eager", "jolly", "lively", "witty", "pitiful", "scary", "uptight", "worried", "fierce", "big", "puny", "short", "tiny", "little"];
    subject = ["animal", "hand", "lion", "mouse", "fan", "desk", "John", "Katy", "plant", "elephant", "keyboard", "computer", "key", "letter", "quilt", "bed", "door", "shelf", "bunny", "sword"];
    verb = ["flew", "flies", "will fly", "accelerated", "applied", "computed", "devised", "delegated", "dealt", "chose", "will aid", "continues", "educates", "ran", "will run", "runs", "saw", "will see", "sees", "quits"];
    adverb = ["awkwardly", "absently", "curiously", "cautiously", "dearly", "furiously", "annually", "briskly", "almost", "boldly", "closely", "deeply", "defiantly", "easily", "badly", "extremely", "daily", "freely", "evenly", "cheerfully"];
    //combine arrays
    wordArray = [determiners, adjectives, subject, verb, adverb];
    //generate mixed message
    wordArray.forEach(function(word, i, array) {
        word = word[Math.floor(Math.random() * (word.length - 1))];
        sentence += word;
        //add space between words, but not between the last word and the period
        if (i != array.length - 1) {
            sentence += " ";
        }
    })
    //end sentence
    sentence += ".";
    //display sentence
    mixedMessage.innerHTML = sentence;
}

button.addEventListener("click", generateMixedMessage);