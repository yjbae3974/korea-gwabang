let first_1 = document.getElementById("백신여부1");
let first_2 = document.getElementById("백신여부2");
let second_1 = document.getElementById("백신종류1");
let second_2 = document.getElementById("백신종류2");
let third_1 = document.getElementById("백신현황1");
let third_2 = document.getElementById("백신현황2");
let fourth_1 = document.getElementById("백신경과1");
let fourth_2 = document.getElementById("백신경과2");

console.log(second_2);
function 관리() {
  console.log("시발");
  if (first_1.checked === true) {
    second_1.disabled = false;
    second_2.disabled = false;
    if (second_1.checked === true) {
      third_1.disabled = false;
      third_2.disabled = false;
      if (!third_1.checked && !third_2.checked) {
        fourth_1.disabled = true;
        fourth_2.disabled = true;
      }
      if (third_1.checked === true) {
        fourth_1.disabled = true;
        fourth_2.disabled = true;
      }
      if (third_2.checked === true) {
        fourth_1.disabled = false;
        fourth_2.disabled = false;
      }
    }
    if (second_2.checked === true) {
      third_1.disabled = true;
      third_2.disabled = true;
      fourth_1.disabled = false;
      fourth_2.disabled = false;
    }
  } else {
    second_1.disabled = true;
    second_2.disabled = true;
    third_1.disabled = true;
    third_2.disabled = true;
    fourth_1.disabled = true;
    fourth_2.disabled = true;
  }
}
