document.addEventListener("DOMContentLoaded", function () {

  const contactsFormSelect = document.querySelector('.contactsFormSelect');
  const contactsSelectDropdown = document.querySelector('.contactsSelectDropdown');
  const arrow = document.querySelector('.contactsArrow');

  contactsFormSelect.addEventListener('click', function () {
    contactsSelectDropdown.classList.toggle('mainHidden');
    contactsFormSelect.classList.toggle('contactsFormSelectOpen');
    arrow.classList.toggle('rotateArrow');
  });

  contactsSelectDropdown.addEventListener('click', function (e) {
    contactsFormSelect.value = e.target.title;
    contactsSelectDropdown.classList.toggle('mainHidden');
    contactsFormSelect.classList.toggle('contactsFormSelectOpen');
    arrow.classList.toggle('rotateArrow');
  })
});


