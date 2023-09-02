const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjJmZTMyZjVhLTMxZDQtNDA4Zi1iM2U5LTI2NGM5ODViMDlmMi0xNjkzNTI0ODQxMDc5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiM2EyNDZlMTctZGY2My00ZDM1LWFlZmYtYjc2NmFlMzQyNDA3IiwidHlwZSI6InQifQ.cHM_NInyAeGuxf97TnZXE1BJQKmqB6vqhuXNxDLeEmA'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})