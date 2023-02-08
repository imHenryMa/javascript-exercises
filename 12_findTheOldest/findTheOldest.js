const findTheOldest = function(persons) {

    let oldest ={};
    persons.forEach(
        (person) => {
            //If they have a death date, then calculating oldest is simple
            let age;
            if("yearOfDeath" in person){
                age = person.yearOfDeath - person.yearOfBirth;
            } else {
                age = new Date().getFullYear() - person.yearOfBirth;
            }

            //Check to see if they are the oldest
            //If oldest doesn't have anythingyet, then add it
            if(!("age" in oldest) || age >= oldest.age){
                oldest = {
                    "person": person,
                    "age": age,
                };
            }
        }
    );

    return oldest.person;

};

// Do not edit below this line
module.exports = findTheOldest;
