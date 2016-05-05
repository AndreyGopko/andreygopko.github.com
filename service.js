export default class ToDoService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.rows = []
  }
  get(){
    return this.$http.get('http://localhost:3000/users')
    .then((response) => response.data);
  }

  getRows(data) {
    this.rows = data;
  }
  addRow() {
    this.$http.post('http://localhost:3000/users')
    .then((data) => {
      this.rows.push(data.data);
    })
  }
  removeRow(row) {
    let index = this.rows.indexOf(row);
    this.$http.delete('http://localhost:3000/users/'+index)
    .then((data) => {
      console.log(data.data);
    })
    this.rows.splice(this.rows.indexOf(row), 1);
  }
}
