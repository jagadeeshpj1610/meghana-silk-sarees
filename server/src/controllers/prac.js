const arr = ["hemeswar", "meghana", "rajeswari", "madhava"];

const matched = arr.filter((element) => {
  console.log(element)
  return element.includes("");
})

console.log(matched)