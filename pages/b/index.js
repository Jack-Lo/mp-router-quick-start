const router = require('../../router/index.js');

Page({
  onLoad(options) {
    console.log(options);
  },
  relaunch() {
    router.relaunch({
      name: 'home',
    });
  },
});
