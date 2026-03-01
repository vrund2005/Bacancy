function test() {
  console.log(this);
}

const obj = {
  test: test
};

obj.test();