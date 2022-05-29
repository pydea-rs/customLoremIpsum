const $ = (id) => document.getElementById(`#${id}`);
const reader = new FileReader();
const defaultParagraphInput = `A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.
This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.
Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events;
compare or contrast two or more things; classify items into categories; or describe causes and effects.
Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence.
Introduction: the first section of a paragraph; should include the topic sentence and any other sentences at the beginning of the paragraph that give background information or provide a transition.
Body: follows the introduction; discusses the controlling idea, using facts, arguments, analysis, examples, and other information.
Conclusion: the final section; summarizes the connections between the information discussed in the body of the paragraph and the paragraph’s controlling idea.
The following paragraph illustrates this pattern of organization. In this paragraph the topic sentence and concluding sentence (CAPITALIZED) both help the reader keep the paragraph’s main point in mind.
A number of other techniques that you can use to establish coherence in paragraphs are described below.
Create parallel structures. Parallel structures are created by constructing two or more phrases or sentences that have the same grammatical structure and use the same parts of speech.
By creating parallel structures you make your sentences clearer and easier to read. In addition, repeating a pattern in a series of consecutive sentences helps your reader see the connections between ideas.
In the paragraph above about scientists and the sense of sight, several sentences in the body of the paragraph have been constructed in a parallel way.
The parallel structures (which have been emphasized) help the reader see that the paragraph is organized as a set of examples of a general statement.`

function createArrayOfParagraphs(paragraphs) {
    // process the input file or text, as an array of paragraphs
    // and filter actual text by removing all empty lines
    return paragraphs.split('\n').filter(p => p !== '\n' && p != '\r');
}
let loremParagraphs = createArrayOfParagraphs(defaultParagraphInput);

function readInputFile() {
    reader.onload = function() {
        loremParagraphs = createArrayOfParagraphs(reader.result);
    }
    reader.readAsText(this.files[0]);
};

function generateParagraphs() {
    const numberOfParagraphs = Number($('txtNumberOfParagraphs').value);
    const randomText = Array(numberOfParagraphs).fill(0).map(i => {
        const rand = Math.random() * loremParagraphs.length;
        const index = Math.floor(rand);
        return loremParagraphs[index];
    });
    $('randomParagraphs').innerHTML = randomText.join('<br><br>');
}

function onLoad() {
    $('btnGenerate').addEventListener('click', generateParagraphs);
    $('inputFile').addEventListener('change', readInputFile);
};

window.addEventListener('load', onLoad);