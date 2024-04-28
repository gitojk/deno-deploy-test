'use strict';

async function getResource() {
  const res = await fetch('http://localhost:8000');
  const obj = await res.json();
  console.log(obj);
  document.querySelector('h1').textContent = obj.env;
}

document.querySelector('button').addEventListener('click', getResource);
