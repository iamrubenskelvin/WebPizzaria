const normalPizzas = [
  {
    "id": "n1",
    "name": "Atum com Cebola",
    "ingredients": "Atum e cebola.",
    "price": 45,
    "category": "salgada",
    "image": "imagens/atum-com-cebola.svg"
  },
  {
    "id": "n2",
    "name": "Atum com Mussarela",
    "ingredients": "Atum com mussarela.",
    "price": 50,
    "category": "salgada",
    "image": "imagens/atum-com-mussarela.svg"
  },
  {
    "id": "n3",
    "name": "Atum com Mussarela e Vinagrete",
    "ingredients": "Atum, mussarela e vinagrete.",
    "price": 55,
    "category": "salgada",
    "image": "imagens/atum-com-mussarela-e-vinagrete.svg"
  },
  {
    "id": "n4",
    "name": "Baiana",
    "ingredients": "Calabresa, mussarela, ovo, cebola e pimenta.",
    "price": 45,
    "category": "salgada",
    "image": "imagens/baiana.svg"
  },
  {
    "id": "n5",
    "name": "Caipira",
    "ingredients": "Mussarela, frango e milho.",
    "price": 40,
    "category": "salgada",
    "image": "imagens/caipira.svg"
  },
  {
    "id": "n6",
    "name": "Calabresa",
    "ingredients": "Calabresa tradicional.",
    "price": 30,
    "category": "salgada",
    "image": "imagens/calabresa.svg"
  },
  {
    "id": "n7",
    "name": "Calabresa com Vinagrete",
    "ingredients": "Calabresa com vinagrete.",
    "price": 35,
    "category": "salgada",
    "image": "imagens/calabresa-com-vinagrete.svg"
  },
  {
    "id": "n8",
    "name": "Calabresa com Cheddar",
    "ingredients": "Calabresa com cheddar.",
    "price": 35,
    "category": "salgada",
    "image": "imagens/calabresa-com-cheddar.svg"
  },
  {
    "id": "n9",
    "name": "Calabresa com Requeijão",
    "ingredients": "Calabresa com requeijão.",
    "price": 35,
    "category": "salgada",
    "image": "imagens/calabresa-com-requeijao.svg"
  },
  {
    "id": "n10",
    "name": "Dois Queijos",
    "ingredients": "Mussarela e requeijão.",
    "price": 35,
    "category": "salgada",
    "image": "imagens/dois-queijos.svg"
  },
  {
    "id": "n11",
    "name": "Frango com Cheddar",
    "ingredients": "Frango com cheddar.",
    "price": 25,
    "category": "salgada",
    "image": "imagens/frango-com-cheddar.svg"
  },
  {
    "id": "n12",
    "name": "Frango com Requeijão",
    "ingredients": "Frango com requeijão.",
    "price": 25,
    "category": "salgada",
    "image": "imagens/frango-com-requeijao.svg"
  },
  {
    "id": "n13",
    "name": "Frango com Mussarela",
    "ingredients": "Frango com mussarela.",
    "price": 25,
    "category": "salgada",
    "image": "imagens/frango-com-mussarela.svg"
  },
  {
    "id": "n14",
    "name": "Mexicana",
    "ingredients": "Calabresa, mussarela, vinagrete e pimenta.",
    "price": 45,
    "category": "salgada",
    "image": "imagens/mexicana.svg"
  },
  {
    "id": "n15",
    "name": "Mista",
    "ingredients": "Presunto e mussarela.",
    "price": 35,
    "category": "salgada",
    "image": "imagens/mista.svg"
  },
  {
    "id": "n16",
    "name": "Moda da Casa",
    "ingredients": "Frango, milho, bacon e mussarela.",
    "price": 50,
    "category": "salgada",
    "image": "imagens/moda-da-casa.svg"
  },
  {
    "id": "n17",
    "name": "Mussarela",
    "ingredients": "Mussarela tradicional.",
    "price": 30,
    "category": "salgada",
    "image": "imagens/mussarela.svg"
  },
  {
    "id": "n18",
    "name": "Mussarela com Cheddar",
    "ingredients": "Mussarela com cheddar.",
    "price": 35,
    "category": "salgada",
    "image": "imagens/mussarela-com-cheddar.svg"
  },
  {
    "id": "n19",
    "name": "Mussarela com Milho",
    "ingredients": "Mussarela com milho.",
    "price": 35,
    "category": "salgada",
    "image": "imagens/mussarela-com-milho.svg"
  },
  {
    "id": "n20",
    "name": "Mussarela e Bacon",
    "ingredients": "Mussarela com bacon.",
    "price": 40,
    "category": "salgada",
    "image": "imagens/mussarela-e-bacon.svg"
  },
  {
    "id": "n21",
    "name": "Portuguesa",
    "ingredients": "Mussarela, presunto, ovo e cebola.",
    "price": 35,
    "category": "salgada",
    "image": "imagens/portuguesa.svg"
  },
  {
    "id": "n22",
    "name": "Toscana",
    "ingredients": "Mussarela e calabresa.",
    "price": 35,
    "category": "salgada",
    "image": "imagens/toscana.svg"
  },
  {
    "id": "n23",
    "name": "Três Queijos",
    "ingredients": "Mussarela, cheddar e requeijão.",
    "price": 45,
    "category": "salgada",
    "image": "imagens/tres-queijos.svg"
  },
  {
    "id": "n24",
    "name": "Ucrânia",
    "ingredients": "Frango, bacon, mussarela e vinagrete.",
    "price": 50,
    "category": "salgada",
    "image": "imagens/ucrania.svg"
  },
  {
    "id": "n25",
    "name": "Brigadeiro com Granulado",
    "ingredients": "Pizza doce de brigadeiro com granulado.",
    "price": 30,
    "category": "doce",
    "image": "imagens/brigadeiro-com-granulado.svg"
  },
  {
    "id": "n26",
    "name": "Romeu e Julieta",
    "ingredients": "Pizza doce de goiabada com queijo.",
    "price": 30,
    "category": "doce",
    "image": "imagens/romeu-e-julieta.svg"
  }
];

const vintaoPizzas = [
  {
    "id": "v1",
    "name": "Mussarela",
    "ingredients": "Pizza grande com 8 pedaços.",
    "price": 20,
    "category": "vintao",
    "image": "imagens/mussarela-vintao.svg"
  },
  {
    "id": "v2",
    "name": "Calabresa",
    "ingredients": "Pizza grande com 8 pedaços.",
    "price": 20,
    "category": "vintao",
    "image": "imagens/calabresa-vintao.svg"
  },
  {
    "id": "v3",
    "name": "Frango com Mussarela",
    "ingredients": "Pizza grande com 8 pedaços.",
    "price": 20,
    "category": "vintao",
    "image": "imagens/frango-com-mussarela-vintao.svg"
  },
  {
    "id": "v4",
    "name": "Frango com Requeijão",
    "ingredients": "Pizza grande com 8 pedaços.",
    "price": 20,
    "category": "vintao",
    "image": "imagens/frango-com-requeijao-vintao.svg"
  },
  {
    "id": "v5",
    "name": "Frango com Cheddar",
    "ingredients": "Pizza grande com 8 pedaços.",
    "price": 20,
    "category": "vintao",
    "image": "imagens/frango-com-cheddar-vintao.svg"
  },
  {
    "id": "v6",
    "name": "Toscana com Calabresa Ralada",
    "ingredients": "Pizza grande com 8 pedaços.",
    "price": 20,
    "category": "vintao",
    "image": "imagens/toscana-com-calabresa-ralada.svg"
  },
  {
    "id": "v7",
    "name": "Mista",
    "ingredients": "Mussarela e apresuntado. Pizza grande com 8 pedaços.",
    "price": 20,
    "category": "vintao",
    "image": "imagens/mista-vintao.svg"
  }
];

const products = [...normalPizzas, ...vintaoPizzas];

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

let selectedCategory = "todas";
let cartList = [];

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
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

  const filtered = normalPizzas.filter(product => {
    const matchCategory = selectedCategory === "todas" || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(search) || product.ingredients.toLowerCase().includes(search);

    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    normalMenu.innerHTML = '<p class="empty-cart">Nenhum sabor encontrado.</p>';
    return;
  }

  filtered.forEach(product => {
    normalMenu.appendChild(createProductCard(product));
  });

  addButtonEvents();
}

function renderVintaoPizzas() {
  vintaoMenu.innerHTML = "";

  vintaoPizzas.forEach(product => {
    vintaoMenu.appendChild(createProductCard(product));
  });

  addButtonEvents();
}

function addButtonEvents() {
  document.querySelectorAll(".add-btn").forEach(button => {
    button.onclick = () => addToCart(button.dataset.id);
  });
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  const itemInCart = cartList.find(item => item.id === productId);

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
  const item = cartList.find(product => product.id === productId);

  if (!item) return;

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    cartList = cartList.filter(product => product.id !== productId);
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
      <button class="remove-btn" data-id="${item.id}">−</button>
    `;

    cartItems.appendChild(div);
  });

  const total = cartList.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = cartList.reduce((sum, item) => sum + item.quantity, 0);

  cartTotal.textContent = formatCurrency(total);
  cartCount.textContent = count;

  document.querySelectorAll(".remove-btn").forEach(button => {
    button.onclick = () => removeFromCart(button.dataset.id);
  });
}

function sendOrderToWhatsapp() {
  if (cartList.length === 0) {
    alert("Adicione pelo menos um item ao carrinho.");
    return;
  }

  const phoneNumber = "5511999036467";

  const orderItems = cartList.map(item => {
    return `${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}`;
  }).join("%0A");

  const total = cartList.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const message =
    `Olá, gostaria de fazer um pedido:%0A%0A` +
    `${orderItems}%0A%0A` +
    `Total: ${formatCurrency(total)}%0A%0A` +
    `Nome:%0A` +
    `Endereço:%0A` +
    `Forma de pagamento:%0A` +
    `Observação:`;

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

tabs.forEach(button => {
  button.addEventListener("click", () => {
    tabs.forEach(item => item.classList.remove("active"));
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

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

renderNormalPizzas();
renderVintaoPizzas();
updateCart();
