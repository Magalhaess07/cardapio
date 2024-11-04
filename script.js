let pedido = [];
let total = 0;

function adicionarAoPedido(nome, preco) {
    pedido.push({ nome, preco });
    total += preco;

    atualizarPedido();
    document.getElementById("total").innerText = `R$ ${total.toFixed(2)}`;
    alert(`${nome} adicionado ao pedido!`);
}

function atualizarPedido() {
    const listaPedido = document.getElementById("pedido-lista");
    listaPedido.innerHTML = ""; // Limpa a lista antes de atualizar

    pedido.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaPedido.appendChild(li);
    });
}

function finalizarPedido() {
    if (pedido.length === 0) {
        alert("Por favor, adicione itens ao pedido antes de finalizar.");
        return;
    }

    const resumo = pedido.map(item => `${item.nome} - R$ ${item.preco.toFixed(2)}`).join('\n');
    alert(`Seu pedido foi finalizado com sucesso!\n\nResumo:\n${resumo}\nTotal: R$ ${total.toFixed(2)}`);
    
    pedido = [];
    total = 0;
    atualizarPedido();
    document.getElementById("total").innerText = `R$ 0,00`;
}
