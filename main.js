// Exercise 1

var gpa = 0

if (gpa < 2.0) {
  console.log('Student is on academic probation.')
} else if (gpa >= 2.0) {
  console.log('Student is in good standing')
} else if (gpa >= 3.40 && gpa <= 3.59) {
  console.log('Student is in good standing with cum laude.')
} else if (gpa >= 3.60 && gpa <= 3.79) {
  console.log('Student is in good standing with magna cum laude.')
} else if (gpa > 3.80) {
  console.log('Student is in good standing with summa cum laude.')
}
