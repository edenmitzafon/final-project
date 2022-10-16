link = encodeURI(window.location.href);
const msg = encodeURIComponent('Hey, I found this awsome recipe ');
const title = encodeURIComponent(document.querySelector('title').textContent);

console.log([link, msg, title]);

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?url=${link}&text=${msg}&hashtags=goodfood,recipe,reciperecommendation`;

const whatsapp = document.querySelector('.whatsapp');
whatsapp.href = `https://wa.me/?text=${msg}${link}`;

const telegram = document.querySelector('.telegram');
telegram.href = `https://t.me/share/url=${link}&text=${msg}`;

