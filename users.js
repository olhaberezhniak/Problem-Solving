const arr = [{name: 'Alex'}, {name: 'Bob'}, {name: 'Pit'}]

export function getUserByName(users, name) { 
    return users.find( user => user.name === name);
}
