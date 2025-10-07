Jogo feito com HTML, CSS e JS.

graph TD
    subgraph Ator
        A[Funcionário]
        B[Administrador]
    end

    subgraph Casos de Uso
        uc1[Abrir Porta por Voz]
        uc2[Verificar Voz por IA]
        uc3[Cadastrar Voz de Funcionário]
        uc4[Excluir Funcionário]
        uc5[Acender Luzes por Voz]
        uc6[Autorizar Acesso]
    end

    A --> uc1
    uc1 ..> uc2 : <<include>>
    uc2 --> uc6
    uc6 --> A
    B --> uc3
    B --> uc4
    uc3 --> B
    uc4 --> B
    A --> uc5
