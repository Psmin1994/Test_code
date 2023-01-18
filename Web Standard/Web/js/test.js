const func = (callback) => {
  console.log("first");
  callback();
  console.log("third");
};

func(() => {
  console.log("second");
});
