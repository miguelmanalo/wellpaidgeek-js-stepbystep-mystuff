function getDOMInfo () {
  return {
    numOfWarning: [...document.querySelectorAll('warning')].length+1,
    numOfP: [...document.querySelectorAll('p')].length,
    text: document.querySelector('textarea').value,
    numInPrimary: document.querySelector('ul').querySelectorAll('.primary li').length,
    textInSecondary: [...document.querySelectorAll('ul')][1].querySelectorAll('li')[1].textContent,
    textInButton: [...document.querySelectorAll('.button')].map(item => item.value).join(" "),
  }
}