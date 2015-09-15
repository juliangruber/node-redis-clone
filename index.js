var byline = require('byline');

module.exports = Redis;

function Redis(){
  this.db = Object.create({
    __version__: '0.1.0'
  });
  this.handle = this.handle.bind(this);
}

Redis.prototype.cmd = {};

Redis.prototype.cmd.get = function(key){
  var val = this.db[key] || 'null';
  return Buffer('$' + val.length + '\r\n' + val + '\r\n');
};

Redis.prototype.cmd.set = function(key, value){
  this.db[key] = value;
  return Buffer('+OK\r\n');
};

Redis.prototype.run = function(cmd){
  if (!this.cmd[cmd[0]]) return Buffer('-ERR unknown command\r\n');
  return this.cmd[cmd[0]].apply(this, cmd.slice(1));
};

Redis.prototype.handle = function(con){
  var self = this;
  var cmd = [];
  var len;
  byline(con).on('data', function(line){
    var first = line.toString('utf8', 0, 1);
    if (first == '*') len = toNum(line.slice(1));
    else if (first != '$') cmd.push(line.toString());
    if (cmd.length === len) {
      con.write(self.run(cmd));
      cmd = [];
      len = null;
    }
  });
};

function toNum(b){
  return Number(b.toString());
}
