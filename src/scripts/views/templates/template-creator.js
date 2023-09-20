import CONFIG from '../../globals/config';

const createRestoranList = (restaurant) => `
  <a href="/#/detail/${restaurant.id}">
    <div class="card">
      <div class="bagian-gambar">
        <img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous" alt="${restaurant.name}" type="image/png" class="lazyload">
      </div>
      <div class="restaurant-name">
        <h2>${restaurant.name}</h2>
      </div>
      <div class="restaurant-rate">
        <h3>★ ${restaurant.rating}</h3>
      </div>
      <div class="restaurant-city">
        <h3>${restaurant.city}</h3>
      </div>
      <div class="bagian-deskripsi">
        <p>${restaurant.description}</p>
      </div>
    </div>
  </a>
`;

const createKontainerDetail = (restoran) => `
  <div class="bagian-kiri-normal">
    <p>${restoran.description}</p>
    <hr>
    <h2>Makanan</h2>
    <div id="makanan"></div>
    <hr>
    <h2>Minuman</h2>
    <div id="minuman"></div>
  </div>
  <div class="bagian-kanan">
    <div class ="kotak-gambar">
        <img src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}" crossorigin="anonymous" alt="${restoran.name} type="image/png">
    </div>
    <hr style="border: 1px solid black;">
    <small>Nama Restoran</small>
    <p style="font-size: larger;">${restoran.name}</p>
    <hr style="border: 0.5px solid black;">
    <small>Rating</small>
    <p id="rating"></p>
    <hr style="border: 0.5px solid black;">
    <small>Kota</small>
    <p>${restoran.city}</p>
    <hr style="border: 0.5px solid black;">
    <small>Alamat</small>
    <p>${restoran.address}</p>
    <hr style="border: 0.5px solid black;">
    <small>Kategori Restoran</small>
    <p id="kategori"></p>
    <hr style="border: 0.5px solid black;">
  </div>
  <div class="bagian-kiri-mobile">
    <p>${restoran.description}</p>
    <hr>
    <h2>Makanan</h2>
    <div id="makanan2"></div>
    <hr>
    <h2>Minuman</h2>
    <div id="minuman2"></div>
  </div>
`;

const createKontainerReview = (customerReviews) => `
  <div class="review">
      <div class="reviewer-profile">
          <h2>${customerReviews.name}</h2>
          <p>${customerReviews.date}</p>
      </div>
      <div class="review-description">
          <p>${customerReviews.review}</p>
      </div>
  </div>
`;

const createNoRestaurantFound = `
  <h2 id="noFavorite" style="text-align: center; color: #fdeedc; padding: 25px; background-color: #333333; border-radius: 25px;">There are no favorite restaurants yet</h2>

`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoranList,
  createKontainerDetail,
  createKontainerReview,
  createNoRestaurantFound,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
