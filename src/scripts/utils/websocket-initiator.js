// import NotificationHelper from './notification-helper';
// import CONFIG from '../globals/config';

// const WebSocketInitiator = {
//   init(url) {
//     const webSocket = new WebSocket(url);
//     webSocket.onmessage = this._onMessageHandler;
//   },

//   _onMessageHandler(message) {
//     const restoran = JSON.parse(message.data);

//     NotificationHelper.sendNotification({
//       title: `NEW DELICIOUS RESTAURANT FOUND!! ${restoran.title} !`,
//       options: {
//         body: restoran.overview,
//         image: `${CONFIG.BASE_IMAGE_URL + restoran.pictureId}`,
//       },
//     });
//   },
// };

// export default WebSocketInitiator;
