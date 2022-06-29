import { Button } from "@mui/material";
import React from "react";
import  { DeletaPosto } from "../repositories/Posto"

export default class Posto{
    constructor({codigo,cnpj,razaoSocial,nomeFantasia,bandeira,
    situacao,endereco,complemento,bairro,cidade,uf,regiao,latitude,
    longitude})
    {
        this._codigo = codigo;
        this._cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.bandeira = bandeira;
        this.situacao = situacao;
        this.endereco = endereco;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
        this.regiao = regiao;
        this.geolocalizacao = `${latitude} / ${longitude}`;
    }
    
    get cnpj(){
        return this._cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }

    get codigo(){
        return this._codigo;
    }

    
}