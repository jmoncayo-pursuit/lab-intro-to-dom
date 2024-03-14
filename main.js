//1 Add a class of "featured" to the first section element on the page.
let firstSection = document.getElementsByTagName("section")[0];
firstSection.classList.add('featured')

//2  Create the following article element with JavaScript
// Create the article element
let article = document.createElement('article');

// Create the img element
let img = document.createElement('img');
img.src = "./images/paul-gilmore-unsplash.jpg";
img.alt = "Image of a mountain in front of a lake.";
article.appendChild(img);

// Create the h3 element
let h3 = document.createElement('h3');
h3.textContent = "Stop Planning";
article.appendChild(h3);

// Create the p element
let p = document.createElement('p');
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.appendChild(p);

// Create the aside element
let aside = document.createElement('aside');
let pAside = document.createElement('p');
let span = document.createElement('span');

let strong = document.createElement('strong');
strong.textContent = "Read Time:";
span.appendChild(strong);

let textNode = document.createTextNode(" 4 Minutes");
span.appendChild(textNode);

let a = document.createElement('a');
a.href = "#";
a.textContent = "Read more...";
pAside.appendChild(span);
pAside.appendChild(a);
aside.appendChild(pAside);
article.appendChild(aside);

//2  add at the end of the section.posts element:
// this appends the article to the section.posts element
document.querySelector('section.posts').appendChild(article);



//3
