console.log("Hi");
/*
var desiredGrade = 100
var collegeReadinessPercent = 115
var masteryWeight = 0.9
var collegeReadinessWeight = 0.1
var masteryPercent = (desiredGrade/masteryWeight) - (collegeReadinessPercent*collegeReadinessWeight/masteryWeight)
console.log(masteryPercent) //should be 98.3
*/

function myFuction(){

    var desiredGrade = document.getElementById("desiredGrade").value;
    console.log(desiredGrade)
    var collegeReadinessPercent = document.getElementById("collegeReadinessPercent").value;
    console.log(collegeReadinessPercent)
    var masteryWeight = document.getElementById("masteryWeight").value /100;
    var collegeReadinessWeight = document.getElementById("collegeReadinessWeight").value /100;
    var masteryPercent = (desiredGrade/masteryWeight) - (collegeReadinessPercent*collegeReadinessWeight/masteryWeight)
    console.log(masteryPercent)


    var ptsInputted = document.getElementById("ptsInputted").value;
    var ptsMaximumInputted = document.getElementById("ptsMaximumInputted").value;
    var ptsOnFinal = document.getElementById("ptsOnFinal").value;
    var gradeOnFinal = ((masteryPercent*ptsMaximumInputted)/100) + ((masteryPercent*ptsOnFinal)/100) - ptsInputted
    console.log (gradeOnFinal)
    alert("you will need to score at least " + gradeOnFinal + " pts on the final AKA get a " + (gradeOnFinal/ptsOnFinal)*100 + "% on the final")


}
/*

Final Grade Calculator:
We need to take the Mastery Percentage and multiply it by 100
Take that answer and multiply that by Mastery Weight%

Example: 85% of Mastery -> 85 -> multiply by 90% weight and that should get 76.5% of final grade

Repeat for College Readiness

Then add both up and you'll get final grade.

Do Desired grade - final grade???

Take with grain of salt:
Required = (Goal − Current × (100% − Final Weight)) / Final Weight

Grade = Mastery(90%) + CR(10%)

D = M*mw + C*cw

******   M = D/mw - C*cr/mw    Something's missing here  *******


M = 98.3
98.3*0.9 = 88.47 + 11.5 = 99.97

We need a way to bump up the 85.13 score on mastery to a 98.3 score on Mastery

63/74... add a new assignment, lets say it's going to be out of 26 Points
63+x/74+pts = M*0.1

X will give us the pts required to attain the Grade
x/pts will give us the % the student will need to get that grade

35.3/26 on the test means you need a 135.7% to raise your grade to 100%


FORMULA SOLVED:

1) Solve for M, the Mastery % the student needs so they can reach desired Grade
    M = D/mw - C*cr/mw
2) Plug into secondary equation
    pts they inputed + x/pts maximum inputted + points on final = M


    X = M* pts max inputted/100 + M* points on Final/100 - pts they inpuuted


    Solve for X
    X will be the points they need on their final.
    Do x/pts maximum and that'll give you the % you need.

    I think this is it chief!





85.13*90% = 76.617
115*10% = 11.5
76.617+11.5 = 88.117 -> Pretty Close to Huan's grade

—————————————————————————————————————————————————————————————


*/
/*
var ptsInputted = 63
var ptsMaximumInputted = 74
var ptsOnFinal = 26
var gradeOnFinal = ((masteryPercent*ptsMaximumInputted)/100) + ((masteryPercent*ptsOnFinal)/100) - ptsInputted
console.log (gradeOnFinal)
console.log ("you will need to score at least " + gradeOnFinal + " pts on the final")
console.log("AKA get a " + (gradeOnFinal/ptsOnFinal)*100 + "% on the final")
*/