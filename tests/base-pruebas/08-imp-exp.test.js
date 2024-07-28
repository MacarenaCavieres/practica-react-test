import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
    test("getHeroesById debe de retornar un heroes por ID", () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
    });

    test("getHeroesById debe de retornar undefined si no existe", () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test("getHeroesByOwner retorne un arreglo con los heroes de DC", () => {
        const owner = "DC";
        const list = getHeroesByOwner(owner);

        expect(list.length).toBe(3);

        expect(list).toEqual([
            { id: 1, name: "Batman", owner: "DC" },
            { id: 3, name: "Superman", owner: "DC" },
            { id: 4, name: "Flash", owner: "DC" },
        ]);

        expect(list).toEqual(heroes.filter((hero) => hero.owner === owner));
    });
    test("getHeroesByOwner retorne un arreglo con los heroes de Marvel", () => {
        const owner = "Marvel";
        const list = getHeroesByOwner(owner);

        expect(list.length).toBe(2);

        expect(list).toEqual(heroes.filter((hero) => hero.owner === owner));
    });
});
