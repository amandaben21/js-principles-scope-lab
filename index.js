// Write your solution in this file!

var customerName = 'bob'; // declare customerName to be bob in global scope and returns the customerName

function upperCaseCustomerName() { // modifies the customerName variable
    customerName = 'BOB'
}

function setBestCustomer() {
    bestCustomer = 'not bob' // setBestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob' // overwrites the best customer
}

const leastFavoriteCustomer = 'is not defined' // declared const as a global scope now. 

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'is not defined' // unsuccessfully tries to reassign the least favorite customer
}
