const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const uncheckAllButton = document.getElementById('uncheck-all');
const list = document.getElementById('list');

addButton.addEventListener('click', () => {
  const newItem = document.createElement('li');
  const newCheckbox = document.createElement('input');
  newCheckbox.type = "checkbox";
  const textNode = document.createTextNode('An item');
  newItem.appendChild(newCheckbox);
  newItem.appendChild(textNode);
  list.appendChild(newItem);
});

removeButton.addEventListener('click', () => {
  const items = document.querySelectorAll('#list li');
  const lastItem = items[items.length - 1];
  list.removeChild(lastItem);
});

list.addEventListener('change', (e) => {
  const listItem = e.target.parentElement;
  listItem.classList.add('done');
});