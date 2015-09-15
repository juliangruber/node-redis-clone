
# node-redis-clone

  Minimalistic redis clone in node, inspired by [this great blog post](http://honza.ca/2015/09/building-a-redis-clone-in-haskell) on writing one in haskell.

  You can connect to it via any redis client and issue `get` and `set` commands. It has only one dependency. 

## Usage

```bash
$ npm install
$ node bin.js
Listening on localhost 7777
```

```bash
$ redis-cli -p 7777
127.0.0.1:7777> set name foo
OK
127.0.0.1:7777> get name
"foo"
```

## License

  MIT

