let gpForm = document.getElementById("eduBackground");
let addMore = document.getElementById("addBtn");
let removeField = document.getElementById("removeBtn");

addMore.addEventListener("click", () => {
  let newField = document.createElement("input");
  let newDegree = document.createElement("select");

  newField.setAttribute("type", "text");
  newField.setAttribute("name", "schcoolName");
  newField.setAttribute("class", "form-control mt-3");
  newField.setAttribute("placeholder", "Name of School");

  newDegree.setAttribute("name", "grade");
  newDegree.setAttribute("class", "form-select col-3");
  newDegree.setAttribute("id", "grade");
  newDegree.innerHTML = `             
 <option value="Grade">Degree</option>
  <option value="First School Leaving Certificate">
    First School Leaving Certificate
  </option>
  <option value="SSCE">SSCE</option>
  <option value="ND">ND</option>
  <option value="HND">HND</option>
  <option value="Bsc.">Bsc./ Equivalent</option>
  <option value="PGD">PGD</option>
  <option value="Msc.">Msc.</option>
  <option value="Ph.D">Ph.D</option>`;

  gpForm.appendChild(newField);
  gpForm.appendChild(newDegree);
});

removeField.addEventListener("click", () => {
  let inputTags = gpForm.getElementsByTagName("input");
  let inputTags1 = gpForm.getElementsByTagName("select");

  if (inputTags.length > 2 && inputTags1.length > 2) {
    gpForm.removeChild(inputTags[inputTags.length - 1]);
    gpForm.removeChild(inputTags1[inputTags1.length - 1]);
  }
});
