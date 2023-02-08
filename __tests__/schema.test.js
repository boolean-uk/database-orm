const { getModelNames } = require('./helpers');

describe('The Prisma Schema', () => {
  it('has all of the required models (case sensitive!)', () => {
    // GIVEN
    const models = getModelNames();

    // THEN
    expect(models).toContain('Customer');
    expect(models).toContain('Contact');
    expect(models).toContain('Movie');
    expect(models).toContain('Screening');
    expect(models).toContain('Screen');
    expect(models).toContain('Customer');
  });
});
