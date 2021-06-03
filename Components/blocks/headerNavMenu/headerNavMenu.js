document.addEventListener("DOMContentLoaded", function () {

  //------------------ OPEN & CLOSE DROPDOWN MENU-------------------------
  const menuContainer = document.querySelector('.mainDropdownMenuContainer');
  const openMenuButton = document.querySelector('.headerMenuButton');
  const closeMenuButton = menuContainer.querySelector('.mainDropdownMenuClose');

  openMenuButton.addEventListener('click', function () {
    openMenu ();
  });

  closeMenuButton.addEventListener('click', function () {
    closeMenu (); 
  });

  document.addEventListener('click', function (e){
    const target = e.target;
    const menu = target == menuContainer || menuContainer.contains(target);
    const menyActive = menuContainer.classList.contains('mainDropdownMenuContainerOpen');
    if (!menu && menyActive) {
      closeMenu();
    }
  })

  function openMenu () {
    menuContainer.classList.remove('mainHidden');
    setTimeout(function() {
      menuContainer.classList.add('mainDropdownMenuContainerOpen');
    }, 50);
  }

  function closeMenu () {
    menuContainer.classList.remove('mainDropdownMenuContainerOpen');
    setTimeout(function() {
      menuContainer.classList.add('mainHidden');
    }, 250);
  }
//------------------END OPEN & CLOSE DROPDOWN MENU------------------------

});
