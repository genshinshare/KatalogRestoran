/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
/* eslint-disable prefer-destructuring */
import UrlParser from '../../routes/url-parser';
import RestoranDbSource from '../../data/restorandb-source';
import { createKontainerDetail, createKontainerReview } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="detail-restaurant">
        <h1 id="judulDetail"></h1>
        <div class="kontainer-detail"></div>
        <div class="kontainer-review">
          <h1>Review Pelanggan</h1>
        </div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoran = await RestoranDbSource.detailRestoran(url.id);
    const detailRestaurant = document.querySelector('title');
    detailRestaurant.innerHTML = `
          ${restoran.name} | PixueRest
      `;
    const kontainerDetail = document.querySelector('.kontainer-detail');
    kontainerDetail.innerHTML = createKontainerDetail(restoran);

    const rating = document.querySelector('#rating');
    if (restoran.rating === 5) {
      rating.innerHTML = '★★★★★';
    } else if (restoran.rating >= 4) {
      rating.innerHTML = '★★★★☆';
    } else if (restoran.rating >= 3) {
      rating.innerHTML = '★★★☆☆';
    } else if (restoran.rating >= 2) {
      rating.innerHTML = '★★☆☆☆';
    } else if (restoran.rating >= 1) {
      rating.innerHTML = '★☆☆☆☆';
    } else if (restoran.rating >= 0) {
      rating.innerHTML = '☆☆☆☆☆';
    } else {
      rating.innerHTML = 'Belum ada Rating';
    }

    const categories = restoran.categories;
    let kategorinya = '';
    const kategori = document.querySelector('#kategori');
    categories.forEach(categories => {
      kategorinya += `${categories.name}, `;
    });
    kategorinya = kategorinya.slice(0, -2);
    kategori.innerHTML = kategorinya;

    const judulDetail = document.querySelector('#judulDetail');
    judulDetail.innerHTML = `
      Detail ${restoran.name}
      `;

    const makananNormal = document.querySelector('#makanan');
    const minumanNormal = document.querySelector('#minuman');
    const makananMobile = document.querySelector('#makanan2');
    const minumanMobile = document.querySelector('#minuman2');
    const foods = restoran.menus.foods;
    const drinks = restoran.menus.foods;
    foods.forEach(food => {
      const foodItem = document.createElement('li');
      foodItem.innerText = food.name;
      makananNormal.appendChild(foodItem);
    });
    drinks.forEach(drink => {
      const drinkItem = document.createElement('li');
      drinkItem.innerText = drink.name;
      minumanNormal.appendChild(drinkItem);
    });
    foods.forEach(food => {
      const foodItem = document.createElement('li');
      foodItem.innerText = food.name;
      makananMobile.appendChild(foodItem);
    });
    drinks.forEach(drink => {
      const drinkItem = document.createElement('li');
      drinkItem.innerText = drink.name;
      minumanMobile.appendChild(drinkItem);
    });

    const review = document.querySelector('.kontainer-review');
    const customerReviews = restoran.customerReviews;
    customerReviews.forEach((customerReviews) => {
      review.innerHTML += createKontainerReview(customerReviews);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restoran.id,
        name: restoran.name,
        description: restoran.description,
        rating: restoran.rating,
        city: restoran.city,
        pictureId: restoran.pictureId,
      },
    });
  },
};

export default Detail;
