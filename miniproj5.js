/* calculate the average of 3 numbers */
function calculateAverage(n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

/* convert an alphabetic grade to a numeric grade */
function convertAlphaToNumeric(GPA) {
    var grades = ["A","B","C","D"];
    var marks = [100,85,70,60];
    var mark = 0;
    for (grade in grades) {
        if (GPA === grades[grade]) {
            mark = marks[grade];
            break;
        }
    }
    return mark;
}

/* takes the 3 inserted values in the form and calculates the average GPA using
the two functions which you previously created */
function myGPA (a1, a2, a3) {
    return calculateAverage (convertAlphaToNumeric(a1),convertAlphaToNumeric(a2),convertAlphaToNumeric(a3));
}