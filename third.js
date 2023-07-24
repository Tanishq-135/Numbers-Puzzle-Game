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
  a[12] = Number(document.getElementById("thirteen").value);
  a[13] = Number(document.getElementById("fourteen").value);
  a[14] = Number(document.getElementById("fifteen").value);

  var text = "";

  if (
    a[0] == a[1] - 1 ||
    a[0] == a[1] + 1 ||
    a[0] == a[4] - 1 ||
    a[0] == a[4] + 1 ||
    a[0] == a[1] ||
    a[0] == a[4]
  ) {
    text = "Hmm, Seems Difficult, Try Again";
  } else if (
    a[1] == a[4] - 1 ||
    a[1] == a[4] + 1 ||
    a[1] == a[5] - 1 ||
    a[1] == a[5] + 1 ||
    a[1] == a[4] ||
    a[1] == a[5]
  ) {
    text = "Hmm, Seems Difficult, Try Again";
  } else if (
    a[2] == a[3] - 1 ||
    a[2] == a[3] + 1 ||
    a[2] == a[5] - 1 ||
    a[2] == a[5] + 1 ||
    a[2] == a[6] - 1 ||
    a[2] == a[6] + 1 ||
    a[2] == a[3] ||
    a[2] == a[5] ||
    a[2] == a[6]
  ) {
    text = "Hmm, Seems Difficult, Try Again";
  } else if (a[3] == a[6] - 1 || a[3] == a[6] + 1 || a[3] == a[6]) {
    text = "Hmm, Seems Difficult, Try Again";
  } else if (
    a[4] == a[7] - 1 ||
    a[4] == a[7] + 1 ||
    a[4] == a[8] - 1 ||
    a[4] == a[8] + 1 ||
    a[4] == a[7] ||
    a[4] == a[8]
  ) {
    text = "Hmm, Seems Difficult, Try Again";
  } else if (
    a[5] == a[8] - 1 ||
    a[5] == a[8] + 1 ||
    a[5] == a[9] - 1 ||
    a[5] == a[9] + 1 ||
    a[5] == a[10] - 1 ||
    a[5] == a[10] + 1 ||
    a[5] == a[8] ||
    a[5] == a[9] ||
    a[5] == a[10]
  ) {
    text = "Hmm, Seems Difficult, Try Again";
  } else if (
    a[6] == a[10] - 1 ||
    a[6] == a[10] + 1 ||
    a[6] == a[11] - 1 ||
    a[6] == a[11] + 1 ||
    a[6] == a[10] ||
    a[6] == a[11]
  ) {
    text = "Hmm, Seems Difficult, Try Again";
  } else if (
    a[7] == a[8] - 1 ||
    a[7] == a[8] + 1 ||
    a[7] == a[12] - 1 ||
    a[7] == a[12] + 1 ||
    a[7] == a[8] ||
    a[7] == a[12]
  ) {
    text = "Hmm, Seems Difficult, Try Again";
  } else if (
    a[8] == a[9] - 1 ||
    a[8] == a[9] + 1 ||
    a[8] == a[12] - 1 ||
    a[8] == a[12] + 1 ||
    a[8] == a[13] - 1 ||
    a[8] == a[13] + 1 ||
    a[8] == a[9] ||
    a[8] == a[12] ||
    a[8] == a[13]
  ) {
    text = "Hmm, Seems Difficult, Try Again";
  } else if (
    a[9] == a[10] - 1 ||
    a[9] == a[10] + 1 ||
    a[9] == a[13] - 1 ||
    a[9] == a[13] + 1 ||
    a[9] == a[10] ||
    a[9] == a[13]
  ) {
    text = "Hmm, Seems Difficult, Try Again";
  } else if (
    a[10] == a[13] - 1 ||
    a[10] == a[13] + 1 ||
    a[10] == a[14] - 1 ||
    a[10] == a[14] + 1 ||
    a[10] == a[13] ||
    a[10] == a[14]
  ) {
    text = "Hmm, Seems Difficult, Try Again";
  } else if (a[11] == a[14] - 1 || a[11] == a[14] + 1 || a[11] == a[14]) {
    text = "Hmm, Seems Difficult, Try Again";
  } else {
    text = "Bravo. You are the Master of Level 3";
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
