'use strict';
let counter = 0;
function autoInc(){
  return counter++;
}
class Users {
  constructor() {
    this.data = [];
  }
  get() {
    return this.data;
  }
  add() {
    let temp = {};
    temp.id = autoInc();
    this.data.push([temp]);
    return [temp];
  }
  delete(index) {
    return this.data.splice(index, 1);
  }
}

module.exports = new Users();
