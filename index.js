let options = {
  caps: false, lang: 'en', shift: false
};
const myOptions = localStorage.getItem('options');

if (myOptions) {
  options = JSON.parse(myOptions);
} else {
  options = {
    caps: false, lang: 'en', shift: false
  };
}

const keys = [{
  code: '192',
  value: {
    en: '`', ru: 'ё', shiftEn: '~', shiftRu: 'Ё'
  }
}, {
  code: '49',
  value: {
    en: '1', ru: '1', shiftEn: '!', shiftRu: '!'
  }
}, {
  code: '50',
  value: {
    en: '2', ru: '2', shiftEn: '@', shiftRu: '"'
  }
}, {
  code: '51',
  value: {
    en: '3', ru: '3', shiftEn: '#', shiftRu: '№'
  }
}, {
  code: '52',
  value: {
    en: '4', ru: '4', shiftEn: '$', shiftRu: ';'
  }
}, {
  code: '53',
  value: {
    en: '5', ru: '5', shiftEn: '%', shiftRu: '%'
  }
}, {
  code: '54',
  value: {
    en: '6', ru: '6', shiftEn: '^', shiftRu: ':'
  }
}, {
  code: '55',
  value: {
    en: '7', ru: '7', shiftEn: '&', shiftRu: '?'
  }
}, {
  code: '56',
  value: {
    en: '8', ru: '8', shiftEn: '*', shiftRu: '*'
  }
}, {
  code: '57',
  value: {
    en: '9', ru: '9', shiftEn: '(', shiftRu: '('
  }
}, {
  code: '48',
  value: {
    en: '0', ru: '0', shiftEn: ')', shiftRu: ')'
  }
}, {
  code: '189',
  value: {
    en: '-', ru: '-', shiftEn: '_', shiftRu: '_'
  }
}, {
  code: '187',
  value: {
    en: '=', ru: '=', shiftEn: '+', shiftRu: '+'
  }
}, { code: '8', value: { en: 'backspace', ru: 'backspace' }, lineBreak: 1 }, { code: '9', value: { en: 'Tab', ru: 'Tab' } }, { code: '81', value: { en: 'q', ru: 'й' } }, { code: '87', value: { en: 'w', ru: 'ц' } }, { code: '69', value: { en: 'e', ru: 'у' } }, { code: '82', value: { en: 'r', ru: 'к' } }, { code: '84', value: { en: 't', ru: 'е' } }, { code: '89', value: { en: 'y', ru: 'н' } }, { code: '85', value: { en: 'u', ru: 'г' } }, { code: '73', value: { en: 'i', ru: 'ш' } }, { code: '79', value: { en: 'o', ru: 'щ' } }, { code: '80', value: { en: 'p', ru: 'з' } }, {
  code: '219',
  value: {
    en: '[', ru: 'х', shiftEn: '{', shiftRu: 'З'
  }
}, {
  code: '221',
  value: {
    en: ']', ru: 'ъ', shiftEn: '}', shiftRu: 'Ъ'
  }
}, {
  code: '220',
  value: {
    en: '\\', ru: '\\', shiftEn: '|', shiftRu: '/'
  }
}, { code: '46', value: { en: 'del', ru: 'del' }, lineBreak: 2 }, { code: '20', value: { en: 'caps', ru: 'caps' } }, { code: '65', value: { en: 'a', ru: 'ф' } }, { code: '83', value: { en: 's', ru: 'ы' } }, { code: '68', value: { en: 'd', ru: 'в' } }, { code: '70', value: { en: 'f', ru: 'а' } }, { code: '71', value: { en: 'g', ru: 'п' } }, { code: '72', value: { en: 'h', ru: 'р' } }, { code: '74', value: { en: 'j', ru: 'о' } }, { code: '75', value: { en: 'k', ru: 'л' } }, { code: '76', value: { en: 'l', ru: 'д' } }, {
  code: '186',
  value: {
    en: ';', ru: 'ж', shiftEn: ':', shiftRu: 'Ж'
  }
}, {
  code: '222',
  value: {
    en: "'", ru: 'э', shiftEn: '"', shiftRu: 'Э'
  }
}, { code: '13', value: { en: 'enter', ru: 'enter' }, lineBreak: 3 }, { code: '16', value: { en: 'shift', ru: 'shift' } }, { code: '90', value: { en: 'z', ru: 'я' } }, { code: '88', value: { en: 'x', ru: 'ч' } }, { code: '67', value: { en: 'c', ru: 'с' } }, { code: '86', value: { en: 'v', ru: 'м' } }, { code: '66', value: { en: 'b', ru: 'и' } }, { code: '78', value: { en: 'n', ru: 'т' } }, { code: '77', value: { en: 'm', ru: 'ь' } }, {
  code: '188',
  value: {
    en: ',', ru: 'б', shiftEn: '<', shiftRu: 'Б'
  }
}, {
  code: '190',
  value: {
    en: '.', ru: 'ю', shiftEn: '>', shiftRu: 'Ю'
  }
}, {
  code: '191',
  value: {
    en: '/', ru: '.', shiftEn: '?', shiftRu: ','
  }
}, { code: '38', value: { en: '▲', ru: '▲' } }, { code: '16', value: { en: 'shift', ru: 'shift' }, lineBreak: 4 }, { code: '17', value: { en: 'ctrl', ru: 'ctrl' } }, { code: '91', value: { en: 'win', ru: 'win' } }, { code: '18', value: { en: 'Alt', ru: 'Alt' } }, { code: '32', value: { en: 'space', ru: 'space' } }, { code: '18', value: { en: 'Alt', ru: 'Alt' } }, { code: '37', value: { en: '◄', ru: '◄' } }, { code: '40', value: { en: '▼', ru: '▼' } }, { code: '39', value: { en: '►', ru: '►' } }, { code: '17', value: { en: 'ctrl', ru: 'ctrl' } }];

function toggleCapsLockHandler() {
  const buttons = document.querySelectorAll('.keyboard__key');

  for (let i = 0; i < buttons.length; i += 1) {
    const key = buttons[i];
    if (key.childElementCount === 0) {
      if (key.textContent !== 'alt' && key.textContent !== 'win' && key.textContent !== 'ctrl'
       && key.textContent !== 'tab' && key.textContent !== 'shift' && key.textContent !== 'del') {
        if (options.caps) {
          key.textContent = key.textContent.toUpperCase();
        } else { key.textContent = key.textContent.toLowerCase(); }
      }
    }
  }
}

function keyDownHandle(event) {
  const button = document.querySelector(`.keyboard__key[data="${event.keyCode}"]`);
  button.classList.add('active');
  const area = document.querySelector('.text-area');
  if (event.keyCode === 20) {
    button.classList.toggle('keyboard__key_active');
    area.value += '';
    if (button.classList.contains('keyboard__key_active')) { options.caps = true; } else { options.caps = false; }
    toggleCapsLockHandler();
  } else if (event.keyCode === 8) {
    let caretPosition = area.selectionStart;
    if (caretPosition === 0) {
      return;
    }
    area.value = area.value.slice(0, caretPosition - 1) + area.value.slice(caretPosition);
    caretPosition = area.setSelectionRange(caretPosition - 1, caretPosition - 1);
  } else if (event.keyCode === 13) {
    let caretPosition = area.selectionStart;
    const str = '';
    area.value.length += 1;
    area.value = str.concat(area.value.slice(0, caretPosition), '\n', area.value.slice(caretPosition, area.value.length));
    area.focus();
    caretPosition = area.setSelectionRange(caretPosition + 1, caretPosition + 1);
  } else if (event.keyCode === 9) {
    let caretPosition = area.selectionStart;
    const str = '';
    area.value.length += 1;
    area.value = str.concat(area.value.slice(0, caretPosition), '  ', area.value.slice(caretPosition, area.value.length));
    area.focus();
    caretPosition = area.setSelectionRange(caretPosition + 2, caretPosition + 2);
  } else if (event.keyCode === 37) {
    area.value += '◄';
  } else if (event.keyCode === 38) {
    area.value += '▲';
  } else if (event.keyCode === 39) {
    area.value += '►';
  } else if (event.keyCode === 40) {
    area.value += '▼';
  } else if (event.keyCode === 32) {
    let caretPosition = area.selectionStart;
    const str = '';
    area.value.length += 1;
    area.value = str.concat(area.value.slice(0, caretPosition), ' ', area.value.slice(caretPosition, area.value.length));
    area.focus();
    caretPosition = area.setSelectionRange(caretPosition + 1, caretPosition + 1);
  } else if (event.code === 'AltRight' || event.code === 'AltLeft' || event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    area.value += '';
  } else if (event.code === 'ControlRight' || event.code === 'ControlLeft') {
    area.value += '';
  } else if (event.keyCode === 91) {
    area.value += '';
  } else if (event.keyCode === 46) {
    let caretPosition = area.selectionStart;
    if (caretPosition === area.length - 1) {
      return;
    }
    area.value = area.value.slice(0, caretPosition) + area.value.slice(caretPosition + 1);
    caretPosition = area.setSelectionRange(caretPosition, caretPosition);
  } else {
    // area.value += button.innerHTML
    let caretPosition = area.selectionStart;
    // keyElement.innerHTML
    const str = '';
    area.value.length += 1;
    area.value = str.concat(
      area.value.slice(0, caretPosition),
      button.innerHTML,
      area.value.slice(caretPosition, area.value.length)
    );
    area.focus();
    caretPosition = area.setSelectionRange(caretPosition + 1, caretPosition + 1);
  }
}

function toggleShiftHandler() {
  const buttons = document.querySelectorAll('.keyboard__key');

  for (let i = 0; i < buttons.length; i += 1) {
    const key = buttons[i];
    if (key.childElementCount === 0 && !['alt', 'win', 'ctrl', 'tab', 'shift', 'del'].includes(key.textContent)) {
      if (options.shift) {
        if (options.caps) {
          key.textContent = key.textContent.toLowerCase();
        } else {
          key.textContent = key.textContent.toUpperCase();
        }
      } else if (options.caps) {
        key.textContent = key.textContent.toUpperCase();
      } else {
        key.textContent = key.textContent.toLowerCase();
      }
    }
  }
}

function init() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const header = document.createElement('h1');
  header.innerHTML = 'RSS Виртуальная клавиатура';

  const langHeader = document.createElement('h2');
  langHeader.innerHTML = `Язык ${(options.lang).toUpperCase()}`;

  const textArea = document.createElement('textarea');
  textArea.classList.add('text-area');
  textArea.setAttribute('rows', '5');
  textArea.setAttribute('col', '50');
  textArea.addEventListener('keydown', (event) => {
    event.preventDefault();
  });
  textArea.addEventListener('blur', () => {
    document.addEventListener('keydown', keyDownHandle);
  });

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const description = document.createElement('h3');
  description.innerHTML = 'Клавиатура создана в операционной системе Windows';

  const lang = document.createElement('h3');
  lang.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt';

  const keyboardKeys = document.createElement('div');
  keyboardKeys.classList.add('keyboard__keys');

  document.body.append(wrapper);
  wrapper.append(header);
  wrapper.append(langHeader);
  wrapper.append(textArea);
  wrapper.append(keyboard);
  wrapper.append(description);
  wrapper.append(lang);
  keyboard.append(keyboardKeys);

  const createKeys = () => {
    const fragment = document.createDocumentFragment();

    const createIconHTML = (iconName) => {
      return `<i class="material-icons">${iconName}</i>`;
    };

    keys.forEach(key => {
      const keyElement = document.createElement('button');
      const insertLineBreak = [1, 2, 3, 4].indexOf(key.lineBreak) !== -1;

      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');

      switch (key.value[options.lang]) {
        case 'backspace':
          keyElement.classList.add('keyboard__key_wide');
          keyElement.innerHTML = createIconHTML('backspace');
          keyElement.setAttribute('data', `${key.code}`);

          keyElement.addEventListener('click', () => {
            let caretPosition = textArea.selectionStart;
            if (caretPosition === 0) {
              return;
            }
            textArea.value = textArea.value.slice(0, caretPosition - 1)
             + textArea.value.slice(caretPosition);
            textArea.focus();
            caretPosition = textArea.setSelectionRange(caretPosition - 1, caretPosition - 1);
          });

          break;

        case 'del':
          keyElement.classList.add('keyboard__key');
          keyElement.textContent = key.value[options.lang].toLowerCase();
          keyElement.setAttribute('data', `${key.code}`);
          keyElement.addEventListener('click', () => {
            let caretPosition = textArea.selectionStart;
            if (caretPosition === textArea.length - 1) { return; }
            textArea.value = textArea.value.slice(0, caretPosition)
             + textArea.value.slice(caretPosition + 1);
            textArea.focus();
            caretPosition = textArea.setSelectionRange(caretPosition, caretPosition);
          });
          break;

        case 'caps':
          keyElement.classList.add('keyboard__key_wide', 'keyboard__key_activatable');
          keyElement.innerHTML = createIconHTML('keyboard_capslock');
          keyElement.setAttribute('data', `${key.code}`);
          keyElement.addEventListener('click', () => {
            keyElement.classList.toggle('keyboard__key_active');
            if (keyElement.classList.contains('keyboard__key_active')) { options.caps = true; } else { options.caps = false; }
            toggleCapsLockHandler();
          });

          break;

        case 'enter':
          keyElement.classList.add('keyboard__key_wide');
          keyElement.innerHTML = createIconHTML('keyboard_return');
          keyElement.setAttribute('data', `${key.code}`);
          keyElement.addEventListener('click', () => {
            // textArea.value += '\n'
            let caretPosition = textArea.selectionStart;
            const str = '';
            textArea.value.length += 1;
            textArea.value = str.concat(textArea.value.slice(0, caretPosition), '\n', textArea.value.slice(caretPosition, textArea.value.length));
            textArea.focus();
            caretPosition = textArea.setSelectionRange(caretPosition + 1, caretPosition + 1);
          });

          break;

        case 'space':
          keyElement.classList.add('keyboard__key_extra-wide');
          keyElement.innerHTML = createIconHTML('space_bar');
          keyElement.setAttribute('data', `${key.code}`);
          keyElement.addEventListener('click', () => {
            let caretPosition = textArea.selectionStart;
            const str = '';
            textArea.value.length += 1;
            textArea.value = str.concat(textArea.value.slice(0, caretPosition), ' ', textArea.value.slice(caretPosition, textArea.value.length));
            textArea.focus();
            caretPosition = textArea.setSelectionRange(caretPosition + 1, caretPosition + 1);
          });

          break;

        case 'Tab':
          keyElement.classList.add('keyboard__key');
          keyElement.textContent = key.value[options.lang].toLowerCase();
          keyElement.setAttribute('data', `${key.code}`);
          keyElement.addEventListener('click', () => {
            // textArea.value += '  '
            let caretPosition = textArea.selectionStart;
            const str = '';
            textArea.value.length += 1;
            textArea.value = str.concat(textArea.value.slice(0, caretPosition), '  ', textArea.value.slice(caretPosition, textArea.value.length));
            textArea.focus();
            caretPosition = textArea.setSelectionRange(caretPosition + 2, caretPosition + 2);
          });

          break;

        case 'Alt':
          keyElement.classList.add('keyboard__key');
          keyElement.textContent = key.value[options.lang].toLowerCase();
          keyElement.setAttribute('data', `${key.code}`);
          keyElement.addEventListener('click', () => {
            textArea.value += '';
          });

          break;

        case 'ctrl':
          keyElement.classList.add('keyboard__key');
          keyElement.textContent = key.value[options.lang].toLowerCase();
          keyElement.setAttribute('data', `${key.code}`);
          keyElement.addEventListener('click', () => {
            textArea.value += '';
          });

          break;

        case 'win':
          keyElement.classList.add('keyboard__key');
          keyElement.textContent = key.value[options.lang].toLowerCase();
          keyElement.setAttribute('data', `${key.code}`);
          keyElement.addEventListener('click', () => {
            textArea.value += '';
          });

          break;

        case 'shift':
          keyElement.classList.add('keyboard__key_wide');
          keyElement.textContent = key.value[options.lang].toLowerCase();
          keyElement.setAttribute('data', `${key.code}`);
          keyElement.addEventListener('mousedown', function shiftOnHandler() {
            options.shift = true;
            toggleShiftHandler();
          });
          keyElement.addEventListener('mouseup', function shiftOffHandler() {
            options.shift = false;
            toggleShiftHandler();
          });

          break;

        default:

          keyElement.textContent = key.value[options.lang].toLowerCase();
          keyElement.setAttribute('data', `${key.code}`);
          keyElement.setAttribute('shiftEn', `${key.value.shiftEn}`);
          keyElement.setAttribute('shiftRu', `${key.value.shiftRu}`);
          keyElement.addEventListener('click', () => {
            if (options.caps === true) {
              keyElement.innerHTML.toUpperCase();
            } else { keyElement.innerHTML.toLowerCase(); }
            let caretPosition = textArea.selectionStart;
            const str = '';
            textArea.value.length += 1;
            textArea.value = str.concat(
              textArea.value.slice(0, caretPosition),
              keyElement.innerHTML,
              textArea.value.slice(caretPosition, textArea.value.length)
            );
            textArea.focus();
            caretPosition = textArea.setSelectionRange(caretPosition + 1, caretPosition + 1);
          });

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return keyboardKeys.append(fragment);
  };

  createKeys();

  document.addEventListener('keydown', keyDownHandle);

  document.onkeyup = () => {
    const buttons = document.querySelectorAll('.keyboard__key');
    buttons.forEach(btn => btn.classList.remove('active'));
  };

  function changeLangHandler(func, ...codes) {
    const pressed = new Set();

    document.addEventListener('keydown', function addChangeButton(event) {
      pressed.add(event.code);

      for (let i = 0; i < codes.length; i += 1) {
        if (!pressed.has(codes[i])) {
          return;
        }
      }

      pressed.clear();

      func();
    });

    document.addEventListener('keyup', function removeChangeButton(event) {
      pressed.delete(event.code);
    });
  }

  document.addEventListener('keydown', function shiftOnHandler(e) {
    if (e.keyCode === 16) {
      options.shift = true;
      toggleShiftHandler();
    }
  });
  document.addEventListener('keyup', function shiftOffHandler(e) {
    if (e.keyCode === 16) {
      options.shift = false;
      toggleShiftHandler();
    }
  });

  changeLangHandler(
    () => {
      if (options.lang === 'ru') {
        options.lang = 'en';
        localStorage.clear();
        localStorage.setItem('options', JSON.stringify(options));
        langHeader.innerHTML = `Язык ${(options.lang).toUpperCase()}`;
        keyboardKeys.innerHTML = null;
        createKeys();
        if (document.activeElement === textArea) {
          textArea.setAttribute('lang', `${options.lang}`);
        } else {
          document.addEventListener('keydown', keyDownHandle);
        }
      } else if (options.lang === 'en') {
        options.lang = 'ru';
        localStorage.clear();
        localStorage.setItem('options', JSON.stringify(options));
        langHeader.innerHTML = `Язык ${(options.lang).toUpperCase()}`;
        keyboardKeys.innerHTML = null;
        createKeys();
        if (document.activeElement === textArea) {
          textArea.setAttribute('lang', `${options.lang}`);
        } else {
          document.addEventListener('keydown', keyDownHandle);
        }
      }
    },
    'AltLeft',
    'ControlLeft'
  );
}

init();
