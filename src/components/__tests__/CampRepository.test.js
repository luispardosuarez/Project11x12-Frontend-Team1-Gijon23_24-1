test('getAllCamps returns camps', async () => {
    const camps = await CampRepository.getAllCamps();
    expect(camps).toBeDefined();
    expect(camps.length).toBeGreaterThan(0);
});