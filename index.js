// Write your solution in this file!

// index.js

// Declare customerName in the global scope
var customerName = 'bob';

// Function to return the customerName
function returnsCustomerName() {
    return customerName;
}

// Function to modify the customerName variable
function upperCaseCustomerName() {
    // Convert customerName to uppercase
    customerName = customerName.toUpperCase();
}

// Function to set the best customer
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite the best customer
function overwriteBestCustomer(newFavorite) {
    bestCustomer = newFavorite;
}

// Function to change the least favorite customer
function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'initial least favorite'; // Declare leastFavoriteCustomer
    leastFavoriteCustomer = 'new least favorite'; // Attempt to reassign, this will throw an error
}

module.exports = {
    customerName,
    returnsCustomerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    changeLeastFavoriteCustomer
};