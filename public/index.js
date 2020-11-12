
const list = document.querySelector("#searchOptions");
const link="https://similarwords.herokuapp.com/"

function renderList(arr) {
  list.innerHTML = "";
  arr.forEach((curr) => {
    const option = document.createElement("option");
    option.innerText = `${curr}`;
    option.value = curr;
    list.appendChild(option);
  });
}

document.querySelector('.searchBox').addEventListener('keyup', (event) => {
  const inputText = event.target.value.toLowerCase();
  const local = link+`data?name=${inputText}`;
  fetch(local)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((res) => {
      renderList(res);
    })
    .catch((error) => {
      if (error.message === '404') {
        output.textContent = `⚠️ Couldn't find "${name}"`;
      } else {
        output.textContent = '⚠️ Something went wrong';
      }
    });
})
// const namesIncludesInputText = filterMatchText(names, inputText);
// const searchOptions = document.getElementById('searchOptions');

// if (!arraysEqual(lastNamesIncludesInputText, namesIncludesInputText)) {
//   removeChildElements(searchOptions);
//   namesIncludesInputText.forEach((name) => {
//     const newOption = document.createElement('option');
//     newOption.value = name;
//     searchOptions.appendChild(newOption);
//   });

//   lastNamesIncludesInputText = [...namesIncludesInputText];
// }
// });

const output = document.querySelector('output');

function renderResult(arr) {
  output.innerHTML = "";
  for (c = 0; c < (arr.length); c++) {
    let cell = document.createElement("div");
    cell.innerText = arr[c];
    output.appendChild(cell).className = "grid-item";
  };
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const inputText = document.querySelector('.searchBox').value;
  const local = `${link}/curr?name=${inputText}`;
  fetch(local)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((res) => {
      renderResult(res);
    })
    .catch((error) => {
      if (error.message === '404') {
        output.textContent = `⚠️ Couldn't find "${name}"`;
      } else {
        output.textContent = '⚠️ Something went wrong';
      }
    });
})
