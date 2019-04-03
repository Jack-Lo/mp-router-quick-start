const router = require('../../router/index.js');

Page({
  onLoad(options) {
    const data = router.extract(options);
    console.log(data);
  },
  replace() {
    router.replace({
      name: 'b',
      query: {
        name: 'Jack',
        age: 18,
        boolean: true,
      },
    });
  },
});
