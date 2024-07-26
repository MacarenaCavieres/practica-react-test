describe("Pruebas en <DemoComponent />", () => {
    test("Esta prueba no debe de fallar", () => {
        const msg1 = "Hello";
        const msg2 = msg1.trim();

        expect(msg1).toBe(msg2);
    });
});
