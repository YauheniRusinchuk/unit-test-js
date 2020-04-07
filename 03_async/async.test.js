const Ajax = require('./async')

describe('Ajax echo function', () => {
  test('should return value async', async () => {
    try{
      const result = await Ajax.echo('some data');
      expect(result).toBe('some data');
    }catch(e) {
      expect(e.message).toBe('Error');
    }
  });
})