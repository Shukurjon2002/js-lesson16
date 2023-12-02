let productsRow = document.querySelector(".stock__cards__row");

function getProductCard({ id, description, discount, card, cash, image }) {
  return `<div class="stock__card">
              <div class="stock__card__body">
                <div class="like">
                  <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2046 2.25644C13.3299 1.13067 14.8564 0.498169 16.4482 0.498169C18.0399 0.498169 19.5664 1.13063 20.6916 2.25636C21.8174 3.38164 22.45 4.90829 22.45 6.49999C22.45 8.09174 21.8175 9.61826 20.6917 10.7435C20.6917 10.7436 20.6917 10.7435 20.6917 10.7435L11.8517 19.5835C11.6565 19.7788 11.3399 19.7788 11.1446 19.5835L2.30461 10.7435C-0.0390375 8.3999 -0.0390373 4.60009 2.30461 2.25644C4.64826 -0.0872086 8.44807 -0.0872087 10.7917 2.25644L11.4982 2.96289L12.2046 2.25644C12.2046 2.25641 12.2046 2.25647 12.2046 2.25644ZM16.4482 1.49817C15.1217 1.49817 13.8496 2.02528 12.9118 2.96346L11.8517 4.02355C11.758 4.11732 11.6308 4.16999 11.4982 4.16999C11.3656 4.16999 11.2384 4.11732 11.1446 4.02355L10.0846 2.96355C8.13149 1.01042 4.96484 1.01042 3.01172 2.96355C1.05859 4.91667 1.05859 8.08332 3.01172 10.0364L11.4982 18.5229L19.9846 10.0364C20.9228 9.09869 21.45 7.82648 21.45 6.49999C21.45 5.17351 20.9229 3.90138 19.9847 2.96363C19.0469 2.02544 17.7747 1.49817 16.4482 1.49817Z"
                      fill="#414141"
                    />
                  </svg>
                </div>

                <div class="discount"><span>${discount}</span></div>
              </div>
              <div class="stock__card__footer">
                <div class="price">
                  <div class="by__card">
                    <h1>${card} ₽</h1>
                    <span>С картой</span>
                  </div>
                  <div class="by__cash">
                    <h1>${cash} ₽</h1>
                    <span>Обычная</span>
                  </div>
                </div>
                <div class="about__goods">
                  <span>${description}</span>
                </div>
                <div class="rating">
                  <input type="radio" id="star1-${id}" name="rating-${id}" value="1" />
                  <label for="star1-${id}" title="1"></label>
                  <input type="radio" id="star2-${id}" name="rating-${id}" value="2" />
                  <label for="star2-${id}" title="2"></label>
                  <input type="radio" id="star3-${id}" name="rating-${id}" value="3" />
                  <label for="star3-${id}" title="3"></label>
                  <input type="radio" id="star4-${id}" name="rating-${id}" value="4" />
                  <label for="star4-${id}" title="4"></label>
                  <input type="radio" id="star5-${id}" name="rating-${id}" value="5" />
                  <label for="star5-${id}" title="5"></label>
                </div>
                <button class="add__cart">В корзину</button>
              </div>
            </div>`;
}
