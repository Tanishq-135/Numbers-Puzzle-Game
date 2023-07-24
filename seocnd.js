function displayValue() {
  var a = [];
  a[0] = Number(document.getElementById("one").value);
  a[1] = Number(document.getElementById("two").value);
  a[2] = Number(document.getElementById("three").value);
  a[3] = Number(document.getElementById("four").value);
  a[4] = Number(document.getElementById("five").value);
  a[5] = Number(document.getElementById("six").value);
  a[6] = Number(document.getElementById("seven").value);
  a[7] = Number(document.getElementById("eight").value);
  a[8] = Number(document.getElementById("nine").value);
  a[9] = Number(document.getElementById("ten").value);
  a[10] = Number(document.getElementById("eleven").value);
  a[11] = Number(document.getElementById("twelve").value);

  var text = "";

  if (
    a[0] == a[1] - 1 ||
    a[0] == a[1] + 1 ||
    a[0] == a[4] - 1 ||
    a[0] == a[4] + 1 ||
    a[0] == a[1] ||
    a[0] == a[4]
  ) {
    text = "Just there, Try Again";
  } else if (
    a[1] == a[2] - 1 ||
    a[1] == a[2] + 1 ||
    a[1] == a[4] - 1 ||
    a[1] == a[4] + 1 ||
    a[1] == a[5] - 1 ||
    a[1] == a[5] + 1 ||
    a[1] == a[2] ||
    a[1] == a[4] ||
    a[1] == a[5]
  ) {
    text = "Just there, Try Again";
  } else if (
    a[2] == a[3] - 1 ||
    a[2] == a[3] + 1 ||
    a[2] == a[5] - 1 ||
    a[2] == a[5] + 1 ||
    a[2] == a[3] ||
    a[2] == a[5]
  ) {
    text = "Just there, Try Again";
  } else if (a[3] == a[5] - 1 || a[3] == a[5] + 1 || a[3] == a[5]) {
    text = "Just there, Try Again";
  } else if (
    a[4] == a[6] - 1 ||
    a[4] == a[6] + 1 ||
    a[4] == a[7] - 1 ||
    a[4] == a[7] + 1 ||
    a[4] == a[6] ||
    a[4] == a[7]
  ) {
    text = "Just there, Try Again";
  } else if (
    a[5] == a[7] - 1 ||
    a[5] == a[7] + 1 ||
    a[5] == a[8] - 1 ||
    a[5] == a[8] + 1 ||
    a[5] == a[9] - 1 ||
    a[5] == a[9] + 1 ||
    a[5] == a[7] ||
    a[5] == a[8] ||
    a[5] == a[9]
  ) {
    text = "Just there, Try Again";
  } else if (
    a[6] == a[7] - 1 ||
    a[6] == a[7] + 1 ||
    a[6] == a[10] - 1 ||
    a[6] == a[10] + 1 ||
    a[6] == a[7] ||
    a[6] == a[10]
  ) {
    text = "Just there, Try Again";
  } else if (
    a[7] == a[8] - 1 ||
    a[7] == a[8] + 1 ||
    a[7] == a[10] - 1 ||
    a[7] == a[10] + 1 ||
    a[7] == a[8] ||
    a[7] == a[10]
  ) {
    text = "Just there, Try Again";
  } else if (
    a[8] == a[9] - 1 ||
    a[8] == a[9] + 1 ||
    a[8] == a[10] - 1 ||
    a[8] == a[10] + 1 ||
    a[8] == a[11] - 1 ||
    a[8] == a[11] + 1 ||
    a[8] == a[9] ||
    a[8] == a[10] ||
    a[8] == a[11]
  ) {
    text = "Just there, Try Again";
  } else if (a[9] == a[11] - 1 || a[9] == a[11] + 1 || a[9] == a[11]) {
    text = "Just there, Try Again";
  } else {
    text = "Great. You Cracked Level 2.";
  }

  // Get the output element
  var outputElement = document.getElementById("output");

  // Set the output element's text to the input value
  outputElement.textContent = text;

  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  location.reload();
}
