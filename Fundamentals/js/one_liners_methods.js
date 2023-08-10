

// Random Strings
const randomString = Math.random().toString(36).slice(2);
console.info(randomString)

// Extract Domain Name from an email
let email = 'roger.acosta@cpven.com'
let getDomain = email.substring(email.indexOf('@') + 1);
console.log(getDomain)