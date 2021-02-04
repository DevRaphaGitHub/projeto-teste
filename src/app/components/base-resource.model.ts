export abstract class BaseResourceModel {

    public mascaraCelular(): any {
        return {
            mask: ["(", /\d/, "X", "X", /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        }
    }

    public optionsMonths(): Array<any> {
        return [
            { codigo: "Jan", descricao: "Janeiro" },
            { codigo: "Fev", descricao: "Fevereiro" },
            { codigo: "Mar", descricao: "Março" },
            { codigo: "Abr", descricao: "Abril" },
            { codigo: "Mai", descricao: "Maio" },
            { codigo: "Jun", descricao: "Junho" },
            { codigo: "Jul", descricao: "Julho" },
            { codigo: "Ago", descricao: "Agosto" },
            { codigo: "Set", descricao: "Setembro" },
            { codigo: "Out", descricao: "Outubro" },
            { codigo: "Nov", descricao: "Novembro" },
            { codigo: "Dez", descricao: "Dezembro" },
        ];
    }
}