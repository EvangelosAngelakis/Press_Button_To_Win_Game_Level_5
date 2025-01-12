const messages = [
 "What has a face and two hands, but no arms or legs?"
];

let password = ['C', 'L', 'O', 'C', 'K'];
let inputSequence = [];
let currentIndex = 0;
let stopExecution = false;

function handleButtonPress(buttonCharacter) {
    checkPassword(buttonCharacter);
    if (!stopExecution) {
        displayPressedButtons();
    }
}

function checkPassword(buttonCharacter) {
    inputSequence.push(buttonCharacter);

    if (inputSequence.length === password.length) {
        if (inputSequence.every((char, index) => char === password[index])) {
            stopExecution = true;
            document.getElementById('dText').textContent = "CONGRATULATIONS. YOU WON!!!";
            document.getElementById('dText').style.backgroundColor = "cyan";
            displayPressedButtons();
            return;
        } else {
            document.getElementById('dText').innerText = 'Incorrect Password. Try again!';
        }
        inputSequence = [];
        resetPressedButtons();
    }
}

function displayPressedButtons() {
    const pressedButtonsElement = document.getElementById('dText2');
    pressedButtonsElement.textContent = `Password: ${inputSequence.join(' ')}`;
}

function resetPressedButtons() {
    const pressedButtonsElement = document.getElementById('dText2');
    pressedButtonsElement.textContent = '';
    inputSequence = []; 
}

function cycleMessage() {
    if (stopExecution) return;
    const dText = document.getElementById('dText');
    dText.innerText = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
    document.getElementById('dText').style.backgroundColor = "bisque";
    document.getElementById('dText').style.color = "black";
}

function resetPage() {
    location.reload();
}

