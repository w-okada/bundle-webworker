

```
### (1) clone repository 
$ git clone git@github.com:w-okada/bundle-webworker.git
$ cd bundle-webworker/


### (2) build js worker 
$ cd webworker-lib-js/
$ npm install
$ npm run build

### (3) build ts worker 
$ cd ..
$ cd webworker-lib-ts/
$ npm install
$ npm run build

### (4) build demo and run
$ cd ..
$ cd bundle-webworker-react/
$ npm install
$ npm start

```