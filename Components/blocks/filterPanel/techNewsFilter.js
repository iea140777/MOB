
  //------------------ OPEN & CLOSE FILTER PANEL-------------------------
  const filterContainer = document.querySelector('.FilterContainer');
  const filterPanel = document.querySelector('.Filter');
  const openFilter = document.querySelector('.headerPagesFilterButton');
  const closeFilter = filterPanel.querySelector('.FilterClose');

  openFilter.addEventListener('click', () => {
    filterContainer.classList.remove('mainHidden');
  });

  closeFilter.addEventListener('click', () => {
    filterContainer.classList.add('mainHidden');
  });
  //------------------END OPEN & CLOSE FILTER PANEL------------------------

//------------------ CREATE TECHNEWS FILTER CHECKBOXES, BLOCKS & CHIPS-------------------------
  
  //------------------ START FILTERS LIST--------------------
  const filterList = [
    {
    title: 'iOS',
    description: [
      'Cross-Platform',
      'React libraries',
      'Xamarin.Mac',
      'Platform SDKs'
    ]
  },
  {
    title: 'Android',
    description: [
      'Cross-Platform',
      'React libraries',
      'Xamarin.Mac',
      'Platform SDKs'
    ]
  },
  {
    title: 'Flutter',
    description: [
      'Cross-Platform',
      'React libraries',
      'Xamarin.Mac',
      'Platform SDKs'
    ]
  },
  {
    title: 'React Native',
    description: [
      'Cross-Platform',
      'React libraries',
      'Xamarin.Mac',
      'Platform SDKs'
    ]
  },
  {
    title: 'Xamarine',
    description: [
      '. NET framework',
      'C# language',
      'Xamarin.Mac',
      'Platform SDKs'
    ]
  }];

  //------------------ END FILTERS LIST--------------------
  
  const filterChipsContainer = document.querySelector('.techNewsFilterChipsContainer');
  const filterBlocksContainer = document.querySelector('.techNewsFilterBlocksContainer');
  
  addFilterBlocks();
  addFilterChips();
  
  const redDot = openFilter.querySelector('.redCircle');
  
  const filterPlatformContainer = filterPanel.querySelector('.techNewsFilterPlatform');
  const filterPlatformInputs = filterPlatformContainer.getElementsByTagName('input');
  const filterInterestContainer = filterPanel.querySelector('.techNewsFilterInterest');
  const filterInterestInputs = filterInterestContainer.getElementsByTagName('input');
  const filterBlockItems = filterBlocksContainer.querySelectorAll('.techNewsFilterBlockItem');
  const filterChipItems = filterChipsContainer.getElementsByClassName('techNewsFilterChipsItem');
  const filterApplyButton = filterPanel.querySelector('.FilterFooter');
  const filterClearButton = filterPanel.querySelector('.FilterClear');
  
  createFilterCheckboxes();
  
  const checkAllPlatformInput = document.getElementById('All Platforms');
  const checkAllInterestInput = document.getElementById('All_Interest');
  const techNewsInputs = filterPanel.getElementsByTagName('input');
  
  showCheckedFilters();

  filterClearButton.addEventListener('click', () => {
    clearAllFilters(techNewsInputs);
  });

  checkAllPlatformInput.addEventListener('change', () => {
    checkAllPlatformInput.checked ? checkAllFilters(filterPlatformInputs) : clearAllFilters (filterPlatformInputs);
  });

  checkAllInterestInput.addEventListener('change', () => {
    checkAllInterestInput.checked ? checkAllFilters(filterInterestInputs) : clearAllFilters (filterInterestInputs);
  })

  filterApplyButton.addEventListener('click', (e) => {
    showCheckedFilters();
  });

  //------------------ CREATE FILTER BLOCKS-----------------
  function addFilterBlocks () {
    filterList.map(item => {
      let filterBlockItem = document.createElement('div');
      filterBlockItem.classList.add('techNewsFilterBlockItem');
      filterBlockItem.setAttribute('title', item.title);
      let filterBlockItemTitle = document.createElement('h3');
      filterBlockItemTitle.textContent = item.title;
      let filterBlockItemDescription = document.createElement('ul');
      filterBlockItemDescription.classList.add('techNewsFilterItemText');
      function createDescription () {
        item.description.map (item => {
          let listItem = document.createElement('li');
          listItem.textContent = item;
          filterBlockItemDescription.appendChild(listItem);
        });
      };
      createDescription();
      filterBlockItem.appendChild(filterBlockItemTitle);
      filterBlockItem.appendChild(filterBlockItemDescription);
      filterBlocksContainer.appendChild(filterBlockItem);
    })
  };
  //------------------END CREATE FILTER BLOCKS------------------

  //------------------ CREATE FILTER CHIPS--------------------
  function addFilterChips () {
    filterList.unshift({title: 'All Platforms', description: []});
    filterList.map(item => {
      let filterChipItem = document.createElement('div');
      filterChipItem.classList.add('techNewsFilterChipsItem');
      filterChipItem.setAttribute('title', item.title);
      filterChipItem.textContent = item.title;
      filterChipsContainer.appendChild(filterChipItem);
    })
  };
  //------------------END CREATE FILTER CHIPS------------------

  //------------------ CREATE FILTER CHECKBOXES IN FILTER PANEL------------------
  
  function createFilterCheckboxes () {
    filterList.map(item => {
      let checkboxLabel = document.createElement('label');
      checkboxLabel.classList.add('FilterCheckbox');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = item.title;
      checkbox.name = item.title;
      item.title === 'iOS' ? checkbox.checked = true : null;
      let label = document.createElement('span');
      label.textContent = item.title;
      checkboxLabel.appendChild(checkbox);
      checkboxLabel.appendChild(label);
      filterPlatformContainer.appendChild(checkboxLabel);
    });
  };
  //------------------END CREATE FILTER CHECKBOXES IN FILTER PANEL-----------------

  //------------------CHANGE FILTERS------------------------
  
  function getCheckedFilters (inputs) {
    let checkedFilters = Array.from(inputs).filter(item => item.checked === true);
    return checkedFilters; 
  }

  function checkAllFilters (filters) {
    Array.from(filters).map(item => item.checked = true);
  };

  function clearAllFilters (filters) {
    Array.from(filters).map(item => item.checked = false);
  };

  function showCheckedFilters () {
    filterBlockItems.forEach(item => item.classList.remove('activeChoiceBlock'));
    let checkedPlatformItems = getCheckedFilters(filterPlatformInputs);
    let choiceTotal = getCheckedFilters(techNewsInputs).map(item => item.id.replace(/ /g, '_'));    
    if (checkedPlatformItems.length > 1) {
      filterBlocksContainer.classList.add('mainHidden');
      filterChipsContainer.classList.remove('mainHidden');
      let multipleChoice = [];
      for (let i = 0; i < checkedPlatformItems.length; i++) {
        multipleChoice.push(Array.from(filterChipItems).find(item => item.title === checkedPlatformItems[i].id));
      };
      Array.from(filterChipItems).forEach(item => item.classList.remove('activeChoiceChip'));
      Array.from(multipleChoice).forEach(item => item.classList.add('activeChoiceChip'));
    }
    else if (checkedPlatformItems.length === 1) {
      filterChipsContainer.classList.add('mainHidden');
      filterBlocksContainer.classList.remove('mainHidden');
      let choice = Array.from(filterBlockItems).find(item => item.title === checkedPlatformItems[0].id);
      choice.classList.add('activeChoiceBlock');
    }
    else if (checkedPlatformItems.length === 0) {
      filterChipsContainer.classList.add('mainHidden');
      filterBlocksContainer.classList.remove('mainHidden'); 
      Array.from(filterBlockItems).forEach(item => item.classList.remove('activeChoiceBlock'));
      Array.from(filterChipItems).forEach(item => item.classList.remove('activeChoiceChip'));
    }
    filterContainer.classList.add('mainHidden');
    let checkedInterestItems = getCheckedFilters(filterInterestInputs);
    
    if (checkedPlatformItems.length > 0 || checkedInterestItems.length > 0) {
      redDot.classList.remove('mainHidden'); 
    } else {
      redDot.classList.add('mainHidden');
    }
    console.log(choiceTotal);
    return choiceTotal;
  }

//------------------END CHANGE FILTERS-----------------------


//------------------ END CREATE TECHNEWS FILTER CHECKBOXES, BLOCKS & CHIPS-------------------------