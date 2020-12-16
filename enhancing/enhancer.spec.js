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
  describe('enhancement failure', () => {
    beforeEach(() => enhancer.repair(item));
    it('if enhancement < 15 durability of item is decreased by 5', () => {
      item.enhancement = 14;
      enhancer.fail(item); 
      expect(item.durability).toBe(95);
    });
    it('enhancement >= 15 durability is decreased by 10', () => {
      item.enhancement = 15;
      enhancer.fail(item);
      expect(item.durability).toBe(90);
    });
    it('if enhancement > 16 , enhancement decreases by one', () => {
      item.enhancement = 17;
      enhancer.fail(item); 
      expect(item.enhancement).toBe(16);
    });
  });
  describe('get enhancer function', () => {
    it('get correclty alters item name', () => {
      item.enhancement = 5;
      enhancer.get(item);
      expect(item.name).toBe('sword[+5]');
    });
  });
});