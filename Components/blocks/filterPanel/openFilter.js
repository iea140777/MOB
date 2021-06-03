document.addEventListener("DOMContentLoaded", function () {

  //------------------ OPEN & CLOSE FILTER PANEL-------------------------
  const FilterContainer = document.querySelector('.FilterContainer');
  const Filter = document.querySelector('.Filter');
  const openFilterButton = document.querySelector('.headerPagesFilterButton');
  const closeFilterButton = Filter.querySelector('.FilterClose');
  const filterApplyButton = Filter.querySelector('.FilterApply');
 
  openFilterButton.addEventListener('click', function () {
    openFilter();
  });
 
  closeFilterButton.addEventListener('click', function () {
    closeFilter();
  });

  filterApplyButton.addEventListener('click', function () {
    closeFilter();
  });

  document.addEventListener('click', function (e){
    const target = e.target;
    const filter = target == FilterContainer || FilterContainer.contains(target);
    const filterActive = FilterContainer.classList.contains('FilterContainerOpen');
    const openButton = target == openFilterButton || openFilterButton.contains(target);
    if (!filter && !openButton && filterActive) {
      closeFilter();
    }
  })

  function openFilter () {
    FilterContainer.classList.remove('mainHidden');
    setTimeout(function() {
      FilterContainer.classList.add('FilterContainerOpen');
    }, 50);
  }

  function closeFilter () {
    FilterContainer.classList.remove('FilterContainerOpen');
    setTimeout(function() {
      FilterContainer.classList.add('mainHidden');
    }, 260);
  }
  
})
