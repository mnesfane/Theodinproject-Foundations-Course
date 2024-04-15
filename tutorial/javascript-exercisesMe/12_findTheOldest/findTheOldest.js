const getAge= function(person){
    if(person.yearOfDeath)
        return person.yearOfDeath - person.yearOfBirth
    else{
        let date = new Date()
        return date.getFullYear() - person.yearOfBirth
    }
}

const findTheOldest = function(people) {
    return people.reduce(function(oldestPers, currentPers){
        const currentPersAge = getAge(currentPers)
        const oldestPersAge = getAge(oldestPers)
        return currentPersAge > oldestPersAge ? currentPers : oldestPers
    })
};

// console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
