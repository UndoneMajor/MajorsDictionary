function search() {
  let input = document.getElementById("searchTerm").value.toLowerCase();
  let table = document.getElementById("dictionary");
  let tr = table.getElementsByTagName("tr");
  let noResults = document.getElementById("noResults");
  let isMatched = false;

  for (let i = 0; i < tr.length; i++) {
    let tds = tr[i].getElementsByTagName("td");
    let isRowMatched = false;

    for (let j = 0; j < tds.length; j++) {
      let td = tds[j];
      if (td) {
        let term = td.textContent || td.innerText;
        if (term.toLowerCase().indexOf(input) > -1) {
          isRowMatched = true;
          isMatched = true;
          break;
        }
      }
    }

    if (isRowMatched) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }

  if (!isMatched) {
    noResults.innerHTML = "Хайлт олдсонгүй '" + input + "'";
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
}
