import { mount as productsMount} from 'products/ProductsIndex';
import { mount as cartMount } from 'carts/CartsShow';

productsMount(document.querySelector('#my-products'))
cartMount(document.querySelector('#my-carts'))
