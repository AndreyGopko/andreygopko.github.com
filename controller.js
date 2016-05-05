export default class HomeController {
  constructor(ToDoService) {
    'ngInject';
    this.ToDoService = ToDoService;
  }
  $onInit() {
    this.ToDoService.getRows()
    .then(data => {
      this.rows = data;
    });
  }
  addCard() {
    this.ToDoService.addRow();
  }
}
