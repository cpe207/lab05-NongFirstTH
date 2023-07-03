function findTopNames(students) {
  a = students.filter((x) => x.score > 8).map((x) => x.name)
  return a 
}

const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];


console.log(findTopNames(students1));

module.exports = findTopNames;
