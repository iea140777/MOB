document.addEventListener("DOMContentLoaded", function () {
  const FilterContainer = document.querySelector('.FilterContainer');
  const Filter = document.querySelector('.Filter');
  const openFilter = document.querySelector('.headerPagesFilterButton');
  const closeFilter = Filter.querySelector('.FilterClose');

//------------------START FILTER MENU------------------------
  const redDot = openFilter.querySelector('.redCircle');
  const filterApplyButton = Filter.querySelector('.FilterFooter');
  const filterClearButton = Filter.querySelector('.FilterClear');

  const filterCheckboxContainerDate = Filter.querySelector('.talksFilterDate');
  const filterCheckboxContaineCategory = Filter.querySelector('.talksFilterCategory');
  
  const filterInputs = Filter.querySelectorAll('input');
  const talksInputsDate = filterCheckboxContainerDate.querySelectorAll('input');
  const talksInputsCategory = filterCheckboxContaineCategory.querySelectorAll('input');

  openFilter.addEventListener('click', function() {
    FilterContainer.classList.remove('mainHidden');
  });

  closeFilter.addEventListener('click', function() {
    FilterContainer.classList.add('mainHidden');
    
  });

  filterClearButton.addEventListener('click', function() {
    clearAllFilters();
  })

  filterApplyButton.addEventListener('click', function() {
    FilterContainer.classList.add('mainHidden');
    getChoice();
  });

  function getChoice() {
    let choiceDate = getCheckedFilters(talksInputsDate);
    let choiceCategory = getCheckedFilters(talksInputsCategory);
    let choice = [choiceDate, choiceCategory];
    
    if (choiceDate.length === 0 && choiceCategory.length === 0) {
      redDot.classList.add('mainHidden'); 
    } else {
      redDot.classList.remove('mainHidden');
    }
    console.log(choice);
    return choice;
  }

  function clearAllFilters () {
    for (let i = 0; i < filterInputs.length; i++) {
      filterInputs[i].checked = false;
    }
  };

  function getCheckedFilters (inputs) {
    let checkedFilters = [];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === true) {
        checkedFilters.push(inputs[i]);
      }
    }
    return checkedFilters; 
  }

});

//------------------END FILTER MENU------------------------
