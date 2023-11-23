import { screen } from "@testing-library/react";
import Cita from "../../features/quote/Cita";
import userEvent from "@testing-library/user-event";
import { render } from "../../test-utils";


describe('test for <Cita/>', ()=>{
    test('obtener cita sin nombre', ()=>{

        render(<Cita />)

        const botonCita = screen.getByRole('button', {name:/Obtener cita aleatoria/i})        
        
        userEvent.click(botonCita);

    })
})