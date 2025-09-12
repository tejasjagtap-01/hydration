let goal=0;
let intake=0;

const goalInput = document.getElementById("goalInput");
const setGoalBtn = document.getElementById("setGoalBtn");
const goalText = document.getElementById("goalText");
const intakeText = document.getElementById("intakeText");
const percentage = document.getElementById("percentage");
const progressCircle = document.getElementById("progressCircle");
const logs = document.getElementById("logs");

setGoalBtn.addEventListener("click",() =>{
    goal=parseInt(goalInput.value) || 0;
    intake = 0;
    logs.innerHTML="";
    updateUI();
});

function addWater(amount){
    if(goal === 0){
        alert("Please Set A Goal First");
        return;
    }
    intake += amount;
    if(intake > goal) intake =goal;
    updateUI();

    const time = new Date().toLocaleDateString();
    const li = document.createElement("li");
    li.textContent =`${time} - Added${amount}ml`;
    logs.prepend(li);
}

function updateUI(){
    goalText.textContent = `Goal: ${goal} ml`;
    intakeText.textContent = `Total Intake: ${intake} ml`;

    let percent = goal > 0 ? Math.round((intake / goal)*100) : 0;
    if (percent > 100) percent = 100;

    percentage.textContent = `${percent}%`;

    const offset = 440 - (440*percent)/100;
    progressCircle.style.strokeDashoffset = offset;

    if (intake >=goal && goal >0){
        intakeText.textContent += "Goal Achieved!"
        alert("Congratulations You achieved Your Target");
    }
}