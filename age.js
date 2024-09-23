function populateDatalists() {
  const daysList = document.getElementById("dayl");
  const monthsList = document.getElementById("monthl");
  const yearsList = document.getElementById("yearl");

  for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    daysList.appendChild(option);
  }

  for (let i = 1; i <= 12; i++) {
    const option = document.createElement("option");
    option.value = i;
    monthsList.appendChild(option);
  }

  const currentYear = new Date().getFullYear();
  for (let i = 1900; i <= currentYear; i++) {
    const option = document.createElement("option");
    option.value = i;
    yearsList.appendChild(option);
  }
}

function calculateAge() {
  const bdayInput = parseInt(document.getElementById("bday").value);
  const bmonthInput = parseInt(document.getElementById("bmonth").value);
  const byearInput = parseInt(document.getElementById("byear").value);

  // Validate inputs
  if (isNaN(bdayInput) || isNaN(bmonthInput) || isNaN(byearInput)) {
    alert("Please enter a valid date, month, and year of birth");
    return;
  }

  const today = new Date();

  let adays = today.getDate() - bdayInput;
  let amonths = today.getMonth() + 1 - bmonthInput; // Months are 0-indexed
  let ayears = today.getFullYear() - byearInput;

  if (adays < 0) {
    amonths--;
    adays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (amonths < 0) {
    ayears--;
    amonths += 12;
  }

  document.getElementById("days").textContent = adays;
  document.getElementById("months").textContent = amonths;
  document.getElementById("years").textContent = ayears;
}

window.onload = populateDatalists;
