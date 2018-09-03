/* global d3 */

var datos = [];

function graficarEstudiantes() {

    d3.json('./Recursos/JSON/estudiantes.json', function (err, d) {
        if (err) { console.log(err); return; };
    }).then((e) => {
        datos = e.datos;
        var margin = { top: 20, right: 20, bottom: 70, left: 40 },
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var dat = [];

        $.each(datos, function (index, estudiante) {
            dat.push({
                'semestre': estudiante.ultimoSemestreCursado === null ? '0000' : estudiante.ultimoSemestreCursado,
                'anio': estudiante.ultimoAnioCursado === null ? '0000' : estudiante.ultimoAnioCursado
            });
        });

        var dominio = [2007, 2014];
        var rango = [1, 9];

        d3.select('svg')
            .selectAll('div')
            .data(dat)
            .enter()
            .append('div')
            .style('width', function (d) {
                return '15px';
            })
            .text(function (d) {
                return d.anio;
            });
    });
}