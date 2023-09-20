import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoranList, createNoRestaurantFound } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="list-restaurant">
      <h1>Favorite Restaurant</h1>
      <div class="wrapper-grid"></div>
    </div>
    `;
  },

  async afterRender() {
    const restoran = await FavoriteRestaurantIdb.getAllRestaurants();
    const restoranList = document.querySelector('.wrapper-grid');
    let counterRestaurant = 0;
    restoran.forEach((restaurant) => {
      counterRestaurant += 1;
      restoranList.innerHTML += createRestoranList(restaurant);
    });
    const noFound = document.querySelector('.list-restaurant');
    if (counterRestaurant === 0) {
      noFound.innerHTML += createNoRestaurantFound;
    }
    const judulFavorit = document.querySelector('title');
    judulFavorit.innerHTML = `
          Favorite | PixueRest
      `;
  },
};

export default Home;
