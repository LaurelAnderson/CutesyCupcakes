class App {
  constructor() {
    this._showOrderView();
  }

  _showOrderView() {
      const viewContainer = document.querySelector('#order-view');
      const orderView = new OrderView(viewContainer);
    }

}