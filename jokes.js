const jokeBtn = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
  loader.classList.remove('hidden');
  jokeBtn.classList.add('hidden');
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    }
  });
  const data = await res.json();
  loader.classList.add('hidden');
  jokeBtn.classList.remove('hidden');
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random * arr.length)];
  if (item === not) {
    console.log('we use that one last time!!');
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeBtn.textContent = randomItemFromArray(buttonText, jokeBtn.textContent);
}

jokeBtn.addEventListener('click', handleClick);

fetchJoke();