document.addEventListener("DOMContentLoaded", () => {

  //------------------ OPEN & CLOSE DROPDOWN MENU-------------------------
  const openMenu = document.querySelector('.headerMenuButton');
  const menuContainer = document.querySelector('.mainDropdownMenuContainer');
  const closeMenu = menuContainer.querySelector('.mainDropdownMenuClose');

  openMenu.addEventListener('click', () => {
    menuContainer.classList.remove('mainHidden');
  });

  closeMenu.addEventListener('click', () => {
    menuContainer.classList.add('mainHidden');
  });
  //------------------END OPEN & CLOSE DROPDOWN MENU------------------------

  const contactsFormSelect = document.querySelector('.contactsFormSelect');
  const contactsSelectDropdown = document.querySelector('.contactsSelectDropdown');

  contactsFormSelect.addEventListener('click', (e) => {
    contactsSelectDropdown.classList.toggle('mainHidden');
    contactsFormSelect.classList.toggle('contactsFormSelectOpen');
  });

  contactsSelectDropdown.addEventListener('click', (e) => {
    contactsFormSelect.value = e.target.title;
    contactsSelectDropdown.classList.toggle('mainHidden');
    contactsFormSelect.classList.toggle('contactsFormSelectOpen');
  })
});


