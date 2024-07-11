export default class salon {
    constructor() {
       this.contaprobados = 0;
       this.contareprobados = 0;
       this.contestudiantes = 0;
       this.acumnotas = 0;
    }
    procesarestudiantes(es) {
        this.contestudiantes++;
        if(es.notaFinal >= 48) {
            this.contaprobados++;
        } else {
            this.contareprobados++;
        }
        this.acumnotas += es.notaFinal;
    }
    promedio() {
        return this.acumnotas / this.contestudiantes;
}
devolveraprobados() {
    return this.contaprobados;
}
devolverreprobados() {
    return this.contareprobados;
}
}