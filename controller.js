export default class HomeController {
  constructor(ToDoService) {
    'ngInject';
    this.ToDoService = ToDoService;
  }
  $onInit() {
    this.ToDoService.get()
    .then(data => {
      this.rows = data;
      this.ToDoService.getRows(data)
    });
  }
  addCard() {
    this.ToDoService.addRow();
  }
}
