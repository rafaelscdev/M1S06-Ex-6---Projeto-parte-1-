function buscarEndereco() {
    const cep = prompt("Por favor, insira o CEP (apenas números):");
    const url = `https://viacep.com.br/ws/${cep}/json`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao buscar endereço: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const { logradouro, complemento, bairro, localidade, uf } = data;
            const enderecoFormatado = `${logradouro}, ${complemento ? complemento + ' - ' : ''}${bairro} - ${localidade}/${uf}`;
            alert(enderecoFormatado);
        })
        .catch(error => {
            console.error('Erro ao buscar endereço:', error);
            alert('Ocorreu um erro ao buscar o endereço. Por favor, tente novamente.');
        });
}

buscarEndereco();
