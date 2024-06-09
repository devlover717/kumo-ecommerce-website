//HEADER

var header = document.querySelector('header'); 
var headerCon = document.querySelector('.header-content');


window.addEventListener('scroll', () => {
    header.classList.toggle('bg-white', this.window.scrollY > 0);
    headerCon.classList.toggle('width80', this.window.scrollY > 0);
})









// RESPONSIVE NAV MENU

const nav = document.querySelector('nav'); 
const bars = document.querySelector('#bars'); 

bars.addEventListener('click', () => {
    nav.classList.toggle('open');
    bars.classList.toggle('fa-x');
})








// CLIENT REVIEWS 
const reviews = [
    {
      id: 1, 
      name: 'tina zukerberg', 
      job: 'ceo of addle', 
      img: 'Images/person-1.jpg', 
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt voluptas ab, dolorum iure cum Ad assumenda quae perferendis amet, doloremque soluta sint ducimus expedita beatae repellendus neque  perspiciatis asperiores?'
    }, 
    {
      id: 2,
      name: 'susan smith',
      job: 'web developer',
      img: 'Images/person-2.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 3,
      name: 'bill anderson',
      job: 'web designer',
      img: 'Images/person-3.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 4,
      name: 'peter jones',
      job: 'intern',
      img: 'Images/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 5,
      name: 'anna johnson',
      job: 'the boss',
      img: 'Images/person-5.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    }
];


const profileImg = document.querySelector('#rv-profile-img');
const info = document.querySelector('#rv-info'); 
const author = document.querySelector('#rv-author'); 
const job = document.querySelector('#rv-job'); 


const nextBtn = document.querySelector('.next-btn'); 
const prevBtn = document.querySelector('.prev-btn'); 

let index = 0;


window.addEventListener('DOMContentLoaded', () => {
    person();
})


function person() {
    let item = reviews[index]
    profileImg.src = item.img;
    info.textContent = item.text;
    author.textContent = item.name;
    job.textContent = item.job;
}


nextBtn.addEventListener('click', () => {
    index++; 
    if (index > reviews.length - 1) {
        index = 0;
    }
    person(index)
})



prevBtn.addEventListener('click', () => {
    index--; 
    if (index < 0) {
        index = reviews.length - 1; 
    }
    person(index)
})






// Questions 
const btns = document.querySelectorAll('.qstn-btn'); 


btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const ans = btn.parentElement.nextElementSibling;
        ans.classList.toggle('show-ans')
        const i = btn.childNodes[1]; 
        if (i.classList.contains('fa-plus')) {
            i.classList.add('fa-minus'); 
            i.classList.remove('fa-plus');
        } else if (i.classList.contains('fa-minus')) {
            i.classList.add('fa-plus'); 
            i.classList.remove('fa-minus');
            
        }
    })
})





// subscribe 

const subBtn = document.querySelector("#subscribe"); 
subBtn.addEventListener('click', () => {
  alert('Thank You for Subscribing to our mail!');
})