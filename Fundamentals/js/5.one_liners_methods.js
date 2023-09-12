

console.warn('----------Random Strings Example-----------')
// Random Strings
const randomString = Math.random().toString(36).slice(2);
console.info(randomString)
console.warn('----------Random Strings Example Example-----------')


console.warn('----------Extract Domain Name froam an Email Example-----------')

// Extract Domain Name from an email
let email = 'roger.acosta@cpven.com'
let getDomain = email.substring(email.indexOf('@') + 1);
console.log(email)
console.log(getDomain)

console.warn('----------Extract Domain Name froam an Email Example Example-----------')
