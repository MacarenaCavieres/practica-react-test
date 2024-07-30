import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
    test("Debe de hacer match con el snapshot", () => {
        const title = "Titulo titulo";
        const subtitle = "subt";
        const { container } = render(<FirstApp title={title} subtitle={subtitle} />);

        expect(container).toMatchSnapshot();
    });

    test("debe mostrar el titulo en un h1", () => {
        const title = "Nuevo titulo principal";
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

        // expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector("h1");
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId("test-title").innerHTML).toBe(title);
    });

    test("debe mostrar el subtitulo enviado por props", () => {
        const title = "Tremendo titulo";
        const subtitle = "Nuevo subtitulo";
        const { getByText } = render(<FirstApp title={title} subtitle={subtitle} />);

        expect(getByText(subtitle)).toBeTruthy();
    });
});
