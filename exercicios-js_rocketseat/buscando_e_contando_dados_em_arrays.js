const categoriaLivros = [
    {
        categoria: "Riqueza",
        livros: [
            {
                titulo:"Os segredos da mente milionária",
                autor: "T. Harv Eker",
            },
            {
                titulo: "O homem mais rico da Babilônia",
                autor: "George S. Clason",
            },
            {
                titulo: "Pai rico, pai pobre",
                autor: "Robert T. Kiyosaki e Sharon L. Lecheter",
            },
        ],
    },
    {
        categoria: "Inteligência Emocional",
        livros: [
            {
                titulo: "Você é Insubstituível",
                autor: "Augusto Cury",
            },
            {
                titulo: "Ansiedade - Como enfrentar o mal do século",
                autor: "Augusto Cury",                
            },
            {
                titulo: "Os 7 hábitos das pessoas altamente eficazes",
                autor: "StephenR. Covey",
            },
        ],
    },
];

const totalCategorias = categoriaLivros.length

console.log(totalCategorias)

for (let categoria of categoriaLivros) {
    console.log("Total de livros da categoria: ", categoria.categoria)
    console.log(categoria.livros.length)
}

function contaAutor() {
    let autores = [];

    for (let categoria of categoriaLivros) {
        for (let livros of categoria.livros) {
            if (autores.indexOf(livros.autor) == -1) {
                autores.push(livros.autor)
            }
        }
    }

    console.log("Total de autores: ", autores.length)
}

contaAutor()

function livrosDoAutor(autor) {
    let livros = [];

    for (let categoria of categoriaLivros) {
        for (let livro of categoria.livros) {
            if (livro.autor === autor) {
                livros.push(livro.titulo)
            }
        }
    }

    console.log(`Livros do autor ${autor}: ", ${livros.join(", ")}`)
}

livrosDoAutor("Robert T. Kiyosaki e Sharon L. Lecheter")