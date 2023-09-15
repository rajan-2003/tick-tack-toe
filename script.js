let currPlayer = "X";
let winnerFound = false;
const arr = Array(9).fill(null);
const cont = document.getElementById("cont");
const winnerMessage = document.getElementById("winnerMssg");
const button=document.getElementById("btn");
// console.log(cont);
function checkWinner() {
  if (
    (arr[0] !== null && arr[0] === arr[1] && arr[0] === arr[2]) ||
    (arr[3] !== null && arr[3] === arr[4] && arr[3] === arr[5]) ||
    (arr[6] !== null && arr[6] === arr[7] && arr[6] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[3] && arr[0] === arr[6]) ||
    (arr[1] !== null && arr[1] === arr[4] && arr[1] === arr[7]) ||
    (arr[2] !== null && arr[2] === arr[5] && arr[2] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[4] && arr[0] === arr[8]) ||
    (arr[2] !== null && arr[2] === arr[4] && arr[2] === arr[6])
  ) {
    return true;
  }
  return false;
}
cont.addEventListener("click", (event) => {
  const currDivId = Number(event.target.id);
  const currDiv = document.getElementById(`${currDivId}`);
  if (arr[currDivId] === null && winnerFound === false) {
    if (currPlayer === "X") {
      currDiv.style.color = "Red";
    } else {
      currDiv.style.color = "blue";
    }
    currDiv.innerText = currPlayer;
    arr[currDivId] = currPlayer;
    if (checkWinner()) {
      winnerFound = true;
      winnerMessage.innerText = `${currPlayer} is the winner`;
      button.style.display='block';
    }
    let cnt = 0;
    for(let i=0;i<9;i++){
        if(arr[i]!==null)cnt++;
    }
    console.log(cnt);
    if (cnt === 9 && winnerFound === false) {
      winnerMessage.innerText = "Draw";
      button.style.display='block';
    }
    currPlayer = currPlayer == "X" ? "0" : "X";
  }
})

button.addEventListener("click", () => {
  winnerFound = false;
  arr.fill(null);
  winnerMessage.innerText = "";
  document.querySelectorAll(".col").forEach((cell) => {
    cell.innerText = "";
  });
  currPlayer = "X";
  button.style.display="none";
});
