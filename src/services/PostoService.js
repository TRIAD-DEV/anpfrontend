import Posto from "../models/Posto";
import { RetornaPostos } from "../repositories/Posto";

export default class PostoService{
    async findAll(){
        let postos = await RetornaPostos()
        let postosSerializer = postos.map((posto)=> new Posto(posto))
        return postosSerializer
    }
}