import data from './rawBooks.json' with { type: 'json' };
console.log(data.length);

data.length 
var allbooks = data.length

const readbooks = data.filter(checkRead);

function checkRead (read){
    console.log(read["read?"]);
    if("Yes" == read["read?"]){
        return read;
    }
}

console.log(readbooks.length)

console.log(readbooks.length / data.length);

// math to be done to find the percentage 707/1558

//1\\\

// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


//2\\ how many have audio books


console.log(data.length);

data.length 
var allbooks = data.length

const audiobooks = data.filter(audio);

function audio (read){
    console.log(read["audio?"]);
    if("Yes" == read["audio?"]){
        return read;
    }
}
console.log ("****QUESTION 2***")

console.log (audiobooks.length);

//STEP 1: figure out how many diff genere's / 2 couting how many books are in each genre 3 figure out which one has the most

const uniqueData = []
data.forEach(item => {
    if (!uniqueData.includes(item ["category"])) {
        uniqueData.push(item["category"])
    }
})

const counts = []

for (let i = 0; i < uniqueData.length; i++) {
    console.log (uniqueData[i]);
const fantasy = data.filter(item => {
    if (item["category"] === uniqueData[i]) {
        return(item);
    }
});
console.log (fantasy.length);


//uniqueData.forE

//console.log(uniqueData) 
}