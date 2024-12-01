import { arePropsSameBy, compareAscending, compareDescending } from '../util';

describe.only('shared util', () => {
  describe('arePropsSameBy', () => {
    test('should return true if props are same by given key', () => {
      const propKey = 'name';
      const prevProps = { name: 'Mahesh' };
      const nextProps = { name: 'Mahesh' };

      const result = arePropsSameBy(propKey)(prevProps, nextProps);
      expect(result).toEqual(true);
    });

    test('should return false if props are not same by given key', () => {
      const propKey = 'name';
      const prevProps = { name: 'Mahesh' };
      const nextProps = { name: 'Chavan' };

      const result = arePropsSameBy(propKey)(prevProps, nextProps);
      expect(result).toEqual(false);
    });
  });

  describe('compareAscending', () => {
    test('should return negative result if first value is less than second value', () => {
      const result = compareAscending(4, 5, false);
      expect(result).toEqual(-1);
    });

    test('should return positive result if first value is greater than second value', () => {
      const result = compareAscending(5, 4, false);
      expect(result).toEqual(1);
    });

    test('should return negative result if first date is less than second date', () => {
      const result = compareAscending('10-10-2017', '10-11-2017', true);
      expect(result).toBeLessThan(0);
    });

    test('should return positive result if first date is greater than second date', () => {
      const result = compareAscending('10-11-2017', '10-10-2017', true);
      expect(result).toBeGreaterThan(0);
    });
  });

  describe('compareDescending', () => {
    test('should return negative result if first value is less than second value', () => {
      const result = compareDescending(5, 4, false);
      expect(result).toEqual(-1);
    });

    test('should return positive result if first value is greater than second value', () => {
      const result = compareDescending(4, 5, false);
      expect(result).toEqual(1);
    });

    test('should return negative result if first date is less than second date', () => {
      const result = compareDescending('10-11-2017', '10-10-2017', true);
      expect(result).toBeLessThan(0);
    });

    test('should return positive result if first date is greater than second date', () => {
      const result = compareDescending('10-10-2017', '10-11-2017', true);
      expect(result).toBeGreaterThan(0);
    });
  });
});
