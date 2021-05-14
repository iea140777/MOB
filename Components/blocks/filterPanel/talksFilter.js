document.addEventListener("DOMContentLoaded", () => {

 //------------------ OPEN & CLOSE FILTER PANEL-------------------------
 const FilterContainer = document.querySelector('.FilterContainer');
 const Filter = document.querySelector('.Filter');
 const openFilter = document.querySelector('.headerPagesFilterButton');
 const closeFilter = Filter.querySelector('.FilterClose');

 openFilter.addEventListener('click', () => {
   FilterContainer.classList.remove('mainHidden');
 });

 closeFilter.addEventListener('click', () => {
   FilterContainer.classList.add('mainHidden');
 });
 //------------------END OPEN & CLOSE FILTER PANEL------------------------

//------------------START FILTER MENU------------------------
  const redDot = openFilter.querySelector('.redCircle');
  const filterApplyButton = Filter.querySelector('.FilterFooter');
  const filterClearButton = Filter.querySelector('.FilterClear');

  const filterCheckboxContainerDate = Filter.querySelector('.talksFilterDate');
  const filterCheckboxContaineCategory = Filter.querySelector('.talksFilterCategory');
  
  const filterInputs = Filter.querySelectorAll('input');
  const talksInputsDate = filterCheckboxContainerDate.querySelectorAll('input');
  const labelsDates =  filterCheckboxContainerDate.querySelectorAll('label span');
  const talksInputsCategory = filterCheckboxContaineCategory.querySelectorAll('input');
  const labelsCategory =  filterCheckboxContaineCategory.querySelectorAll('label span');

  addCheckboxId(talksInputsDate, labelsDates);
  addCheckboxId(talksInputsCategory, labelsCategory);

  openFilter.addEventListener('click', () => {
    FilterContainer.classList.remove('mainHidden');
  });

  closeFilter.addEventListener('click', () => {
    FilterContainer.classList.add('mainHidden');
  });

  filterClearButton.addEventListener('click', () => {
    clearAllFilters();
  })

  filterApplyButton.addEventListener('click', (e) => {
    let choiceDate = getCheckedFilters(talksInputsDate).map(item => item.id);
    let choiceCategory = getCheckedFilters(talksInputsCategory).map(item => item.id);
    let choice = [choiceDate, choiceCategory];
    FilterContainer.classList.add('mainHidden');
    if (choiceDate.length === 0 && choiceCategory.length === 0) {
      redDot.classList.add('mainHidden'); 
    } else {
      redDot.classList.remove('mainHidden');
    }
    console.log(choice);
    return choice;
  });

  function addCheckboxId (checkboxList, labelsList) {
    const idList = Array.from(labelsList).map(label => label.textContent.replace(/ /g, '_'));
    for (let i = 0; i < labelsList.length; i++) {
      Array.from(checkboxList)[i].id = idList[i];
    }
  }

  function clearAllFilters () {
    Array.from(filterInputs).map(item => item.checked = false);
  };

  function getCheckedFilters (inputs) {
    let checkedFilters = Array.from(inputs).filter(item => item.checked === true);
    return checkedFilters; 
  }

});

//------------------END FILTER MENU------------------------
