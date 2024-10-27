const genratedPwd = require("generate-password");

const pwd = genratedPwd.generate({
    length: 10,
    numbers: true,
    lowercase: true,
});

console.log(pwd);