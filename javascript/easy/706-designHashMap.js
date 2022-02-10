var MyHashMap = function () {
  this.storage = [];
  this.size = 1000000;
};

MyHashMap.prototype.put = function (key, value) {
  if (this.storage.length > this.size) return;

  for (let item of this.storage) {
    if (key === item[0]) {
      item[1] = value;
      return;
    }
  }
  this.storage.push([key, value]);
};

MyHashMap.prototype.get = function (key) {
  for (let item of this.storage) {
    if (key === item[0]) {
      return item[1];
    }
  }
  return -1;
};

MyHashMap.prototype.remove = function (key) {
  for (let i = 0; i < this.storage.length; i++) {
    let item = this.storage[i];

    if (item[0] === key) {
      this.storage.splice(i, 1);
    }
  }
};