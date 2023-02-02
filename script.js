function search() {
    let input = document.getElementById("searchTerm").value.toLowerCase();
    let table = document.getElementById("dictionary");
    let tr = table.getElementsByTagName("tr");
    let noResults = document.getElementById("noResults");
  
    for (let i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        let term = td.textContent || td.innerText;
        if (term.toLowerCase().indexOf(input) > -1) {
          tr[i].style.display = "";
          noResults.style.display = "none";
        } else {
          tr[i].style.display = "none";
          noResults.innerHTML = "No results found for '" + input + "'";
          noResults.style.display = "block";
        }
      } 
    }
  }
  