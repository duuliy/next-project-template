

## 这是next.js+模块联邦的解决方案example
这个例子是host3=>remote2=>remote1, 报错找不到remote1，实际上remote2共享出去的代码是有remote1。但是remote3会在自己的chunks去找remote1，而不是在remote2去找remote1.
待办：空了继续研究

cd fe1
yarn
yarn dev

cd fe2
yarn
yarn dev

cd fe3
yarn
yarn dev

## 注意



