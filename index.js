let caps = false

const keys = [{ code: '192', value: '`' }, { code: '49', value: '1' }, { code: '50', value: '2' }, { code: '51', value: '3' }, { code: '52', value: '4' }, { code: '53', value: '5' }, { code: '54', value: '6' }, { code: '55', value: '7' }, { code: '56', value: '8' }, { code: '57', value: '9' }, { code: '48', value: '0' }, { code: '189', value: '-' }, { code: '187', value: '=' }, { code: '8', value: 'backspace', lineBreak: 1 }, { code: '9', value: 'Tab' }, { code: '81', value: 'q' }, { code: '87', value: 'w' }, { code: '69', value: 'e' }, { code: '82', value: 'r' }, { code: '84', value: 't' }, { code: '89', value: 'y' }, { code: '85', value: 'u' }, { code: '73', value: 'i' }, { code: '79', value: 'o' }, { code: '80', value: 'p' }, { code: '219', value: '[' }, { code: '221', value: ']' }, { code: '220', value: '\\' }, { code: '46', value: 'del', lineBreak: 2 }, { code: '20', value: 'caps' }, { code: '65', value: 'a' }, { code: '83', value: 's' }, { code: '68', value: 'd' }, { code: '70', value: 'f' }, { code: '71', value: 'g' }, { code: '72', value: 'h' }, { code: '74', value: 'j' }, { code: '75', value: 'k' }, { code: '76', value: 'l' }, { code: '186', value: ';' }, { code: '222', value: "'" }, { code: '13', value: 'enter', lineBreak: 3 }, { code: '16', value: 'shift' }, { code: '90', value: 'z' }, { code: '88', value: 'x' }, { code: '67', value: 'c' }, { code: '86', value: 'v' }, { code: '66', value: 'b' }, { code: '78', value: 'n' }, { code: '77', value: 'm' }, { code: '188', value: ',' }, { code: '190', value: '.' }, { code: '191', value: '/' }, { code: '38', value: '▲' }, { code: '16', value: 'shift', lineBreak: 4 }, { code: '17', value: 'ctrl' }, { code: '91', value: 'win' }, { code: '18', value: 'Alt' }, { code: '32', value: 'space' }, { code: '18', value: 'Alt' }, { code: '37', value: '◄' }, { code: '40', value: '▼' }, { code: '39', value: '►' }, { code: '17', value: 'ctrl' }]

function init () {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const header = document.createElement('h1')
  header.innerHTML = 'RSS Виртуальная клавиатура'

  const textArea = document.createElement('textarea')
  textArea.classList.add('text-area')
  textArea.setAttribute('rows', '5')
  textArea.setAttribute('col', '50')
  textArea.addEventListener('focus', (e) => {
    document.addEventListener('keydown', visualKeyDownHandler)
    document.removeEventListener('keydown', keyDownHandle)
    console.log(e.key)
  })
  textArea.addEventListener('blur', () => {
    document.addEventListener('keydown', keyDownHandle)
    document.removeEventListener('keydown', visualKeyDownHandler)
  })

  const keyboard = document.createElement('div')
  keyboard.classList.add('keyboard')

  const description = document.createElement('h3')
  description.innerHTML = 'Клавиатура создана в операционной системе Windows'

  const lang = document.createElement('h3')
  lang.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt'

  const keyboardKeys = document.createElement('div')
  keyboardKeys.classList.add('keyboard__keys')

  document.body.append(wrapper)
  wrapper.append(header)
  wrapper.append(textArea)
  wrapper.append(keyboard)
  wrapper.append(description)
  wrapper.append(lang)
  keyboard.append(keyboardKeys)

  const createKeys = () => {
    const fragment = document.createDocumentFragment()

    const createIconHTML = (iconName) => {
      return `<i class="material-icons">${iconName}</i>`
    }

    keys.forEach(key => {
      const keyElement = document.createElement('button')
      const insertLineBreak = [1, 2, 3, 4].indexOf(key.lineBreak) !== -1

      keyElement.setAttribute('type', 'button')
      keyElement.classList.add('keyboard__key')

      switch (key.value) {
        case 'backspace':
          keyElement.classList.add('keyboard__key_wide')
          keyElement.innerHTML = createIconHTML('backspace')
          keyElement.setAttribute('data', `${key.code}`)
          keyElement.addEventListener('click', () => {
            textArea.value = textArea.value.substring(0, textArea.value.length - 1)
          })

          break

        case 'del':
          keyElement.classList.add('keyboard__key')
          keyElement.textContent = key.value.toLowerCase()
          keyElement.setAttribute('data', `${key.code}`)

          break

        case 'caps':
          keyElement.classList.add('keyboard__key_wide', 'keyboard__key_activatable')
          keyElement.innerHTML = createIconHTML('keyboard_capslock')
          keyElement.setAttribute('data', `${key.code}`)
          keyElement.addEventListener('click', () => {
            keyElement.classList.toggle('keyboard__key_active')
            keyElement.classList.contains('keyboard__key_active') ? caps = true : caps = false
            toggleCapsLockHandler()
          })

          break

        case 'enter':
          keyElement.classList.add('keyboard__key_wide')
          keyElement.innerHTML = createIconHTML('keyboard_return')
          keyElement.setAttribute('data', `${key.code}`)
          keyElement.addEventListener('click', () => {
            textArea.value += '\n'
          })

          break

        case 'space':
          keyElement.classList.add('keyboard__key_extra-wide')
          keyElement.innerHTML = createIconHTML('space_bar')
          keyElement.setAttribute('data', `${key.code}`)
          keyElement.addEventListener('click', () => {
            textArea.value += ' '
          })

          break

        case 'Tab':
          keyElement.classList.add('keyboard__key')
          keyElement.textContent = key.value.toLowerCase()
          keyElement.setAttribute('data', `${key.code}`)
          keyElement.addEventListener('click', () => {
            textArea.value += '  '
          })

          break

        case 'shift':
          keyElement.classList.add('keyboard__key_wide')
          keyElement.textContent = key.value.toLowerCase()

          break

        default:

          keyElement.textContent = key.value.toLowerCase()
          keyElement.setAttribute('data', `${key.code}`)

          keyElement.addEventListener('click', () => {
            caps === true ? keyElement.innerHTML.toUpperCase() : keyElement.innerHTML.toLowerCase()

            textArea.value += keyElement.innerHTML
          })

          break
      }

      fragment.appendChild(keyElement)

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'))
      }
    })

    return keyboardKeys.append(fragment)
  }

  createKeys()

  document.addEventListener('keydown', keyDownHandle)

  document.onkeyup = () => {
    const buttons = document.querySelectorAll('.keyboard__key')
    buttons.forEach(btn => btn.classList.remove('active'))
  }
}

init()

function toggleCapsLockHandler () {
  const buttons = document.querySelectorAll('.keyboard__key')

  for (const key of buttons) {
    if (key.childElementCount === 0) {
      console.log(key.textContent)
      if (key.textContent !== 'alt' && key.textContent !== 'win' && key.textContent !== 'ctrl' && key.textContent !== 'tab' && key.textContent !== 'shift' && key.textContent !== 'del') {
        caps ? key.textContent = key.textContent.toUpperCase() : key.textContent = key.textContent.toLowerCase()
      }
    }
  }
}

function keyDownHandle (event) {
  const button = document.querySelector(`.keyboard__key[data="${event.keyCode}"]`)
  button.classList.add('active')
  const area = document.querySelector('.text-area')
  if (event.keyCode === 20) {
    button.classList.toggle('keyboard__key_active')
    area.value += ''
    button.classList.contains('keyboard__key_active') ? caps = true : caps = false
    toggleCapsLockHandler()
  } else if (event.keyCode === 8) {
    area.value = area.value.substring(0, area.value.length - 1)
  } else if (event.keyCode === 13) {
    area.value += '\n'
  } else if (event.keyCode === 9) {
    area.value += '  '
  } else if (event.keyCode === 37) {
    area.value += '◄'
  } else if (event.keyCode === 38) {
    area.value += '▲'
  } else if (event.keyCode === 39) {
    area.value += '►'
  } else if (event.keyCode === 40) {
    area.value += '▼'
  } else {
    area.value += event.key
  }
}

function visualKeyDownHandler (e) {
  const button = document.querySelector(`.keyboard__key[data="${event.keyCode}"]`)
  button.classList.add('active')
  if (e.key === 'CapsLock') {
    button.classList.toggle('keyboard__key_active')
  }
  button.classList.contains('keyboard__key_active') ? caps = true : caps = false
  toggleCapsLockHandler()
}
