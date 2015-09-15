
# node-redis-clone

  Minimalistic redis clone in node, inspired by [this great blog post](http://honza.ca/2015/09/building-a-redis-clone-in-haskell) on writing one in haskell.

  It's using only one dependency.

## Usage

```bash
$ npm install
$ node bin.js
```

```bash
$ redis-cli
127.0.0.1:7777> set name foo
OK
127.0.0.1:7777> get name
"foo"
```

## License

  MIT

