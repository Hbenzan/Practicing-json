import data from './rawBooks.json' with { type: 'json' };
console.log(data.length);

data.length 
var allbooks = data.length

const readbooks = data.filter(checkRead);

function checkRead (read){
    console.log(read)
    return read;
}

checkRead;

//1\\\

// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
