import {rest} from 'msw'
import { API_URL } from '../app/constants'
import { noCharacter, withCharacter } from './dataMock';

export const handlers = [

    rest.get(API_URL, (req,res,ctx)=>{
        const data = req.url.searchParams.get('character');

        console.log('interceptando respuesta');
        

        if (data) {
          console.log("si hay personajes en search");

          return res(ctx.status(200), ctx.json(withCharacter));
        }

        console.log('no hay personajes en search');
        
        return res(ctx.status(200), ctx.json(noCharacter));
    })

]