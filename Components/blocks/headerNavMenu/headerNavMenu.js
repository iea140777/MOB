//------------------ OPEN & CLOSE DROPDOWN MENU-------------------------
const openMenu = document.querySelector('.headerMenuButton');
const menuContainer = document.querySelector('.mainDropdownMenuContainer');
const closeMenu = menuContainer.querySelector('.mainDropdownMenuClose');

openMenu.addEventListener('click', function () {
  menuContainer.classList.remove('mainHidden');
});

closeMenu.addEventListener('click', function () {
  menuContainer.classList.add('mainHidden');
});
//------------------END OPEN & CLOSE DROPDOWN MENU------------------------