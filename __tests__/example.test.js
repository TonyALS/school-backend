function soma(a, b) {
  return a + b;
}

test('if i call soma function', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
