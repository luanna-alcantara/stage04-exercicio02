/* Nesse desafio você irá criar uma lista de **estudantes** e, 
cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de 
cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique 
**se** cada aluno obteve sucesso ou não em entrar no concurso e mostre 
uma mensagem na tela.
*/

const students = [
    {
    name: "Luanna",
    firstScore: 80,
    secondScore: 75, 
    },

    {
    name: "Rafael",
    firstScore: 85,
    secondScore: 80, 
    },

    {
    name: "Italo",
    firstScore: 60,
    secondScore: 65, 
    },

    {
    name: "Arthur",
    firstScore: 70,
    secondScore: 75, 
    },
];

for (let i = 0; i < students.length; i++) {
    let student = students[i];

    let average = (student.firstScore + student.secondScore) / 2;
    average = Number(average.toFixed(2)); // Convertendo para número

    if (average >= 70) {
        alert(`A média do(a) aluno(a) ${student.name} é: ${average}. \nParabéns, ${student.name}, você foi aprovado(a) no concurso!`);
    } else {
        alert(`A média do(a) aluno(a) ${student.name} é: ${average}. \nNão foi dessa vez, ${student.name}, tente novamente!`);
    }
}
