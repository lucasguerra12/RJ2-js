function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = new TelefoneCelular(telefoneCelular);
    this.email = email;
    this.endereco = new Endereco(endereco);

    
    Object.defineProperty(this, 'pegarNome', {
        get: function() {
            return this.nome;
        },
        set: function(novoNome) {
            this.nome = novoNome;
        }
    });

    
    Object.defineProperty(this, 'pegarTelefone', {
        get: function() {
            return this.telefoneCelular.pegarTelefone;
        },
        set: function(novoTelefone) {
            this.telefoneCelular.pegarTelefone = novoTelefone;
        }
    });

    
    Object.defineProperty(this, 'pegarEmail', {
        get: function() {
            return this.email;
        },
        set: function(novoEmail) {
            this.email = novoEmail;
        }
    });

    
    Object.defineProperty(this, 'pegarEndereco', {
        get: function() {
            return this.endereco.pegarEndereco;
        },
        set: function(novoEndereco) {
            this.endereco.pegarEndereco = novoEndereco;
        }
    });

    
    Object.defineProperty(this, 'descricao', {
        get: function() {
            return `----------------\nInformações do Cliente:\n${this.nome}\n----------------\n` +
                `Telefone: ${this.telefoneCelular.pegarTelefone}\nE-mail: ${this.email}\nEndereço: ${this.endereco.pegarEndereco}\n----------------`;
        }
    });
}


function ordenarClientesPorNome(clientes) {
    return clientes.sort((a, b) => a.nome.localeCompare(b.nome));
}


function TelefoneCelular(telefoneCompleto) {
    this.telefoneCompleto = telefoneCompleto;

    Object.defineProperty(this, 'pegarTelefone', {
        get: function() {
            return this.telefoneCompleto;
        },
        set: function(novoTelefone) {
            this.telefoneCompleto = novoTelefone;
        }
    });

    Object.defineProperty(this, 'descricao', {
        get: function() {
            return `Telefone: ${this.telefoneCompleto}`;
        }
    });
}


function Endereco(enderecoCompleto) {
    this.enderecoCompleto = enderecoCompleto;

    Object.defineProperty(this, 'pegarEndereco', {
        get: function() {
            return this.enderecoCompleto;
        },
        set: function(novoEndereco) {
            this.enderecoCompleto = novoEndereco;
        }
    });

    Object.defineProperty(this, 'descricao', {
        get: function() {
            return `Endereço: ${this.enderecoCompleto}`;
        }
    });
}


let clientes = [
    new Cliente('Amanda Oliveira', '11 99988-7777', 'amanda.oliveira@email.com', 'Rua Augusta, 2500, São Paulo - SP'),
    new Cliente('Bruno Mendes', '21 98877-6655', 'bruno.mendes@email.com', 'Av. Atlântica, 1450, Rio de Janeiro - RJ'),
    new Cliente('Carla Souza', '31 97766-5544', 'carla.souza@email.com', 'Rua da Liberdade, 330, Belo Horizonte - MG'),
    new Cliente('Diego Martins', '41 96655-4433', 'diego.martins@email.com', 'Av. República, 500, Curitiba - PR'),
    new Cliente('Eduardo Silva', '12 96543-2109', 'eduardo.silva@email.com', 'Rua das Flores, 400, Campinas - SP'),
    new Cliente('Felipe Pereira', '15 96385-2741', 'felipe.pereira@email.com', 'Avenida Brasil, 1200, Sorocaba - SP')
];


let clientesOrdenados = ordenarClientesPorNome(clientes);

// Exibindo a lista ordenada
console.log("Clientes Ordenados por Nome:");
clientesOrdenados.forEach(cliente => {
    console.log(cliente.descricao);
});

console.log("\nAlterando alguns dados...");
clientes[0].pegarNome = "Ana Paula Oliveira";
clientes[0].pegarTelefone = "11 98877-6655";

console.log(clientes[0].descricao);
