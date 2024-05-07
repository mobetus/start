//Q1. make a string out of an array
{
  const fruits=['apple', 'banana', 'ornage' ];
  const result = fruits.join(',');
  console.log(result);
}
//Q2. make an array out of a string
{
  const frits= '사과, 키위, 바나나, 체리';
  const resulst = fruits.join(',');
  console.log(result);
}
//Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array= [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}
//Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this. enrolled = enrolled;
    this.score= score;
  }
}

const students= [
  new Studnet('A', 29, true, 45),
  new Studnet('B', 28, false, 80),
  new Studnet('C', 30, true, 90)
  new Studnet('D', 40, false, 66),
  new Studnet('E', 18, true, 88),

  //Q5. find a student with the score 90
  {
    const result = studnets.find((student) =>student.score===90);
    console.log(result);
  }
  //Q6. make an array of enrolled students
  {
    const result = students.filter((student)=> student.enrolled);
    console.log(result);
  }
  //Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((student) => CSSMathValue.score);
    console.log(result);
  }
  //Q8. check if there is a student with the score lower than 50
  {
    console.clear();
    const result= students.some((student) =>student.score <50);
    console.log(result);

    const result2= !students.every((student) =>student.score>=50);
    console.log(result2);
  }
  //Q9. compute students' average score
  {
    const result = students.reduce((prev, curr) => return prev + curr.score, 0);
    console.log(result);
  }
  //Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
      .map((student) => student.score)
      .filter((score) => score >=50)
      .join();
      console.log(result);
  }
  //Bonus! do Q10 sorted in ascending order 
  //result should be: '45, 66, 80, 90'
  {
    const result = students
      .map((student) => student. score)
      .sort((a, b) => b-a)
      .join();
    console.log(result);
  }