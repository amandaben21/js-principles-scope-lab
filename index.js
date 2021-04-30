// Write your solution in this file!

var customerName = 'bob'; // declare customerName to be bob in global scope and returns the customerName

function upperCaseCustomerName() { // modifies the customerName variable
    customerName = 'BOB'
}

function setBestCustomer() {
    bestCustomer = 'not bob' // setBestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob' 
}

const leastFavoriteCustomer = 'is not defined'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'is not defined'
}
