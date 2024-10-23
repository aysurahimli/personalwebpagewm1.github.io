function checkGrade() {
    let fullName = prompt("Enter your full name:");
    let grade = parseFloat(prompt("Enter your course grade:"));

    alert(`Hello, ${fullName}!`);

    if (grade >= 60) {
        alert("You passed the course!");
        
        let letterGrade;
        if (grade >= 90) {
            letterGrade = 'A';
        } else if (grade >= 80) {
            letterGrade = 'B';
        } else if (grade >= 70) {
            letterGrade = 'C';
        } else  {
            letterGrade = 'D';
        }

        alert(`Your letter grade is ${letterGrade}.`);
        
    } else {
        alert("You failed the course.")
    }
}

checkGrade();