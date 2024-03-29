

export function phoneValidation(phone) {
    // const regexP = /(\D|[a-z]|[A-Z]|!@#$%^&*()_-+={}:;'"?.`~|[^0000000000*]|[^1111111111*]|[^2222222222*]|[^3333333333*]|[^4444444444*]|[^5555555555*]|[^6666666666*]|[^7777777777*]|[^8888888888*]|[^9999999999*]|[^0123456789*]|[^1234567890*])/g

    const regexP = /0000000000|1111111111|2222222222|3333333333|4444444444|5555555555|6666666666|7777777777|8888888888|9999999999|0123456789|1234567890|0234567891|0345678912/
    // let inputCountries = process.env.profileConfig.mobileValidation;
    // var item
    // if( inputCountries.hasOwnProperty(countryCode) ) {
    //     item = inputCountries[countryCode];
    // }

    // let numberLength = item?.maxValue

    const regex = /\d/
    // const sameSeqReg = new RegExp(`(\\d)\\1{${10},}`, "g");
    const sameSeqReg = /^(\d)\1{10}$/
    const adjSeqReg = /(12345678)|(1234567890)/
    const zeroStartReg = /^(?!0)[0-9]*$/ // false if number start with zero

    var result = null;
    const validation = regex.test(phone);
    const validPhone = regexP.test(phone);
    const validationZero = zeroStartReg.test(phone)
    const valSeq = sameSeqReg.test(phone);
    const adfSeq = adjSeqReg.test(phone);

    // if (!validation) {
    //     result = "Phone Number Should Be Numbers Only, Enter A Valid Phone"
    // }
    // else 
    if (valSeq) {
        result = "Same Numbers Are Not A Valid Phone Number"
    }
    else if (!validationZero) {
        result = "Starting With '0' Is Not A Valid Phone Number"
    }
    else if (adfSeq) {
        result = "Enter A Valid Phone Number"
    }
    else if (validPhone) {
        result = "Same Numbers Are Not A Valid Phone Number"
    }
    // else if (phone.length !== 12) {
    //     result = "Enter 10 digit Phone Number"
    // }
    else {
        result = null
    }

    return result

}


export function emailValidation(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // const regex = /[a-zA-Z0-9]+\.?[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}/g;
    const regex = /[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}/
    const regexPeriod = /^\.|\.\.|#/g

    var result = null;
    var validation = regex.test(email);

    if (!validation) {
        result = "Enter A Valid Email Address"
    } else if (regexPeriod.test(email)) {
        result = "Enter A Valid Email Address"
    }
    else {
        result = null
    }

    return result
}