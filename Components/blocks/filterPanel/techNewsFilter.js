document.addEventListener("DOMContentLoaded", function () {
  const filterContainer = document.querySelector('.FilterContainer');
  const Filter = document.querySelector('.Filter');
  const openFilter = document.querySelector('.headerPagesFilterButton');
  const closeFilter = Filter.querySelector('.FilterClose');

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
    title: 'Xamarin',
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
  const headerContentContainer = document.querySelector('.headerPagesContentContainer');

  addFilterBlocks();
  addFilterChips();
  
  const redDot = openFilter.querySelector('.redCircle');
  
  const filterPlatformContainer = Filter.querySelector('.techNewsFilterPlatform');
  const filterPlatformInputs = filterPlatformContainer.getElementsByTagName('input');
  const filterInterestContainer = Filter.querySelector('.techNewsFilterInterest');
  const filterInterestInputs = filterInterestContainer.getElementsByTagName('input');
  const filterBlockItems = filterBlocksContainer.querySelectorAll('.techNewsFilterBlockItem');
  const filterChipItems = filterChipsContainer.querySelectorAll('.techNewsFilterChipsItem');
  const filterApplyButton = Filter.querySelector('.FilterFooter');
  const filterClearButton = Filter.querySelector('.FilterClear');
  
  createFilterCheckboxes();
 
  const checkAllPlatformInput = document.getElementById('All Platforms');
  const checkAllInterestInput = document.getElementById('All_Interest');
  const techNewsInputs = Filter.querySelectorAll('input');
  
  
  showCheckedFilters();
  animateBlocks();

  filterClearButton.addEventListener('click', function () {
    clearAllFilters(techNewsInputs);
  });

  checkAllPlatformInput.addEventListener('change', function () {
    checkAllPlatformInput.checked ? checkAllFilters(filterPlatformInputs) : clearAllFilters (filterPlatformInputs);
  });

  checkAllInterestInput.addEventListener('change', function () {
    checkAllInterestInput.checked ? checkAllFilters(filterInterestInputs) : clearAllFilters (filterInterestInputs);
  })

  filterApplyButton.addEventListener('click', function () {
    showCheckedFilters();
  });

  closeFilter.addEventListener('click', function () {
    showCheckedFilters();
  });

   

  //------------------ CREATE FILTER BLOCKS-----------------
  function addFilterBlocks () {
    filterList.forEach(function (item) {
      let filterBlockItem = document.createElement('div');
      let filterBlockItemCover = document.createElement('div');
      filterBlockItemCover.classList.add('blockCover');
      filterBlockItem.classList.add('techNewsFilterBlockItem');
      filterBlockItem.setAttribute('title', item.title);
      let filterBlockItemTitle = document.createElement('h3');
      filterBlockItemTitle.textContent = item.title;
      let filterBlockItemDescription = document.createElement('ul');
      filterBlockItemDescription.classList.add('techNewsFilterItemText');
      function createDescription () {
        item.description.forEach (function (item) {
          let listItem = document.createElement('li');
          listItem.textContent = item;
          filterBlockItemDescription.appendChild(listItem);
        });
      };
      createDescription();
      filterBlockItem.appendChild(filterBlockItemCover);
      filterBlockItem.appendChild(filterBlockItemTitle);
      filterBlockItem.appendChild(filterBlockItemDescription);
      filterBlocksContainer.appendChild(filterBlockItem);
    })
  };
  //------------------END CREATE FILTER BLOCKS------------------

  //------------------START ANIMATE FILTER BLOCKS------------------
  function animateBlocks () {
    clickBlocks();
    filterBlocksContainer.addEventListener('mousedown', function (e) {
          handleBlocksMouseMove(e);
    }, false)

    filterBlocksContainer.addEventListener('touchstart', function (e) {
      handleBlocksTouchMove(e);
    }, false)
  }

  function handleBlocksMouseMove (e) {
    e.preventDefault();
    let clickDuration = 200;
    let t1 = Date.now();
    let mouseStart = e.clientX;
    let containerPos = headerContentContainer.getBoundingClientRect().x;
    let blocksPos = filterBlocksContainer.getBoundingClientRect().x;
    let shift = blocksPos - containerPos;
    let minPosition = - 232 * (filterBlockItems.length - 1);
    let maxPosition = 0;
    document.onmousemove = function (e) {
      let mouseMove = e.clientX ;
      let newPos = mouseMove - mouseStart + shift;
      if (newPos > maxPosition) {newPos = maxPosition};
      if (newPos < minPosition) {newPos = minPosition};
      filterBlocksContainer.style.left = newPos + 'px';
    };
    document.addEventListener('mouseup', function (e) {
      let t2 = Date.now();
      let mouseFinish = e.clientX ;
      if ((t2-t1) < clickDuration && Math.abs(mouseFinish - mouseStart) < 10) {
        let blockClick = new Event("blockClick");
        e.target.dispatchEvent(blockClick);
      }
      document.onmousemove = null;
    });
  };
  
  function handleBlocksTouchMove (e) {
    e.preventDefault();
    let touchDuration = 500;
    let d1 = Date.now();
    let touchStart = e.changedTouches[0].clientX;
    let containerPos = headerContentContainer.getBoundingClientRect().x;
    let blocksPos = filterBlocksContainer.getBoundingClientRect().x;
    let shift = blocksPos - containerPos;
    let minPosition = - 232 * (filterBlockItems.length - 1);
    let maxPosition = 0;
    document.ontouchmove = function (e) {
      let touchMove = e.changedTouches[0].clientX;
      let newPos = touchMove - touchStart + shift;
      if (newPos > maxPosition) {newPos = maxPosition};
      if (newPos < minPosition) {newPos = minPosition};
      filterBlocksContainer.style.left = newPos + 'px';
    };
    document.addEventListener('touchend', function (e) {
      let d2 = Date.now();
      let touchFinish = e.changedTouches[0].clientX;
      if ((d2-d1) < touchDuration && Math.abs(touchFinish - touchStart) < 10) {
        let blockClick = new Event("blockClick");
        e.target.dispatchEvent(blockClick);
      }
      document.ontouchmove = null;
    });
  }

  function clickBlocks() {
    for (let i = 0; i < filterBlockItems.length; i++) {
      let cover = filterBlockItems[i].querySelector('.blockCover');
      cover.addEventListener('blockClick', function (e) {
        e.preventDefault();
        let containerPosition = filterBlocksContainer.getBoundingClientRect().x;
        let blockPosition = filterBlockItems[i].getBoundingClientRect().x;
        
        filterBlockItems.forEach(function (block) {
          if (block.classList.contains('activeChoiceBlock')) {
            block.classList.remove('activeChoiceBlock');
          }
        });
        filterBlockItems[i].classList.add('activeChoiceBlock');
        filterBlocksContainer.style.left = containerPosition - blockPosition + 'px';
        updateFilters ('block');
      })
    }
  }

  //------------------END ANIMATE FILTER BLOCKS------------------

  //------------------ CREATE FILTER CHIPS--------------------
  function addFilterChips () {
    filterList.unshift({title: 'All Platforms', description: []});
    filterList.forEach(function (item) {
      let filterChipItem = document.createElement('div');
      filterChipItem.classList.add('techNewsFilterChipsItem');
      filterChipItem.setAttribute('title', item.title);
      filterChipItem.textContent = item.title;
      filterChipsContainer.appendChild(filterChipItem);
      filterChipItem.addEventListener('click', function () {
        filterChipItem.classList.toggle('activeChoiceChip');
        updateFilters ('chip');
      })  
    })
  };
  //------------------END CREATE FILTER CHIPS------------------

  //------------------ CREATE FILTER CHECKBOXES IN FILTER PANEL------------------
  
  function createFilterCheckboxes () {
    filterList.forEach(function (item) {
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
  function updateFilters (type) {
    clearAllFilters(techNewsInputs);
    if (type === 'block') {
      for (let i = 0; i < filterBlockItems.length; i++) {
        if (filterBlockItems[i].classList.contains('activeChoiceBlock')){
          for (let j = 0; j < techNewsInputs.length; j++) {
            if (techNewsInputs[j].id === filterBlockItems[i].title) {
              techNewsInputs[j].checked = true;
            }
          };
        }
      }
    }
    if (type === 'chip') {
      for (let i = 0; i < filterChipItems.length; i++) {
        if (filterChipItems[i].classList.contains('activeChoiceChip')){
          for (let j = 0; j < techNewsInputs.length; j++) {
            if (techNewsInputs[j].id === filterChipItems[i].title) {
              techNewsInputs[j].checked = true;
            }
          };
        }
      }
    }
  };

  function getCheckedFilters (inputs) {
    let checkedFilters=[];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === true) {
        checkedFilters.push(inputs[i])
      }
    } 
    return checkedFilters; 
  }

  function checkAllFilters (filters) {
    for (let i = 0; i < filters.length; i++) {
      filters[i].checked = true;
    }
  };

  function clearAllFilters (filters) {
    for (let i = 0; i < filters.length; i++) {
      filters[i].checked = false;
    }
  };

  function showCheckedFilters () {
    for (let i = 0; i < filterBlockItems.length; i++) {
      filterBlockItems[i].classList.remove('activeChoiceBlock');
    }
    let checkedPlatformItems = getCheckedFilters(filterPlatformInputs);
    let choiceTotal = getCheckedFilters(techNewsInputs);    
    if (checkedPlatformItems.length > 1) {
      filterBlocksContainer.classList.add('mainHidden');
      filterChipsContainer.classList.remove('mainHidden');
      let multipleChoice = [];
      for (let i = 0; i < checkedPlatformItems.length; i++) {
        for (let j = 0; j < filterChipItems.length; j++) {
          if (filterChipItems[j].title === checkedPlatformItems[i].id) {
            multipleChoice.push(filterChipItems[j]);
          }
        }
      };
      for (let i = 0; i < filterChipItems.length; i++) {
        filterChipItems[i].classList.remove('activeChoiceChip');
      }
      multipleChoice.forEach(function(item) {item.classList.add('activeChoiceChip')});
    }
    else if (checkedPlatformItems.length === 1) {
      filterChipsContainer.classList.add('mainHidden');
      filterBlocksContainer.classList.remove('mainHidden');
      let choice;
      for (let i = 0; i < filterBlockItems.length; i++) {
        if (filterBlockItems[i].title === checkedPlatformItems[0].id) {
          choice = filterBlockItems[i];
        }
      }
      choice.classList.add('activeChoiceBlock');
      let containerPosition = filterBlocksContainer.getBoundingClientRect().x;
      let blockPosition = choice.getBoundingClientRect().x;
      filterBlocksContainer.style.left = containerPosition - blockPosition + 'px';
    }
    else if (checkedPlatformItems.length === 0) {
      filterChipsContainer.classList.add('mainHidden');
      filterBlocksContainer.classList.remove('mainHidden'); 
      for (let i = 0; i < filterChipItems.length; i++) {
        filterChipItems[i].classList.remove('activeChoiceChip');
      }
      for (let i = 0; i < filterBlockItems.length; i++) {
        filterBlockItems[i].classList.remove('activeChoiceChip');
      }
    }
    filterContainer.classList.add('mainHidden');
    let checkedInterestItems = getCheckedFilters(filterInterestInputs);
    
    if (checkedPlatformItems.length > 0 || checkedInterestItems.length > 0) {
      redDot.classList.remove('mainHidden'); 
    } else {
      redDot.classList.add('mainHidden');
    }
    return choiceTotal;
  }
})
//------------------END CHANGE FILTERS-----------------------


//------------------ END CREATE TECHNEWS FILTER CHECKBOXES, BLOCKS & CHIPS-------------------------
