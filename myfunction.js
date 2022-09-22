

export const fnCalculate = (nr1, nr2, operation) => {
    if (operation == '+') {
        return nr1 + nr2;
    } else if (operation == '-') {
        return nr1 - nr2;
    } else if (operation == '*') {
        return nr1 * nr2;
    } else if (operation == '/') {
        return nr1 / nr2;
    } else {
        return ('Err ‚= ' + 'p1 = ' + nr1 + ' p2 = ' + nr2 + ' Operation = ' + operation);
    }
}  