/**
 * Example of using Spies with Jasmine
 */

class SomeService {
  hello() {
    return 'hello world';
  }
}

describe('Spy Example', () => {
  it('spyOn', () => {
    const testService = new SomeService();
    spyOn(testService, 'hello').and.returnValue('foo bar');
    expect(testService.hello()).toEqual('foo bar');
  });

  it('createSpyObj', () => {
    const spiedTestService = jasmine.createSpyObj('spiedTestService', [
      'hello',
    ]);
    spiedTestService.hello();
    expect(spiedTestService.hello).toHaveBeenCalled();
  });
});
