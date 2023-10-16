'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textarea = document.querySelector('textarea');
const convertBtn = document.querySelector('button');
convertBtn.innerText = 'Convert';

const covertCase = () => {
  const content = textarea.value;
  if (!content) return;
  const vars = content.split('\n');

  for (const [i, v] of vars.entries()) {
    const newVar = v.trim().toLowerCase();
    const [first, second] = newVar.split('_');
    const finalVar = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${finalVar.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
};

convertBtn.addEventListener('click', covertCase);
