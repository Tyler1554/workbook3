

function parseAndDisplayName(name) {
  let positionOfFirstSpace = name.indexOf(" ");

  let first = name.substring(0, positionOfFirstSpace);
  
  let last = name.substring(positionOfFirstSpace + 1);

  console.log(`Name: ${name} \nFirst name: ${first} \nLast name: ${last}`);
}
parseAndDisplayName("Tyler Rugh");

parseAndDisplayName("Brad Yeager");

parseAndDisplayName("Teddy Faulk");