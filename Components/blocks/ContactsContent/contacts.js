document.addEventListener("DOMContentLoaded", () => {

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


