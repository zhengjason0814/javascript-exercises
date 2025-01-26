const findTheOldest = function(arr) {
    let allAges = arr.map((obj) => {
        
        if (!obj.yearOfDeath) {
            let currDate = new Date();
            return currDate.getFullYear() - obj.yearOfBirth;
        }
        return obj.yearOfDeath - obj.yearOfBirth;
    })

    let oldestPersonAge = allAges.reduce((maxAge,age) => {
        if (maxAge < age) return age;
        else return maxAge;
    },0);

    for (obj of arr) {
        if (!obj.yearOfDeath) {
            let currDate = new Date();
            let thisAge = currDate.getFullYear() - obj.yearOfBirth;
            if (thisAge == oldestPersonAge) return obj;
        } else {
            if ((obj.yearOfDeath - obj.yearOfBirth) == oldestPersonAge) return obj;
        }
    }
}

// Do not edit below this line
module.exports = findTheOldest;
