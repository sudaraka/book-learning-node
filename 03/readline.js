var readline = require('readline');

// Create a new interface
var interface = readline.createInterface(process.stdin, process.stdout, null);

// Ask question
interface.question('>> What is the meaning of life? ', function(answer) {
    console.log('About the meaning of life, you said ' + answer);
    interface.setPrompt('>>');
    interface.prompt();
});

// Function to close interface
function closeInterface() {
    console.log('Leaving interface...');
    process.exit();
}

// Listen for .leave
interface.on('line', function(cmd) {
    if('.leave' === cmd.trim()) {
        closeInterface();
        return;
    }
    else {
        console.log('Repeating command: ' + cmd);
    }

    interface.setPrompt('>>');
    interface.prompt();
});

interface.on('close', function() {
    closeInterface();
});
