// document.addEventListener('keypress', (e) => {
//   const div = document.getElementById('text');
//   div.innerHTML += e.key; 
// });

// document
//   .getElementById('members-only-link')
//   .addEventListener('click', (e) => {
//     e.preventDefault();
//     alert('You have to be logged in');
//   });

// function trackEvent (eventType, properties) {
//   console.log('Tracking Event', eventType, properties);
// }

// document.addEventListener('click', (e) => {
//   if (e.target.tagName === 'A') {
//   trackEvent('linkClick', { href: e.target.href });
//   }
// });

// const rectangle1 = document.getElementById('rectangle1');
// rectangle1.addEventListener('mouseover', () => {
//   rectangle1.textContent = 'over';
// });
// rectangle1.addEventListener('mouseout', () => {
//   rectangle1.textContent = 'out';
// });

// const textbox1 = document.getElementById('text-input');
// textbox1.addEventListener('focus', () => {
//   console.log('focus');
// });
// textbox1.addEventListener('blur', () => {
//   console.log('blur');
// });

// const theButton = document.getElementById('add');
// const list = document.getElementById('list');

// theButton.addEventListener('click', () => {
//   const newItem = document.createElement('li');
//   newItem.innerText = 'an item';
//   list.appendChild(newItem);
// });

document
  .querySelector('li')
  .addEventListener('click', () => alert('hello'));

const addButton = document.getElementById('add');
const list = document.getElementById('list');
const removeButton = document.getElementById('remove');

removeButton.addEventListener('click', () => {
  const items = document.querySelectorAll('#list li');
  const lastItem = items[items.length - 1];
  lastItem.remove();
  // list.removeChild(lastItem);
})

addButton.addEventListener('click', () => {
  const newItem = document.createElement ('li');
  const newCheckbox = document.createElement('input');
  newCheckbox.type = "checkbox";
  const textNode = document.createTextNode('An item');
  newItem.appendChild(newCheckbox);
  newItem.appendChild(textNode);
  list.appendChild(newItem);
});

// document.querySelector('li').classList.add('done');

list.addEventListener('change', (e) => {
  const listItem = e.target.parentElement;
  listItem.classList.add('done');
})