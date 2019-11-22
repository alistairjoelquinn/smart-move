module.exports.validation = (first, last) => {
    let regexFirst = RegExp('^[a-zA-Z ]+$');
    let firstReged = regexFirst.test(first);
    let regexLast = RegExp('^[a-zA-Z ]+$');
    let lastReged = regexLast.test(last);

    if(firstReged && lastReged){
        return true;
    } else {
        console.log("VALIDATION FAILED");
    }
};
