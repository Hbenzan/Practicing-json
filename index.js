import data from './rawBooks.json' with { type: 'json' };
console.log(data.length);

data.length 
var allbooks = data.length

const readbooks = data.filter(checkRead);

// function checkRead (read){
//     console.log(read["read?"]);
//     if("Yes" == read["read?"]){
//         return read;
//     }
// }

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

  counts.push (fantasy.length);

    //uniqueData.forE

    //console.log(uniqueData) 
}
console.log(counts);

function findMax(counts) {
    if (counts.length === 0) {
    }
    let largest = counts[0];
    for (let i = 1; i < counts.length; i++) {
      if (counts[i] > largest) {
        largest = counts[i];
      }
    }
    return largest;
  }
  
  const max = findMax(counts);
  const index = counts.indexOf (max);
  console.log (index);
  console.log(max); // Output: 8



  uniqueData.at (index);
  console.log (uniqueData.at(index));



  //filter out the books that haven't been read / or use for loop

  console.log(readbooks.length);


  function checkRead (read){
      console.log(read["read?"]);
      if("Yes" == read["read?"]){
          return read;
      }
  }
  
  console.log(readbooks.length)

  const yearCounts = {};
  
  let maxYear = "";
  let maxBook = 0;




// Loop through each read book to get the year it was bought and count how many books were read that year
  for (const book of readbooks) {

    const datastring = book ["Date Bought"];
    
    // Get the last 4 characters from the "Date Bought" string to get the year
    const year = datastring.charAt(datastring.length - 4) +
    datastring.charAt(datastring.length - 3) +
    datastring.charAt(datastring.length - 2) +
    datastring.charAt(datastring.length - 1);

    // Count how many books were read in that year
    if (!yearCounts[year]){
        yearCounts[year] = 1;
    } else {
        yearCounts[year] += 1;
    }
    }

// Loop through the `yearCounts` object to find the year with the most books read
    for(const year in yearCounts) {
        if (yearCounts[year] > maxBook) {
            maxYear = year;
            maxBook = yearCounts[year];
        }
    }
    
    // Print the year with the most books read and the number of books read that year
    console.log(maxYear);
    console.log(maxBook)

  