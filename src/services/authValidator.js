import validator from "validator";
import { passwordStrength } from "check-password-strength"

function emailVerifier(email) {
    if (validator.isEmail(email)) {
        return true
    } else {
        return false
    }
}

function passVerifier(pwd) {
    console.log("this is pass verifier function");
    console.log(passwordStrength(pwd));

    let passDetail = passwordStrength(pwd)

    if (passDetail.value === "Medium" || passDetail.value === "Strong") {
        return true
    } else {
        return false
    }
}

// passVerifier("Savan@321")

export {emailVerifier, passVerifier}