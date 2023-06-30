// додаємо можливість відправити лист в кнопці work with us

const button_header = document.querySelector('.button_header');
button_header.onclick= () => {
    location.href = 'mailto:overbeck1work@gmail.com';
}

const button_footer = document.querySelector('.button_footer');
button_footer.onclick= () => {
    location.href = 'mailto:overbeck1work@gmail.com';
}


// створив об'єкти для заповнення div з будинками

class Accommodation {
    constructor(img, type) {
        this.img = img;
        this.type = type;
    }
}

const accommodations = [
    new Accommodation('https://russian-academy.com/wp-content/uploads/2018/03/In-house-rezidence-living-room_light-e1538036144663.jpg', 'Apartment'),
    new Accommodation('https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg', 'Private house'),
    new Accommodation('https://photos.zillowstatic.com/fp/24d1a8d02345918121110be04fb19d38-cc_ft_960.jpg', 'Private house'),
    new Accommodation('https://hips.hearstapps.com/hmg-prod/images/924belairroadmostexpensivehouseveranda-1558701809.jpg', 'Luxury'),
    new Accommodation('https://profikarkas.com.ua/images/slides/project-03.jpg', "Private house"),
    new Accommodation('https://ukraine-apartments.com.ua/data/apartments/original/2213-a18e1bf779a6fa73d7b0c2123bb51e27.jpg', 'Apartment'),
    new Accommodation('https://i.insider.com/5dcad7c47eece523ec0dc16c?width=1136&format=jpeg', 'Luxury'),
    new Accommodation('https://cdn-anlmm.nitrocdn.com/SrLbbwlTbhnvhzxzDsdjYeZYdiuHrMyx/assets/images/optimized/rev-5c5f222/wp-content/uploads/2020/11/3-the-10-most-expensive-homes-in-the-world.jpeg', 'Luxury'),
    new Accommodation('https://a0.muscache.com/im/pictures/f9086e29-d110-424b-8969-d42ed776b4d5.jpg', 'Apartment'),
    new Accommodation('https://nairametrics.com/wp-content/uploads/2022/07/The-Most-Expensive-House-Sold.jpg', 'Luxury'),
    new Accommodation('https://lerablog.org/wp-content/uploads/2018/04/rfefewfew.jpg', "Private house")
]

const choice = document.getElementById('choice');

for (const item of accommodations) {
    const block = document.createElement('div');
    block.classList.add('house_descr');

    const image = document.createElement('img');
    image.classList.add('type_image');
    image.src = `${item.img}`;

    const type = document.createElement('h2');
    type.classList.add('type_house');
    type.innerText = `${item.type}`;

    const buy = document.createElement('button');
    buy.classList.add('buy_button');
    buy.innerText = `Buy`;
    buy.onclick = () => {
        localStorage.clear();
        location.href = 'house-detail.html?type=' + JSON.stringify(item.type);
        let house  = JSON.parse(localStorage.getItem('house')) || [];
        house.push(item);
        localStorage.setItem('house', JSON.stringify(house));
    }

    block.append(image, type, buy);
    choice.appendChild(block);
}

// створив об'єкти для заповнення div з коментарями

class Comment {
    constructor(phrase, name, img) {
        this.phrase = phrase;
        this.name = name;
        this.img = img;
    }
}

const comments = [
    new Comment('Eric was absolutely the best real estate agent I’ve ever dealt with!', 'Jesse Davies', 'https://images.squarespace-cdn.com/content/v1/5723ca6bb6aa606f7895622e/1573596574054-OBE1YGZZEUD8P1RIAK5R/val-westover-photography-7863-Retouched.jpg'),
    new Comment('Lily did a fantastic job in selling the property, definitely recommend her!', 'Faye McAteer', 'https://cdn.shopify.com/s/files/1/1964/8565/files/professional-headshots.jpg?v=1629034783'),
    new Comment('Simon and team are outstanding, helpful and experienced.', 'Femi Ajayi', 'https://media.licdn.com/dms/image/D4E03AQHN-bdaT5Exaw/profile-displayphoto-shrink_800_800/0/1668378133788?e=2147483647&v=beta&t=Bycv5l3VlKih9mZf1zM6AWauqXS7WdxmqGf358giUVQ')
];

const commentBlock = document.getElementById('comments');

for (const comment of comments) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('commentDiv')

    const str = document.createElement('div');
    str.classList.add('str');

    const p = document.createElement('p');
    p.innerText = `${comment.phrase}`;
    p.classList.add('phrase');

    const personDiv = document.createElement('div');
    personDiv.classList.add('personDiv');

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = `${comment.img}`;

    const clientDiv = document.createElement('div');
    clientDiv.classList.add('clientDiv')

    const name = document.createElement('h2');
    name.innerText = `${comment.name}`;
    name.classList.add('name');

    const client = document.createElement('p');
    client.innerText = 'Client';
    client.classList.add('client');

    commentDiv.append(str, p, personDiv);
    personDiv.append(avatar, clientDiv);
    clientDiv.append(name, client);
    commentBlock.append(commentDiv);
}


