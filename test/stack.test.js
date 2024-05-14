class Stack {
  top;
  items;
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(item) {
    this.top++;
    this.items[this.top] = item;
  }

  pop() {
    return this.items[this.top--];
  }
}

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  })

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
  it('can push to the top', () => {
    stack.push(':)');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe(':)');
  });
  it('can pop off', () => {
    stack.push(':D');
    stack.push('C:');
    stack.push(':v');
    
    expect(stack.top).toBe(2);

    const result = stack.pop();

    expect(result).toBe(':v')
    expect(stack.top).toBe(1);
  });
})
