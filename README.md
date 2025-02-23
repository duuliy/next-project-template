

## 这是next.js+模块联邦的解决方案example
这个例子是fe3=>fe2=>fe1, fe3=>fe2,fe2=>fe1,fe3=>fe1都是ok的，fe3=>fe2=>fe1的时候会报错找不到fe1，实际上fe2共享出去的代码是只有引入fe1的代码，并没有fe1内容的代码。但是fe3会在自己的chunks去找fe1，哪怕通过script引入fe1也找不到，因为原代码引入fe1通过webpack改名了，此时加载的资源也是比前面三种情况多很多
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



