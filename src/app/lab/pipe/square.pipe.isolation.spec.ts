import { SquarePipe } from './square.pipe';

describe('SquarePipe', () => {
  let pipe: SquarePipe;

  beforeEach(() => {
    pipe = new SquarePipe();
  });

  it('should return the square of a number', () => {
    expect(pipe.transform(5)).toEqual(25);
  });

  it('should return Not a number if input is not a number', () => {
    expect(pipe.transform('mohammed')).toEqual('Not a number');
    expect(pipe.transform(null)).toEqual('Not a number');
    expect(pipe.transform(undefined)).toEqual('Not a number');
  });
});
