const removeChildElements = (element) => {
  const elem = element;
  elem.innerHTML = '';
};

document
  .querySelector('.searchBox')
  .addEventListener('keyup', async (event) => {
    const inputText = event.target.value;
    const response = await fetch('/data');
    const data = await response.json();

    const searchOptions = document.querySelector('#searchOptions');
    removeChildElements(searchOptions);

    Object.keys(data).forEach((key) => {
      if (data[key].includes(inputText)) {
        const newOption = document.createElement('option');
        newOption.value = data[key];
        searchOptions.appendChild(newOption);
      }
    });
  });
