const Lodash = require('./sync');

let _ = new Lodash()

describe('Lodash compact', () => {

  let array;

  beforeEach(() => {
    array = [false, 42, 0, '', true, null, 'HelloWorld'];
  })


  test('should be defined', () => {

    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  
  });


  test('should remove falsy values from array', () => {
    //const array = [false, 42, 0, '', true, null, 'HelloWorld'];
    const result = [42, true, 'HelloWorld'];
    expect(_.compact(array)).toEqual(result);
  })

  test('should NOT contain false values', () => {
    //const array = [false, 42, 0, '', true, null, 'HelloWorld'];
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain('');
    expect(_.compact(array)).not.toContain(null);
  })

})

describe('Lodash group by', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  })

  test('should group array', () => {
    
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      3: [3.1],
      4: [4.2],
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  })

})

