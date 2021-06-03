"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var filterContainer = document.querySelector('.FilterContainer');
  var Filter = document.querySelector('.Filter');
  var openFilter = document.querySelector('.headerPagesFilterButton'); 
  
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
  var filterBlocksContainer = document.querySelector('.techNewsFilterBlocksContainer');
  var headerContentContainer = document.querySelector('.headerPagesContentContainer');
  addFilterBlocks();
  addFilterChips();
  var redDot = openFilter.querySelector('.redCircle');
  var filterPlatformContainer = Filter.querySelector('.techNewsFilterPlatform');
  var filterPlatformInputs = filterPlatformContainer.getElementsByTagName('input');
  var filterInterestContainer = Filter.querySelector('.techNewsFilterInterest');
  var filterInterestInputs = filterInterestContainer.getElementsByTagName('input');
  var filterBlockItems = filterBlocksContainer.querySelectorAll('.techNewsFilterBlockItem');
  var filterChipItems = filterChipsContainer.querySelectorAll('.techNewsFilterChipsItem');
  var filterApplyButton = Filter.querySelector('.FilterFooter');
  var filterClearButton = Filter.querySelector('.FilterClear');
  createFilterCheckboxes();
  var checkAllPlatformInput = document.getElementById('All Platforms');
  var checkAllInterestInput = document.getElementById('All_Interest');
  var techNewsInputs = Filter.querySelectorAll('input');
  
  showCheckedFilters();
  animateBlocks();
  
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
    filterContainer.classList.add('mainHidden');
  });
  //------------------ CREATE FILTER BLOCKS-----------------

  function addFilterBlocks() {
    filterList.forEach(function (item) {
      var filterBlockItem = document.createElement('div');
      var filterBlockItemCover = document.createElement('div');
      filterBlockItemCover.classList.add('blockCover');
      filterBlockItem.classList.add('techNewsFilterBlockItem');
      filterBlockItem.setAttribute('title', item.title);
      var filterBlockItemTitle = document.createElement('h3');
      filterBlockItemTitle.textContent = item.title;
      var filterBlockItemDescription = document.createElement('ul');
      filterBlockItemDescription.classList.add('techNewsFilterItemText');

      function createDescription() {
        item.description.forEach(function (item) {
          var listItem = document.createElement('li');
          listItem.textContent = item;
          filterBlockItemDescription.appendChild(listItem);
        });
      };
      createDescription();
      filterBlockItem.appendChild(filterBlockItemCover);
      filterBlockItem.appendChild(filterBlockItemTitle);
      filterBlockItem.appendChild(filterBlockItemDescription);
      filterBlocksContainer.appendChild(filterBlockItem);
    });
  };
  //------------------END CREATE FILTER BLOCKS------------------
  
  //------------------START ANIMATE FILTER BLOCKS------------------

  function animateBlocks() {
    clickBlocks();
    filterBlocksContainer.addEventListener('mousedown', function (e) {
      handleBlocksMouseMove(e);
    }, false);
    filterBlocksContainer.addEventListener('touchstart', function (e) {
      handleBlocksTouchMove(e);
    }, false);
  }

  function handleBlocksMouseMove(e) {
    e.preventDefault();
    var clickDuration = 400;
    var t1 = Date.now();
    var mouseStart = e.clientX;
    var containerPos = headerContentContainer.getBoundingClientRect().left;
    var blocksPos = filterBlocksContainer.getBoundingClientRect().left;
    var shift = blocksPos - containerPos;
    var minPosition = -232 * (filterBlockItems.length - 1);
    var maxPosition = 0;

    document.onmousemove = function (e) {
      var mouseMove = e.clientX;
      var newPos = mouseMove - mouseStart + shift;

      if (newPos > maxPosition) {
        newPos = maxPosition;
      };

      if (newPos < minPosition) {
        newPos = minPosition;
      };
      filterBlocksContainer.style.left = newPos + 'px';
      filterBlocksContainer.classList.add('blockContainerMoved');
    };

    document.addEventListener('mouseup', function (e) {
      var t2 = Date.now();
      var mouseFinish = e.clientX;

      if (t2 - t1 < clickDuration && Math.abs(mouseFinish - mouseStart) < 10) {
        var clickEvent = createNewEvent('blockClick');
        e.target.dispatchEvent(clickEvent);
      }

      document.onmousemove = null;
      filterBlocksContainer.classList.remove('blockContainerMoved');
    });
  };

  function createNewEvent(eventName) {
    var event;
    if (typeof Event === 'function') {
      event = new Event(eventName);
    } else {
      event = document.createEvent('Event');
      event.initEvent(eventName, true, true);
    }
    return event;
  }

  function handleBlocksTouchMove(e) {
    e.preventDefault();
    var touchDuration = 500;
    var d1 = Date.now();
    var touchStart = e.changedTouches[0].clientX;
    var containerPos = headerContentContainer.getBoundingClientRect().left;
    var blocksPos = filterBlocksContainer.getBoundingClientRect().left;
    var shift = blocksPos - containerPos;
    var minPosition = -232 * (filterBlockItems.length - 1);
    var maxPosition = 0;

    document.ontouchmove = function (e) {
      var touchMove = e.changedTouches[0].clientX;
      var newPos = touchMove - touchStart + shift;

      if (newPos > maxPosition) {
        newPos = maxPosition;
      };

      if (newPos < minPosition) {
        newPos = minPosition;
      };
      filterBlocksContainer.style.left = newPos + 'px';
      filterBlocksContainer.classList.add('blockContainerMoved');
    };

    document.addEventListener('touchend', function (e) {
      var d2 = Date.now();
      var touchFinish = e.changedTouches[0].clientX;

      if (d2 - d1 < touchDuration && Math.abs(touchFinish - touchStart) < 10) {
        var blockClick = new Event("blockClick");
        e.target.dispatchEvent(blockClick);
      }

      document.ontouchmove = null;
      filterBlocksContainer.classList.remove('blockContainerMoved');
    });
  }

  function clickBlocks() {
    var _loop = function _loop(i) {
      var cover = filterBlockItems[i].querySelector('.blockCover');
      cover.addEventListener('blockClick', function (e) {
        e.preventDefault();
        var containerPosition = filterBlocksContainer.getBoundingClientRect().left;
        console.log(filterBlockItems[i]);
        var blockPosition = filterBlockItems[i].getBoundingClientRect().left;
        for (let j = 0; j < filterBlockItems.length; j++) {
          if (filterBlockItems[j].classList.contains('activeChoiceBlock')) {
            filterBlockItems[j].classList.remove('activeChoiceBlock');
          }
        }
        filterBlockItems[i].classList.add('activeChoiceBlock');
        filterBlocksContainer.classList.add('blockContainerClicked');
        filterBlocksContainer.style.left = containerPosition - blockPosition + 'px';
        filterBlocksContainer.addEventListener('transitionend', function () {
          filterBlocksContainer.classList.remove('blockContainerClicked');
        });
        updateFilters('block');
      });
    };

    for (var i = 0; i < filterBlockItems.length; i++) {
      _loop(i);
    }
  } 
  //------------------END ANIMATE FILTER BLOCKS------------------
  
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

  function updateFilters(type) {
    clearAllFilters(techNewsInputs);

    if (type === 'block') {
      for (var i = 0; i < filterBlockItems.length; i++) {
        if (filterBlockItems[i].classList.contains('activeChoiceBlock')) {
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
    for (var i = 0; i < filterBlockItems.length; i++) {
      filterBlockItems[i].classList.remove('activeChoiceBlock');
    }

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
          choice = filterBlockItems[_i4];
        }
      }
      choice.classList.add('activeChoiceBlock');
      var containerPosition = filterBlocksContainer.getBoundingClientRect().left;
      var blockPosition = choice.getBoundingClientRect().left;
      filterBlocksContainer.classList.add('blockContainerClicked');
      filterBlocksContainer.style.left = containerPosition - blockPosition + 'px';
      filterBlocksContainer.addEventListener('transitionend', function (){
        filterBlocksContainer.classList.remove('blockContainerClicked');
      })
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
