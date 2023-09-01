import { ShoppingCart } from '../../src/classes/shopping-cart';
import { Discount } from '../../src/classes/discount';
import { CartItem } from '../../src/classes/interfaces/cart-item';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem('Camiseta', 40);
  const cartItem2 = createCartItem('Caneta', 1);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    //act
    const { sut } = createSut();
    //assert
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    //act
    const { sut } = createSutWithProducts();
    //assert
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDiscount', () => {
    //act
    const { sut } = createSutWithProducts();
    //assert
    expect(sut.total()).toBe(41);
    expect(sut.totalWithDicount()).toBe(41);
  });

  it('should add products and clear cart', () => {
    //arrange
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    //act
    sut.clear();
    //assert
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products', () => {
    //arrange
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    //act
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    //assert
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });
});
