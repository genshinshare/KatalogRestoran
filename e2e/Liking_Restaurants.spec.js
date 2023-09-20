const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorit');
});

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#noFavorite');
  I.see('There are no favorite restaurants yet', '#noFavorite');
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.see('There are no favorite restaurants yet', '#noFavorite');
  I.amOnPage('/');
  I.waitForElement('.card');
  // eslint-disable-next-line no-undef
  I.click(locate('.card').first());
  I.seeInCurrentUrl('/#/detail/rqdv5juczeskfw1e867');
  I.wait(0.5);
  I.see('Detail Melting Pot', '#judulDetail');
  I.click('#likeButton');
  I.amOnPage('/#/favorit');
  I.wait(0.5);
  I.seeElement('.card');
  const favoriteRestaurant = await I.grabTextFrom('.restaurant-name h2');
  assert.strictEqual('Melting Pot', favoriteRestaurant);
});

// eslint-disable-next-line no-undef
Scenario('unliking restaurant', async ({ I }) => {
  I.see('There are no favorite restaurants yet', '#noFavorite');
  I.amOnPage('/');
  I.waitForElement('.card');
  // eslint-disable-next-line no-undef
  I.click(locate('.card').first());
  I.seeInCurrentUrl('/#/detail/rqdv5juczeskfw1e867');
  I.wait(0.5);
  I.see('Detail Melting Pot', '#judulDetail');
  I.click('#likeButton');
  I.amOnPage('/#/favorit');
  I.wait(0.5);
  I.seeElement('.card');
  const favoriteRestaurant = await I.grabTextFrom('.restaurant-name h2');
  assert.strictEqual('Melting Pot', favoriteRestaurant);
  // eslint-disable-next-line no-undef
  I.click(locate('.card').first());
  I.seeInCurrentUrl('/#/detail/rqdv5juczeskfw1e867');
  I.wait(0.5);
  I.see('Detail Melting Pot', '#judulDetail');
  I.click('#likeButton');
  I.amOnPage('/#/favorit');
  I.seeElement('#noFavorite');
  I.see('There are no favorite restaurants yet', '#noFavorite');
});
