const enhancer = require('./enhancer.js');
// test away!
describe('Item Tests', () => {
  //Arrange
  const item = {};
  beforeEach(() => {
    item.name = "sword"; 
    item.durability = 0;
    item.enhancement = 0;
  });
  test('sanity check', () => {
    expect(2+2).toBe(4);
  });
  test('item repair sets durability to max', () => {
    enhancer.repair(item);
    expect(item.durability).toBe(100);
  });
  describe('enhancement success', () => {
    beforeEach(() => enhancer.success(item));
    it('increments item enhancement by one', () => {
      expect(item.enhancement).toBe(1);
    }); 
    it('does not impact item durability', () => {
      expect(item.durability).toBe(0);
    });
    it('enhancement does not surpass 20 units', () => {
      item.enhancement = 20;
      enhancer.success(item); 
      expect(item.enhancement).toBe(20);
    });
  });
});