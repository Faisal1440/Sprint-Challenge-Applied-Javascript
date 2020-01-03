// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


const myHeader = document.querySelector('.header-container');
myHeader.appendChild(Header());

function Header() {

    const header = document.createElement('div')
    const span1 = document.createElement('span')
    const title = document.createElement('h1')
    const span2 = document.createElement('span')

    header.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    span1.textContent = 'JAN 03, 2020';
    title.textContent = 'Lambda Times';
    span2.textContent = '98°';

    header.appendChild(span1);
    header.appendChild(title);
    header.appendChild(span2);

    return header

}


