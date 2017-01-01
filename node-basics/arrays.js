var grades = [100,50, 75];
grades.push(79);
var totalGrade = 0;

grades.forEach(function (grade){
	totalGrade += grade;
	console.log('Current grade is: '+ totalGrade);
});
var average = totalGrade / grades.length;
console.log('Average: ' + average);
