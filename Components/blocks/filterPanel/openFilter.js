document.addEventListener("DOMContentLoaded", function () {

  //------------------ OPEN & CLOSE FILTER PANEL-------------------------
  const FilterContainer = document.querySelector('.FilterContainer');
  const Filter = document.querySelector('.Filter');
  const openFilter = document.querySelector('.headerPagesFilterButton');
  const closeFilter = Filter.querySelector('.FilterClose');
 
  openFilter.addEventListener('click', function () {
    FilterContainer.classList.remove('mainHidden');
  });
 
  closeFilter.addEventListener('click', function () {
    FilterContainer.classList.add('mainHidden');
  });
})