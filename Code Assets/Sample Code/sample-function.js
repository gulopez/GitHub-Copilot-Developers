// Function to add two numbers
function add(a, b) {
    if (a == null || b == null) {
        throw new Error("Both arguments must be non-null");
    }
    return a + b;
}

// Function to add all numbers in a list
function addList(list) {
    if (!Array.isArray(list)) {
        throw new Error("Argument must be an array");
    }
    return list.reduce((acc, curr) => {
        if (curr == null) {
            throw new Error("Array elements must be non-null");
        }
        return acc + curr;
    }, 0);
}

// Function to find out if a number is prime
function isPrime(num) {
    if (num == null) {
        throw new Error("Argument must be non-null");
    }
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}