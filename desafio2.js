"use strict";
// Como podemos melhorar o esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Ator"] = 1] = "Ator";
    Profissao[Profissao["Padeira"] = 2] = "Padeira";
    Profissao[Profissao["Padeiro"] = 3] = "Padeiro";
})(Profissao || (Profissao = {}));
;
var maria = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};
var roberto = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
var laura = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
};
var carlos = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
};
