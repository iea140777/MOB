"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var Filter = document.querySelector('.Filter');
  var openFilter = document.querySelector('.headerPagesFilterButton'); 
  var windowWidth  = document.documentElement.clientWidth;
  
  //------------------ CREATE TECHNEWS FILTER CHECKBOXES, BLOCKS & CHIPS-------------------------
  
  //------------------ START FILTERS LIST--------------------

  var filterList = [{
    title: 'iOS',
    description: ['Cross-Platform', 'React libraries', 'Xamarin.Mac', 'Platform SDKs']
  }, {
    title: 'Android',
    description: ['Cross-Platform', 'React libraries', 'Xamarin.Mac', 'Platform SDKs']
  }, {
    title: 'Flutter',
    description: ['Cross-Platform', 'React libraries', 'Xamarin.Mac', 'Platform SDKs']
  }, {
    title: 'React Native',
    description: ['Cross-Platform', 'React libraries', 'Xamarin.Mac', 'Platform SDKs']
  }, {
    title: 'Xamarin',
    description: ['. NET framework', 'C# language', 'Xamarin.Mac', 'Platform SDKs']
  }]; //------------------ END FILTERS LIST--------------------

  var filterChipsContainer = document.querySelector('.techNewsFilterChipsContainer');
  var filterBlocksContainer = addFilterBlocks();
  addFilterChips();
  var redDot = openFilter.querySelector('.redCircle');
  var filterPlatformContainer = Filter.querySelector('.techNewsFilterPlatform');
  var filterPlatformInputs = filterPlatformContainer.getElementsByTagName('input');
  var filterInterestContainer = Filter.querySelector('.techNewsFilterInterest');
  var filterInterestInputs = filterInterestContainer.getElementsByTagName('input');
  var filterBlockItems = filterBlocksContainer.querySelectorAll('.techNewsFilterBlockItem');
  var filterChipItems = filterChipsContainer.querySelectorAll('.techNewsFilterChipsItem');
  var filterApplyButton = Filter.querySelector('.FilterApply');
  var filterClearButton = Filter.querySelector('.FilterClear');
  createFilterCheckboxes();
  var checkAllPlatformInput = document.getElementById('All Platforms');
  var checkAllInterestInput = document.getElementById('All_Interest');
  var techNewsInputs = Filter.querySelectorAll('input');
  
  showCheckedFilters();
  
  filterClearButton.addEventListener('click', function () {
    clearAllFilters(techNewsInputs);
  });
  checkAllPlatformInput.addEventListener('change', function () {
    checkAllPlatformInput.checked ? checkAllFilters(filterPlatformInputs) : clearAllFilters(filterPlatformInputs);
  });
  checkAllInterestInput.addEventListener('change', function () {
    checkAllInterestInput.checked ? checkAllFilters(filterInterestInputs) : clearAllFilters(filterInterestInputs);
  });
  filterApplyButton.addEventListener('click', function () {
    showCheckedFilters();
  });

  $('.techNewsFilterBlocksContainer').on('afterChange', function(slick, currentSlide){
    var slide = currentSlide.currentSlide;
    updateFilters('block', slide);
  });
  //------------------ CREATE FILTER BLOCKS-----------------
  
  function addFilterBlocks() {
    var filterBlocksContainer = document.querySelector('.techNewsFilterBlocksContainer');
    filterList.forEach(function (item) {
      createBlock(item);
    });
    
    if (filterBlocksContainer.getBoundingClientRect().width < windowWidth*1.5) {
      filterList.forEach(function (item) {
        createBlock(item);
      });
    };

    function createBlock(item) {
      var filterBlockItem = document.createElement('div');
      var filterBlockItemCover = document.createElement('div');
      filterBlockItemCover.classList.add('blockCover');
      filterBlockItem.classList.add('techNewsFilterBlockItem');
      filterBlockItem.setAttribute('title', item.title);
      var filterBlockItemTitle = document.createElement('h3');
      filterBlockItemTitle.textContent = item.title;
      var filterBlockItemDescription = document.createElement('ul');
      filterBlockItemDescription.classList.add('techNewsFilterItemText');
      createDescription(item, filterBlockItemDescription);
      filterBlockItem.appendChild(filterBlockItemCover);
      filterBlockItem.appendChild(filterBlockItemTitle);
      filterBlockItem.appendChild(filterBlockItemDescription);
      filterBlocksContainer.appendChild(filterBlockItem);
    }
  
    function createDescription(item, description) {
      item.description.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.textContent = item;
        description.appendChild(listItem);
      });
    };
    jQuery(function() {
      $('.techNewsFilterBlocksContainer').slick({
        centerMode: true, 
        infinite: true, 
        arrows: false, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        swipeToSlide: true, 
        focusOnSelect: true, 
      });
    })
    return filterBlocksContainer;
  }; 
  //------------------END CREATE FILTER BLOCKS------------------
  
  //------------------ CREATE FILTER CHIPS--------------------
  function addFilterChips() {
    filterList.unshift({
      title: 'All Platforms',
      description: []
    });
    filterList.forEach(function (item) {
      var filterChipItem = document.createElement('div');
      filterChipItem.classList.add('techNewsFilterChipsItem');
      filterChipItem.setAttribute('title', item.title);
      filterChipItem.textContent = item.title;
      filterChipsContainer.appendChild(filterChipItem);
      filterChipItem.addEventListener('click', function () {
        filterChipItem.classList.toggle('activeChoiceChip');
        updateFilters('chip');
      });
    });
  };
  //------------------END CREATE FILTER CHIPS------------------
  
  //------------------ CREATE FILTER CHECKBOXES IN FILTER PANEL------------------

  function createFilterCheckboxes() {
    filterList.forEach(function (item) {
      var checkboxLabel = document.createElement('label');
      checkboxLabel.classList.add('FilterCheckbox');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = item.title;
      checkbox.name = item.title;
      item.title === 'iOS' ? checkbox.checked = true : null;
      var label = document.createElement('span');
      label.textContent = item.title;
      checkboxLabel.appendChild(checkbox);
      checkboxLabel.appendChild(label);
      filterPlatformContainer.appendChild(checkboxLabel);
    });
  };
  //------------------END CREATE FILTER CHECKBOXES IN FILTER PANEL-----------------
  
  //------------------CHANGE FILTERS------------------------
  function updateFilters(type, slide) {
    clearAllFilters(techNewsInputs);
    if (type === 'block') {
      for (var i = 0; i < filterBlockItems.length; i++) {
        if (+filterBlockItems[i].getAttribute('data-slick-index') === slide) {
          for (var j = 0; j < techNewsInputs.length; j++) {
            if (techNewsInputs[j].id === filterBlockItems[i].title) {
              techNewsInputs[j].checked = true;
            }
          };
        }
      }
    }

    if (type === 'chip') {
      for (var _i = 0; _i < filterChipItems.length; _i++) {
        if (filterChipItems[_i].classList.contains('activeChoiceChip')) {
          for (var _j = 0; _j < techNewsInputs.length; _j++) {
            if (techNewsInputs[_j].id === filterChipItems[_i].title) {
              techNewsInputs[_j].checked = true;
            }
          };
        }
      }
    }
  };

  function getCheckedFilters(inputs) {
    var checkedFilters = [];
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === true) {
        checkedFilters.push(inputs[i]);
      }
    }
    return checkedFilters;
  }

  function checkAllFilters(filters) {
    for (var i = 0; i < filters.length; i++) {
      filters[i].checked = true;
    }
  };

  function clearAllFilters(filters) {
    for (var i = 0; i < filters.length; i++) {
      filters[i].checked = false;
    }
  };

  function showCheckedFilters() {
    var checkedPlatformItems = getCheckedFilters(filterPlatformInputs);
    var choiceTotal = getCheckedFilters(techNewsInputs);

    if (checkedPlatformItems.length > 1) {
      filterBlocksContainer.classList.add('mainHidden');
      filterChipsContainer.classList.remove('mainHidden');
      var multipleChoice = [];

      for (var _i2 = 0; _i2 < checkedPlatformItems.length; _i2++) {
        for (var j = 0; j < filterChipItems.length; j++) {
          if (filterChipItems[j].title === checkedPlatformItems[_i2].id) {
            multipleChoice.push(filterChipItems[j]);
          }
        }
      };

      for (var _i3 = 0; _i3 < filterChipItems.length; _i3++) {
        filterChipItems[_i3].classList.remove('activeChoiceChip');
      }
      multipleChoice.forEach(function (item) {
        item.classList.add('activeChoiceChip');
      });
    } else if (checkedPlatformItems.length === 1) {
      filterChipsContainer.classList.add('mainHidden');
      filterBlocksContainer.classList.remove('mainHidden');
      var choice;

      for (var _i4 = 0; _i4 < filterBlockItems.length; _i4++) {
        if (filterBlockItems[_i4].title === checkedPlatformItems[0].id) {
          choice = filterBlockItems[_i4].getAttribute('data-slick-index');
        }
      }
      jQuery(function() {
        $('.techNewsFilterBlocksContainer').slick('slickGoTo', choice);
      });
    } else if (checkedPlatformItems.length === 0) {
      filterChipsContainer.classList.remove('mainHidden');
      filterBlocksContainer.classList.add('mainHidden');

      for (var _i5 = 0; _i5 < filterChipItems.length; _i5++) {
        filterChipItems[_i5].classList.add('activeChoiceChip');
      }

      for (var _i6 = 0; _i6 < filterBlockItems.length; _i6++) {
        filterBlockItems[_i6].classList.remove('activeChoiceChip');
      }
    }

    var checkedInterestItems = getCheckedFilters(filterInterestInputs);

    if (checkedPlatformItems.length > 0 || checkedInterestItems.length > 0) {
      redDot.classList.remove('mainHidden');
    } else {
      redDot.classList.add('mainHidden');
    }

    return choiceTotal;
  }

  
}); 
//------------------END CHANGE FILTERS-----------------------
//------------------ END CREATE TECHNEWS FILTER CHECKBOXES, BLOCKS & CHIPS-------------------------
