//------------------ OPEN & CLOSE DROPDOWN MENU-------------------------
const openMenu = document.querySelector('.headerMenuButton');
const menuContainer = document.querySelector('.mainDropdownMenuContainer');
const closeMenu = menuContainer.querySelector('.mainDropdownMenuClose');

openMenu.addEventListener('click', function () {
  menuContainer.classList.remove('mainHidden');
  setTimeout(function() {
    menuContainer.classList.add('mainDropdownMenuContainerOpen');
  }, 50);
});

closeMenu.addEventListener('click', function () {
  menuContainer.classList.remove('mainDropdownMenuContainerOpen');
  setTimeout(function() {
    menuContainer.classList.add('mainHidden');
    }, 250);
});
//------------------END OPEN & CLOSE DROPDOWN MENU------------------------
