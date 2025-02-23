

## 这是next.js+模块联邦的解决方案example
这个例子是remote3=>remote2=>remote1, 报错找不到remote1，实际上remote2共享出去的代码是只有引入remote1。但是remote3会在自己的chunks去找remote1，哪怕通过script引入remote1也找不到，因为原代码引入remote1通过webpack改名了.
具体见博客
这个例子是不能成功的

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



