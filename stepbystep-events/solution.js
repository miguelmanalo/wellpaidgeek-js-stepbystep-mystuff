// let y = document.querySelector('div');
// const array1 = [...y.querySelectorAll('.clickable')];

//this worked but only for one box
// array1[0].addEventListener('click', (e) => {
//     e.target.style.backgroundColor = 'red';
    
//   });


//my incomplete answer chooses the bottom row too
  // document.addEventListener('click', (e) => {
  //   // if (e.target.parentElement === 'div.container.blocks' && e.target.className === 'clickable') {
  //   //   clickableClicked(e);
  //   // } 
  //   if (e.target.className === 'clickable') {
  //     console.log('click');
  //     clickableClicked(e);
  //   }

  // });

  //the answer based on the given solution
  //successfully filters out the bottom row
  document
    .querySelector('.container')
    .addEventListener('click', (e) => {
    if (e.target.className === 'clickable') {
      console.log('click');
      clickableClicked(e);
    }

  });
