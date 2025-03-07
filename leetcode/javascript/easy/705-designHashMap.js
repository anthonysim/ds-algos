var MyHashSet = function () {
  this.data = [];
};

MyHashSet.prototype.add = function (key) {
  if (!this.data.includes(key)) {
    this.data.push(key);
  }
};

MyHashSet.prototype.remove = function (key) {
  const index = this.data.indexOf(key);
  if (index !== -1) {
    this.data.splice(index, 1);
  }
};

MyHashSet.prototype.contains = function (key) {
  return this.data.includes(key);
};
