const router = require('../../router/index.js');

Page({
  push() {
    router.push({
      name: 'a',
      data: {
        name: 'Jack',
        age: 18,
        boolean: true,
      },
    });
  },
});
