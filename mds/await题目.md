```js
let x = 0;

async function test() {
    x += await 2;
    console.log(x);
}

test();

x += 1;
console.log(x);
```
```js
let x = 0;

async function test() {
    x = (await 2) + x;  // x = x + await 2;
    console.log(x);
}

test();

x += 1;
console.log(x);
```
