const test = new Promise((resolve, reject) => {
  const success = Math.random() > 0.3;
  setTimeout(() => {
    if (success) {
      resolve('good');
    }
    reject('bad');
  }, 500);
});

const f1 = some1 => {
  console.log(some1);
};

const f2 = some2 => {
  console.log(some2);
};

// test
//   .then(resolve => {
//     console.log(resolve);
//   })
//   .catch(reject => {
//     console.log(reject);
//   });

test.then(f1).catch(f2);

console.log('promise');
