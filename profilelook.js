function lookUpProfile(name,prop){
    for (var i = 0; i < contacts.length; i++ ) {
        if (contacts [i].firstname === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Amelia" , "likes");


console.log(data);