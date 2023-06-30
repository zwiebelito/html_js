let house = localStorage.getItem('house');
let houseArray = JSON.parse(house);


/*------------------------------------------------HEADER ----------------------------------------------------------*/

const button_header = document.querySelector('.button_header');
button_header.onclick= () => {
    location.href = 'mailto:overbeck1work@gmail.com';
}

/*------------------------------------------------SECTION 1----------------------------------------------------------*/


const section1 = document.getElementById('section1');
const container = document.getElementsByClassName('container')[0];


for (const item of houseArray) {
    const picture = document.createElement('img');
    picture.src = `${item.img}`;
    picture.classList.add('picture');

    const descrBlock = document.createElement('div');
    descrBlock.classList.add('descrBlock');

    const typeOfProperty = document.createElement('h2');
    typeOfProperty.innerText = `${item.type}`;
    typeOfProperty.classList.add('typeOfProperty');

    const descr = document.createElement('p');
    descr.classList.add('descr');
    if (item.type === 'Apartment'){
        descr.innerText = 'An apartment is a residential unit that is part of one (or several) residential buildings, or a separate dwelling within a house with its own entrance, bathroom and kitchen.'
    } else if (item.type === 'Luxury'){
        descr.innerText = 'The definition of luxury homes can vary depending on who you ask. The most common definition is that a luxurious home is one that has an extravagant amount of space, high-end amenities, and a high price tag.'
    } else {
        descr.innerText = 'Private home means a private residence in which the licensee permanently resides, which residency is not contingent upon caring for children or employment by a child placing agency.'
    }

    descrBlock.append(typeOfProperty, descr);

    container.append(picture, descrBlock)

    section1.appendChild(container);
}

/*------------------------------------------------SECTION 1 FORM----------------------------------------------------------*/

const form1 = document.form1;
const wrapper = document.getElementsByClassName('wrapper')[0];
const showBlock = document.getElementById('showBlock');

form1.onsubmit = (e) => {
    e.preventDefault()
    wrapper.style.display = 'none';
    showBlock.innerHTML = `
    <h2>Thank you for choosing us</h2>
    <h3>We will call you as soon as possible</h3>`;

    const closeButton = document.createElement('button');
    closeButton.innerText = 'Return to main page';
    closeButton.classList.add('closeButton');
    closeButton.onclick = () => {
        location.href = 'index.html';
    }

    showBlock.appendChild(closeButton);
}