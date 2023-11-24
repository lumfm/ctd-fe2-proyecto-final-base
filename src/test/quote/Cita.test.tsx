import Cita from "../../features/quote/Cita";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../test-utils";

describe("test for <Cita/>", () => {
  test("obtener cita sin nombre", async () => {

    render(<Cita />);

    const botonCita = screen.getByRole('button', {
      name: /Obtener cita aleatoria/i,
    });

    userEvent.click(botonCita);

    expect(
      await screen.findByText(/This should be a random test quote, I guess/i)
    ).toBeInTheDocument();
  });


  test("obtener cita con nombre", async () => {
    render(<Cita />);

    const user = userEvent.setup();
    const input = screen.getByPlaceholderText('Ingresa el nombre del autor')

    await user.type(input, 'Faker');

    const botonCita = screen.getByRole('button', {
      name: /Obtener cita/i,
    });

    userEvent.click(botonCita);

    expect(
      await screen.findByText(
        /sit amet, dapibus id, blandit at, nisi. Cum sociis natoque/i
      )
    ).toBeInTheDocument();
  });

  test('se muestra mensaje cargando al buscar una cita', () =>{
    render(<Cita />);
  })
});
