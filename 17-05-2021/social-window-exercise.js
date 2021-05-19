const submitButton = document.querySelector('#submit-button')

const openWindows = []

function openSocialUrlByUserName(url, username) {
  const socialUrl = [url, username].join('/')

  const _window = window.open(socialUrl)

  openWindows.push(_window)

  console.log(openWindows);
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault()

  const socialOption = document.querySelector('#social-option').value
  const username = document.querySelector('#username').value

  // const socialUrl = [socialOption, username].join('/') // socialOption.concat('/' + username) seria a mesma coisa

  switch (socialOption) {
    case 'GitHub':
      openSocialUrlByUserName ('https://github.com', username) 
      break;
      
    case 'Facebook':
      openSocialUrlByUserName ('https://fb.com', username)
      break;

    case 'Twitter':
      openSocialUrlByUserName ('https://twitter.com', username)
      break;

    default:
      console.error('Opção não válida')
      break;
  }

  // console.log(socialOption);
  // console.log(username);
  // console.log(socialUrl);
})