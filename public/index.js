/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
let names = [];

const removeChildElements = (element) => {
  const elem = element;
  elem.innerHTML = '';
};

const filterMatchText = (array, text) =>
  array.filter((elem) => elem.includes(text));

const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

window.addEventListener('load', async () => {
  const response = await fetch('/data');
  const data = await response.json();
  names = data.names;
});

let lastNamesIncludesInputText = [];
document
  .querySelector('.searchBox')
  .addEventListener('keyup', async (event) => {
    const inputText = event.target.value;
    const namesIncludesInputText = filterMatchText(names, inputText);
    const searchOptions = document.getElementById('searchOptions');

    if (!arraysEqual(lastNamesIncludesInputText, namesIncludesInputText)) {
      removeChildElements(searchOptions);
      namesIncludesInputText.forEach((name) => {
        const newOption = document.createElement('option');
        newOption.value = name;
        searchOptions.appendChild(newOption);
      });

      lastNamesIncludesInputText = [...namesIncludesInputText];
    }
  });
