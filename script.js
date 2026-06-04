const normalPizzas = [
  {
    id: "n1",
    name: "Atum com Cebola",
    ingredients: "Atum e cebola.",
    price: 45,
    category: "salgada",
    image: "imagens/atum-com-cebola.svg",
  },
  {
    id: "n2",
    name: "Atum com Mussarela",
    ingredients: "Atum com mussarela.",
    price: 50,
    category: "salgada",
    image: "imagens/atum-com-mussarela.svg",
  },
  {
    id: "n3",
    name: "Atum com Mussarela e Vinagrete",
    ingredients: "Atum, mussarela e vinagrete.",
    price: 55,
    category: "salgada",
    image: "imagens/atum-com-mussarela-e-vinagrete.svg",
  },
  {
    id: "n4",
    name: "Baiana",
    ingredients: "Calabresa, mussarela, ovo, cebola e pimenta.",
    price: 45,
    category: "salgada",
    image: "imagens/baiana.svg",
  },
  {
    id: "n5",
    name: "Caipira",
    ingredients: "Mussarela, frango e milho.",
    price: 40,
    category: "salgada",
    image: "imagens/caipira.svg",
  },
  {
    id: "n6",
    name: "Calabresa",
    ingredients: "Calabresa tradicional.",
    price: 30,
    category: "salgada",
    image: "imagens/calabresa.svg",
  },
  {
    id: "n7",
    name: "Calabresa com Vinagrete",
    ingredients: "Calabresa com vinagrete.",
    price: 35,
    category: "salgada",
    image: "imagens/calabresa-com-vinagrete.svg",
  },
  {
    id: "n8",
    name: "Calabresa com Cheddar",
    ingredients: "Calabresa com cheddar.",
    price: 35,
    category: "salgada",
    image: "imagens/calabresa-com-cheddar.svg",
  },
  {
    id: "n9",
    name: "Calabresa com Requeijão",
    ingredients: "Calabresa com requeijão.",
    price: 35,
    category: "salgada",
    image: "imagens/calabresa-com-requeijao.svg",
  },
  {
    id: "n10",
    name: "Dois Queijos",
    ingredients: "Mussarela e requeijão.",
    price: 35,
    category: "salgada",
    image: "imagens/dois-queijos.svg",
  },
  {
    id: "n11",
    name: "Frango com Cheddar",
    ingredients: "Frango com cheddar.",
    price: 25,
    category: "salgada",
    image: "imagens/frango-com-cheddar.svg",
  },
  {
    id: "n12",
    name: "Frango com Requeijão",
    ingredients: "Frango com requeijão.",
    price: 25,
    category: "salgada",
    image: "imagens/frango-com-requeijao.svg",
  },
  {
    id: "n13",
    name: "Frango com Mussarela",
    ingredients: "Frango com mussarela.",
    price: 25,
    category: "salgada",
    image: "imagens/frango-com-mussarela.svg",
  },
  {
    id: "n14",
    name: "Mexicana",
    ingredients: "Calabresa, mussarela, vinagrete e pimenta.",
    price: 45,
    category: "salgada",
    image: "imagens/mexicana.svg",
  },
  {
    id: "n15",
    name: "Mista",
    ingredients: "Presunto e mussarela.",
    price: 35,
    category: "salgada",
    image: "imagens/mista.svg",
  },
  {
    id: "n16",
    name: "Moda da Casa",
    ingredients: "Frango, milho, bacon e mussarela.",
    price: 50,
    category: "salgada",
    image: "imagens/moda-da-casa.svg",
  },
  {
    id: "n17",
    name: "Mussarela",
    ingredients: "Mussarela tradicional.",
    price: 30,
    category: "salgada",
    image: "imagens/mussarela.svg",
  },
  {
    id: "n18",
    name: "Mussarela com Cheddar",
    ingredients: "Mussarela com cheddar.",
    price: 35,
    category: "salgada",
    image: "imagens/mussarela-com-cheddar.svg",
  },
  {
    id: "n19",
    name: "Mussarela com Milho",
    ingredients: "Mussarela com milho.",
    price: 35,
    category: "salgada",
    image: "imagens/mussarela-com-milho.svg",
  },
  {
    id: "n20",
    name: "Mussarela e Bacon",
    ingredients: "Mussarela com bacon.",
    price: 40,
    category: "salgada",
    image: "imagens/mussarela-e-bacon.svg",
  },
  {
    id: "n21",
    name: "Portuguesa",
    ingredients: "Mussarela, presunto, ovo e cebola.",
    price: 35,
    category: "salgada",
    image: "imagens/portuguesa.svg",
  },
  {
    id: "n22",
    name: "Toscana",
    ingredients: "Mussarela e calabresa.",
    price: 35,
    category: "salgada",
    image: "imagens/toscana.svg",
  },
  {
    id: "n23",
    name: "Três Queijos",
    ingredients: "Mussarela, cheddar e requeijão.",
    price: 45,
    category: "salgada",
    image: "imagens/tres-queijos.svg",
  },
  {
    id: "n24",
    name: "Ucrânia",
    ingredients: "Frango, bacon, mussarela e vinagrete.",
    price: 50,
    category: "salgada",
    image: "imagens/ucrania.svg",
  },
  {
    id: "n25",
    name: "Brigadeiro com Granulado",
    ingredients: "Pizza doce de brigadeiro com granulado.",
    price: 30,
    category: "doce",
    image: "imagens/brigadeiro-com-granulado.svg",
  },
  {
    id: "n26",
    name: "Romeu e Julieta",
    ingredients: "Pizza doce de goiabada com queijo.",
    price: 30,
    category: "doce",
    image: "imagens/romeu-e-julieta.svg",
  },
];

const vintaoPizzas = [
  {
    id: "v1",
    name: "Mussarela",
    ingredients: "Pizza grande com 8 pedaços.",
    price: 20,
    category: "vintao",
    image: "imagens/mussarela-vintao.svg",
  },
  {
    id: "v2",
    name: "Calabresa",
    ingredients: "Pizza grande com 8 pedaços.",
    price: 20,
    category: "vintao",
    image: "imagens/calabresa-vintao.svg",
  },
  {
    id: "v3",
    name: "Frango com Mussarela",
    ingredients: "Pizza grande com 8 pedaços.",
    price: 20,
    category: "vintao",
    image: "imagens/frango-com-mussarela-vintao.svg",
  },
  {
    id: "v4",
    name: "Frango com Requeijão",
    ingredients: "Pizza grande com 8 pedaços.",
    price: 20,
    category: "vintao",
    image: "imagens/frango-com-requeijao-vintao.svg",
  },
  {
    id: "v5",
    name: "Frango com Cheddar",
    ingredients: "Pizza grande com 8 pedaços.",
    price: 20,
    category: "vintao",
    image: "imagens/frango-com-cheddar-vintao.svg",
  },
  {
    id: "v6",
    name: "Toscana com Calabresa Ralada",
    ingredients: "Pizza grande com 8 pedaços.",
    price: 20,
    category: "vintao",
    image: "imagens/toscana-com-calabresa-ralada.svg",
  },
  {
    id: "v7",
    name: "Mista",
    ingredients: "Mussarela e apresuntado. Pizza grande com 8 pedaços.",
    price: 20,
    category: "vintao",
    image: "imagens/mista-vintao.svg",
  },
];

const bebidas = [
  {
    id: "b1",
    name: "Coca-Cola 2L",
    ingredients: "Refrigerante gelado 2 litros.",
    price: 12,
    category: "bebida",
    image: "imagens/coca-cola-2l.svg",
  },
  {
    id: "b2",
    name: "Guaraná 2L",
    ingredients: "Refrigerante gelado 2 litros.",
    price: 10,
    category: "bebida",
    image: "imagens/guarana-2l.svg",
  },
  {
    id: "b3",
    name: "Coca-Cola Lata",
    ingredients: "Refrigerante lata 350ml.",
    price: 5,
    category: "bebida",
    image: "imagens/coca-cola-lata.svg",
  },
  {
    id: "b4",
    name: "Água Mineral",
    ingredients: "Garrafa de água mineral.",
    price: 3,
    category: "bebida",
    image: "imagens/agua-mineral.svg",
  },
];

const products = [...normalPizzas, ...vintaoPizzas, ...bebidas];

const normalMenu = document.getElementById("normalMenu");
const vintaoMenu = document.getElementById("vintaoMenu");
const tabs = document.querySelectorAll(".tab");
const searchInput = document.getElementById("searchInput");

const cart = document.getElementById("cart");
const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const sendOrder = document.getElementById("sendOrder");

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

const clientForm = document.getElementById("clientForm");
const clientName = document.getElementById("clientName");
const clientPhone = document.getElementById("clientPhone");
const clientAddress = document.getElementById("clientAddress");
const clientPassword = document.getElementById("clientPassword");
const logoutClient = document.getElementById("logoutClient");
const orderHistory = document.getElementById("orderHistory");
const paymentMethod = document.getElementById("paymentMethod");
let selectedCategory = "todas";
let cartList = [];

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" loading="lazy">
    <div class="product-body">
      <h3>${product.name}</h3>
      <p>${product.ingredients}</p>
      <div class="product-footer">
        <span class="price">${formatCurrency(product.price)}</span>
        <button class="add-btn" data-id="${product.id}">Adicionar</button>
      </div>
    </div>
  `;

  return card;
}

function renderNormalPizzas() {
  normalMenu.innerHTML = "";

  const search = searchInput.value.trim().toLowerCase();
  const menuProducts = [...normalPizzas];
  const filtered = menuProducts.filter((product) => {
    const matchCategory =
      selectedCategory === "todas" || product.category === selectedCategory;
    const matchSearch =
      product.name.toLowerCase().includes(search) ||
      product.ingredients.toLowerCase().includes(search);

    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    normalMenu.innerHTML = '<p class="empty-cart">Nenhum sabor encontrado.</p>';
    return;
  }

  filtered.forEach((product) => {
    normalMenu.appendChild(createProductCard(product));
  });

  addButtonEvents();
}

function renderVintaoPizzas() {
  vintaoMenu.innerHTML = "";

  vintaoPizzas.forEach((product) => {
    vintaoMenu.appendChild(createProductCard(product));
  });

  addButtonEvents();
}

function renderBebidas() {
  bebidasMenu.innerHTML = "";

  bebidas.forEach((product) => {
    bebidasMenu.appendChild(createProductCard(product));
  });

  addButtonEvents();
}

function addButtonEvents() {
  document.querySelectorAll(".add-btn").forEach((button) => {
    button.onclick = () => addToCart(button.dataset.id);
  });
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const itemInCart = cartList.find((item) => item.id === productId);

  if (!product) return;

  if (itemInCart) {
    itemInCart.quantity += 1;
  } else {
    cartList.push({ ...product, quantity: 1 });
  }

  updateCart();
  cart.classList.add("open");
}

function removeFromCart(productId) {
  const item = cartList.find((product) => product.id === productId);

  if (!item) return;

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    cartList = cartList.filter((product) => product.id !== productId);
  }

  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";

  if (cartList.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio.</p>';
  }

  cartList.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <div>
        <strong>${item.quantity}x ${item.name}</strong>
        <small>${formatCurrency(item.price)} cada</small>
      </div>

      <button class="remove-btn" data-id="${item.id}">
        −
      </button>
    `;

    cartItems.appendChild(div);
  });

  const total = cartList.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const count = cartList.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  cartTotal.textContent = formatCurrency(total);
  cartCount.textContent = count;

  document.querySelectorAll(".remove-btn").forEach(button => {
    button.onclick = () => removeFromCart(button.dataset.id);
  });
}

function getClient() {
  return JSON.parse(localStorage.getItem("pizzaClient"));
}

function saveClient(client) {
  localStorage.setItem("pizzaClient", JSON.stringify(client));
}

function loadClientData() {
  const client = getClient();

  if (!client) return;

  clientName.value = client.name;
  clientPhone.value = client.phone;
  clientAddress.value = client.address;
  clientPassword.value = client.password;
}

function saveOrderHistory(order) {
  const history = JSON.parse(localStorage.getItem("pizzaOrderHistory")) || [];

  history.unshift(order);

  localStorage.setItem("pizzaOrderHistory", JSON.stringify(history));
}

function renderOrderHistory() {
  const history = JSON.parse(localStorage.getItem("pizzaOrderHistory")) || [];

  if (history.length === 0) {
    orderHistory.innerHTML =
      '<p class="empty-history">Nenhum pedido salvo ainda.</p>';
    return;
  }

  orderHistory.innerHTML = "";

  history.forEach((order, index) => {
    const div = document.createElement("div");
    div.className = "history-item";

    div.innerHTML = `
      <strong>${order.date}</strong>
      <small>${order.itemsText || order.items}</small>
      <small>Total: ${formatCurrency(order.total)}</small>

      <button class="repeat-order-btn" data-index="${index}">
        Repetir pedido
      </button>
    `;

    orderHistory.appendChild(div);
  });

  document.querySelectorAll(".repeat-order-btn").forEach(button => {
    button.addEventListener("click", () => {
      repeatOrder(Number(button.dataset.index));
    });
  });
}

function repeatOrder(index) {
  const history = JSON.parse(localStorage.getItem("pizzaOrderHistory")) || [];
  const order = history[index];

  if (!order || !order.itemsData) {
    alert("Esse pedido foi salvo no formato antigo. Faça um novo pedido para repetir.");
    return;
  }

  cartList = order.itemsData.map(item => ({ ...item }));

  updateCart();
  cart.classList.add("open");

  alert("Pedido adicionado ao carrinho!");
}

function sendOrderToWhatsapp() {
  if (cartList.length === 0) {
    alert("Adicione pelo menos um item ao carrinho.");
    return;
  }

  const payment = paymentMethod.value;
  const delivery = deliveryType.value;

  if (!payment) {
    alert("Selecione a forma de pagamento.");
    return;
  }

  if (!delivery) {
    alert("Selecione o tipo de entrega.");
    return;
  }

  const phoneNumber = "5511999036467";

  const orderItems = cartList.map(item => {
    return `${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}`;
  }).join("%0A");

  const total = cartList.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  let deliveryFee = 0;

  if (delivery === "Entrega") {
    deliveryFee = 5;
  }

  const finalTotal = total + deliveryFee;

  const client = getClient();

  let clientInfo = "";

  if (client) {
    clientInfo =
      `Cliente: ${client.name}%0A` +
      `Celular: ${client.phone}%0A` +
      `Endereço: ${client.address}%0A%0A`;
  } else {
    clientInfo =
      `Nome:%0A` +
      `Celular:%0A` +
      `Endereço:%0A%0A`;
  }

  const message =
    `Olá, gostaria de fazer um pedido:%0A%0A` +
    clientInfo +
    `Pedido:%0A${orderItems}%0A%0A` +
    `Subtotal: ${formatCurrency(total)}%0A` +
    `Entrega: ${delivery}%0A` +
    `Taxa de entrega: ${delivery === "Consultar" ? "Consultar taxa" : formatCurrency(deliveryFee)}%0A` +
    `Total: ${delivery === "Consultar" ? formatCurrency(total) + " + taxa" : formatCurrency(finalTotal)}%0A%0A` +
    `Forma de pagamento: ${payment}%0A` +
    `Observação:`;

  if (client) {
    saveOrderHistory({
  date: new Date().toLocaleString("pt-BR"),
  itemsText: cartList.map(item => `${item.quantity}x ${item.name}`).join(", "),
  itemsData: cartList.map(item => ({ ...item })),
  total: finalTotal
});

    renderOrderHistory();
  }

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

tabs.forEach((button) => {
  button.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    selectedCategory = button.dataset.category;
    renderNormalPizzas();
  });
});

searchInput.addEventListener("input", renderNormalPizzas);

openCart.addEventListener("click", () => cart.classList.add("open"));
closeCart.addEventListener("click", () => cart.classList.remove("open"));
sendOrder.addEventListener("click", sendOrderToWhatsapp);

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

renderNormalPizzas();
renderVintaoPizzas();
renderBebidas();
updateCart();

clientForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const client = {
    name: clientName.value.trim(),
    phone: clientPhone.value.trim(),
    address: clientAddress.value.trim(),
    password: clientPassword.value.trim(),
  };

  saveClient(client);

  alert("Dados salvos com sucesso!");
});

logoutClient.addEventListener("click", () => {
  localStorage.removeItem("pizzaClient");
  localStorage.removeItem("pizzaOrderHistory");

  clientForm.reset();
  renderOrderHistory();

  alert("Dados apagados com sucesso!");
});

loadClientData();
renderOrderHistory();
