function generateAccountNumber() {
    return Date.now().toString().slice(-6) + Math.floor(100000 + Math.random() * 900000);
}

// Example Usage
const accountNumber = generateAccountNumber();
module.exports=accountNumber;