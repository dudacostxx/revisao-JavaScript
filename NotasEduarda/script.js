let alunos = [];

function inserirAluno() {
    const nome = document.getElementById("aluno").value;
    const nota = document.getElementById("nota").value;

    const aluno = { nome, nota };
    alunos.push(aluno);

    if (alunos.length === 1) {
        document.getElementById("tabela-container").style.display = "block";
    }

    mostrarTabela();
    limparCampos();
}

function mostrarTabela() {
    const tabela = document.getElementById("corpo-tabela");
    tabela.innerHTML = '';

    alunos.forEach(aluno => {
        const row = tabela.insertRow();
        const cellNome = row.insertCell(0);
        const cellNota = row.insertCell(1);

        cellNome.innerHTML = aluno.nome;
        cellNota.innerHTML = aluno.nota;
    });
}

function limparCampos() {
    document.getElementById("aluno").value = "";
    document.getElementById("nota").value = "";
}
