const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector(".gallery");

listEl.style.display = "flex";
listEl.style.justifyContent = "center";
listEl.style.gap = "40px";

console.log(listEl);

const imagesCard = ({url, alt}) => {

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", url);
  imgEl.setAttribute("alt", alt);

  imgEl.style.width = "350px";
  imgEl.style.height = "200px";

  return imgEl;
}

const getCardImages = images.map(imagesCard)

console.log(getCardImages);

listEl.append(...getCardImages);
