let pedido = [];
let total = 0;

function adicionarAoPedido(nome, preco) {
  // Adiciona item ao array do pedido
  pedido.push({ nome, preco });
  total += preco;

  // Atualiza a lista de pedido na tela
  atualizarPedido();

  // Exibe o total atualizado
  document.getElementById("total").innerText = `R$ ${total.toFixed(2)}`;
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

  alert("Seu pedido foi finalizado com sucesso! Total: R$ " + total.toFixed(2));
  pedido = [];
  total = 0;
  atualizarPedido();
  document.getElementById("total").innerText = `R$ 0,00`;
}
