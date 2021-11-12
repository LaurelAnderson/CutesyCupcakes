class OrderView {
  constructor(containerElement) {
    this.containerElement = containerElement;

    this.form = document.querySelector('form');
    this.orderView = document.querySelector('#order-view');
    this.receiptView = document.querySelector('#receipt-view');

    // Bind methods
     this._onFormSubmit = this._onFormSubmit.bind(this);

    // Add event listeners
    this.form.addEventListener('submit', this._onFormSubmit);

    this.containerElement.classList.remove('hidden');
  }

  async _onFormSubmit(event) {
      event.preventDefault();

      this.orderView.classList.add('hidden');
      this.receiptView.classList.remove('hidden');
    }
}