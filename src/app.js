// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
// Progression 2: add 3 variables: title, currIndex, check
const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 4;
const NEG_INF = -1000000;

function createPop(arrayOfNumbers, itemToSearch) {
    const title = document.createElement("h3");
    let currIndex = NEG_INF;
    let check = false;
    // Progression 3: create a function "searchForElement"
    function searchForElement() {
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            if (arrayOfNumbers[i] === itemToSearch) {
                currIndex = i;
                check = true;
                break;
            }
        }
    }
    searchForElement();
    // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
    // to return the desired output.
    return function() {
        if (check) {
            return (title.textContent = `The item is present and is at index ${currIndex}`);
        } else {
            return (title.textContent = `The item is not present and is at index ${currIndex}`);
        }
    };
}
const popFunction = createPop(arrayOfNumbers, itemToSearch);
popFunction();