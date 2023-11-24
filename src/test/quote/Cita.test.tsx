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

    user.click(botonCita);

    expect(
      await screen.findByText(
        /sit amet, dapibus id, blandit at, nisi. Cum sociis natoque/i
      )
    ).toBeInTheDocument();
  });

  test('se muestra mensaje cargando al buscar una cita sin nombre', async () =>{
    render(<Cita />);

    const user = userEvent.setup();
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");    
    const botonCita = screen.getByRole("button", {
      name: /Obtener cita aleatoria/i,
    });

    await user.type(input, "Faker");

    user.click(botonCita);

    const cargando = await screen.findByText(/CARGANDO.../i);

    expect(cargando).toBeInTheDocument();

  })

  test("se muestra mensaje cargando al buscar una cita con nombre", async () => {
    render(<Cita />);

    const botonCita = screen.getByRole("button", {
      name: /Obtener cita/i,
    });

    userEvent.click(botonCita);

    const cargando = await screen.findByText(/CARGANDO.../i);

    expect(cargando).toBeInTheDocument();
  });

  test('se limpia el input al presionar borrar', () => {
    render(<Cita />);

    const user = userEvent.setup();

    const input = screen.getByPlaceholderText(
      "Ingresa el nombre del autor"
    );

    const botonBorrar = screen.getByRole("button", {
      name: /Borrar/i,
    });

    user.type(input,'Cualquier texto')


    user.click(botonBorrar);

    expect(input).toHaveDisplayValue('');

  });
});