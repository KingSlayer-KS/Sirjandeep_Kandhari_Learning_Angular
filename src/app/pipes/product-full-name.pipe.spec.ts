import { ProductFullNamePipe } from './product-full-name.pipe';

describe('ProductFullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ProductFullNamePipe();
    expect(pipe).toBeTruthy();
  });
});
