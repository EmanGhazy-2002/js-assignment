function toggledButton(Selector){
  const button = document.querySelector(Selector);
  const isToggled = button.classList.contains('is-toggled');
  if (!isToggled) {
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }

}

