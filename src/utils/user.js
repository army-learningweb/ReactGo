function getAgeText(birthYear){
    return new Date().getFullYear()-birthYear
}

function getInitials(name){
    return [...name][0]
}

export {getAgeText, getInitials}