function getCategoryCard(item, callback) {
  const { image_url, name } = item;

  const cardOuter = document.createElement("li");
  cardOuter.classList.add("category_card", "splide__slide");

  cardOuter.innerHTML = `<img
                        src="${image_url}" />
                        <p>${name}</p>
                        `;

  cardOuter.addEventListener("click", callback);
  return cardOuter;
}

export default getCategoryCard;


