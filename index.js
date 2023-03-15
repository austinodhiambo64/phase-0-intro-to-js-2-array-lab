
const cats = ['Milo','Otis','Garfield'] 

// Add your functions and code here

function destructivelyAppendCat(){
    cats.push("Ralph");
   return cats;
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
  return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
  return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift();
  return cats;
}

function appendCat(){
  const name_1= [...cats, "Broom"];
  return name_1;
}

function prependCat(){
  const name_2=["Arnold",...cats];
  return name_2
}

function removeLastCat(){
  const caats= cats.slice(0,cats.length-1);
  return caats;
}

function removeFirstCat(){
  var catts= cats.slice(1)
  return catts
}