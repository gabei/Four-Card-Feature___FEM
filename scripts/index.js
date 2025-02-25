const tabbableElements = document.querySelectorAll(".tabbable");

tabbableElements.forEach((element) => {
  element.tabIndex = 0;
});
