import {rest} from 'msw'
import { API_URL } from '../app/constants'
import { noCharacter, withCharacter } from './dataMock';

export const handlers = [

    rest.get(API_URL, (req,res,ctx)=>{
        const data = req.url.searchParams.get('character') ? withCharacter : noCharacter;
        
        return res(ctx.status(200), ctx.json(data));
    })
]