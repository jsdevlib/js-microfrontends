import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
}

// Isolated mode 
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart-isolated');

  if (el) {
    mount(el);
  }
}

export { mount };