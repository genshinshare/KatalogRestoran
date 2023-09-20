import RestoranDbSource from '../../data/restorandb-source';
import { createRestoranList } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="jumbotron">
      <picture>
        <source media="(max-width: 600px)" srcset="images/heros/hero-image_2-small.jpg">
        <img src="images/heros/hero-image_2.jpg" alt="jumbotron">
      </picture>
    </div>
    <img src="images/icon/wave.svg">
    <div class="list-restaurant">
      <h1>Recommendation Restaurant</h1>
      <div class="wrapper-grid"></div>
    </div>
    `;
  },

  async afterRender() {
    const restoran = await RestoranDbSource.home();
    const restoranList = document.querySelector('.wrapper-grid');
    restoran.forEach((restaurant) => {
      restoranList.innerHTML += createRestoranList(restaurant);
    });
  },
};

export default Home;
