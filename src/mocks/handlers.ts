import {rest} from 'msw'
import { API_URL } from '../app/constants'
import { allResults, results } from './dataMock';

export const handlers = [

    rest.get(API_URL, (req,res,ctx)=>{
        const characterParams = req.url.searchParams.get('character');

        if(characterParams){
            return res(
                ctx.status(200), 
                ctx.json( [results] ));
        }

        return res(
            ctx.status(200),
            ctx.json([allResults])
        )
    })

]