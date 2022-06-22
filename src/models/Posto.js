export default class Posto{
    constructor({codigo,cnpj,razaoSocial,nomeFantasia,bandeira,
    situacao,endereco,complemento,bairro,cidade,uf,regiao,latitude,
    longitude})
    {
        this.codigo = codigo;
        this.cnpj = cnpj;
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
        this.geolocalizacao = latitude + "/" + longitude;
    }

}