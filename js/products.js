// -----------------------------------------------
// PRODUKT
// -----------------------------------------------

// produktlista
class Product {
  constructor(img, category, title, description, price, buyButton) {
    this.img = img;
    this.category = category;
    this.title = title;
    this.description = description;
    this.price = price;
    this.buyButton = buyButton;
  }
}

class CartItem {
  constructor(title, amount, price) {
    this.title = title;
    this.amount = amount;
    this.price = price;
  }
}

const pList = document.querySelector("#products");
const cartList = document.querySelector("#cart");
const cartTotalPrice = document.querySelector(".total-price");

const cartItems = [];

const products = [
  new Product(
    "img/nyfallskörm (1).webp",
    "Luft",
    "Hoppa fallskärm",
    `Fallskärmshoppning är en fantastisk och oförglömlig upplevelse 
    som är en kombination av äventyr och frihet. Det är en chans att 
    utforska världen från en helt ny perspektiv och njuta av den otroliga 
    friheten och spänningen som kommer med att hoppa ut från ett flygplan.

    Under hoppet faller du från en höjd på tusentals meter, med fri sikt 
    över landskapet nedanför. Du känner vinden i ansiktet och friheten att 
    flyga genom luften. Det är en unik känsla som är svår att beskriva med ord.

    Fallskärmshoppning är en säker aktivitet, och all utrustning som används 
    är noga testad och utvald för att säkerställa säkerhet och komfort för 
    hopparen. Hoppledare och instruktörer är mycket erfarna och de tar sin 
    tid att förklara allt du behöver veta om säkerhetsprocedurer och tekniker 
    för att hoppa.

    Oavsett om du är en erfaren hoppare eller nybörjare, är fallskärmshoppning 
    en unik upplevelse som garanterat kommer att lämna dig med minnen för livet. 
    Det är en möjlighet att utforska världen på ett helt nytt sätt och njuta av 
    en dag fylld med spänning och frihet.`,
    3500 + " SEK"
  ),

  new Product(
    "img/hajdykning.webp",
    "Vatten",
    "Hajdykning",
    `Hajdykning är en unik och spännande upplevelse för dykare som söker en utmaning 
    och en nära möte med världens största rovpredatorer. Detta dyk gör det möjligt för 
    dykare att observera hajar på deras naturliga habitat i deras eget tempo och från 
    en säker avstånd.

    Hajdykning är en populär aktivitet på platser med hög hajpopulation, som exempelvis 
    i fjärran östern och vissa delar av Afrika. Dykare kommer ofta att använda kärl för 
    att locka hajar och ge dem möjligheten att närma sig och observera dem från säker 
    avstånd. Detta gör det möjligt för dykare att få en unik inblick i hajars liv och 
    beteende utan att ställa dem eller sig själva i fara.

    Det är viktigt att notera att hajdykning kräver en viss erfarenhetsnivå och det 
    rekommenderas starkt att man dyker med erfarna guider som har den nödvändiga utbildningen 
    och utrustningen för att säkerställa en säker och minnesvärd upplevelse.

    Hajdykning är en möjlighet att uppleva några av naturens mest fascinerande och mytomspunna 
    varelser på nära håll och få en unik inblick i deras värld. Det är en upplevelse som garanterat 
    kommer att lämna ett bestående intryck och ge dig en större förståelse för dessa viktiga djur i 
    vårt ekosystem..`,
    2500 + " SEK"
  ),

  new Product(
    "img/rafting.webp",
    "Vatten",
    "Rafting",
    `Rafting är en spännande och adrenalinfylld vattensport som involverar 
    åkning på en flotte på snabba och vilda floder. Sporten kräver samarbete, 
    kommunikation och snabb reaktion för att navigera flodens strömmar och hindra. 
    Rafting är en populär aktivitet för äventyrare och naturälskare som söker en 
    utmaning och en unik upplevelse i vildmarken.

    Flöden som används för rafting varierar från lugna och stillsamma till rasande 
    och farliga, så det är viktigt att välja en flod som passar din erfarenhetsnivå 
    och komfort. Raftingguider finns tillgängliga för att hjälpa till med säkerhet 
    och navigation, men det är fortfarande viktigt att vara förberedd på de fysiska 
    och mentala utmaningarna som kommer med sporten.

    Under en raftingtur kan du få se fantastiska vyer av den omgivande naturen och 
    möta vilda djur i deras naturliga miljö. Du kommer också att få möjlighet att testa 
    din fysiska och mentala styrka när du hanterar strömmarna och arbetar tillsammans med 
    din grupp för att nå målet. Rafting är en unik och minnesvärd upplevelse som garanterat 
    kommer att ge dig en rusande åktur.`,
    1200 + " SEK"
  ),

  new Product(
    "img/snöskoter.webp",
    "Land",
    "Snöskotersafari",
    `Skotersafari är en oförglömlig upplevelse som tar dig med på en 
    spännande resa genom det vackra landskapet. Du kommer att få möjlighet 
    att utforska vintervärlden på en helt ny sätt, med hjälp av en snöskoter.

    Under safarit kommer du att få köra din egen snöskoter, eller du kan välja 
    att sitta bakom en erfaren förare, beroende på din erfarenhet och preferenser. 
    Du kommer att åka genom den vackra vintervärlden, med fri sikt över de omgivande 
    bergen och skogen.

    Skotersafari är en säker aktivitet och all utrustning som används är noga testad 
    och utvald för att säkerställa säkerhet och komfort för alla deltagare. Du får 
    också en introduktion och säkerhetsgenomgång innan du börjar åka, för att 
    säkerställa att du är bekväm med att köra snöskotern.

    Oavsett om du är en erfaren snöskoterkörare eller nybörjare, är skotersafari en 
    unik och spännande upplevelse som garanterat kommer att lämna dig med minnen för 
    livet. Det är en möjlighet att utforska vintervärlden på ett helt nytt sätt och njuta 
    av en dag fylld med äventyr och frihet.`,
    800 + " SEK"
  ),
];

for (const product of products) {
  // skapar element
  const card = document.createElement("li");
  const cardImg = document.createElement("img");
  const cardHeader = document.createElement("div");
  const category = document.createElement("h6");
  const cardBody = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const cardText = document.createElement("p");
  const cardFooter = document.createElement("div");
  const cardPrice = document.createElement("h6");
  const buyButton = document.createElement("button");

  // stylar element
  card.classList.add("card", "mb-3");
  cardImg.classList.add("card-img-top");
  cardBody.classList.add("card-body", "m-3");
  cardTitle.classList.add("card-title");
  cardText.classList.add("card-text");
  cardFooter.classList.add("card-footer");
  buyButton.classList.add("btn", "btn-success", "mx-1");

  if (product.category == "Vatten") {
    cardHeader.classList.add(
      "card-header",
      "bg-info",
      "text-light",
      "fw-bolder"
    );
  } else if (product.category == "Luft") {
    cardHeader.classList.add(
      "card-header",
      "bg-warning",
      "text-light",
      "fw-bolder"
    );
  } else if (product.category == "Land") {
    cardHeader.classList.add(
      "card-header",
      "bg-danger",
      "text-light",
      "fw-bolder"
    );
  }

  // innehåll i element
  cardImg.src = product.img;
  cardHeader.innerText = product.category;
  cardTitle.innerText = product.title;
  cardText.innerText = product.description;
  cardPrice.innerText = product.price;
  buyButton.innerText = "Köp";

  // lägger till element
  card.append(cardImg, cardHeader, cardBody, cardFooter);
  cardHeader.append(category);
  cardBody.append(cardTitle, cardText);
  cardFooter.append(cardPrice, buyButton);
  pList.append(card);

  // sätter upp event på elementet
  buyButton.onclick = () => {
    addToCartClick(product.title);
    updateCart();
  };
}

function updateCart() {
  showCart();
  showTotal();
}

function showTotal() {
  let totalPrice = 0,
    totalItems = 0;
  for (const item of cartItems) {
    totalPrice += item.price * item.amount;
    totalItems += item.amount;
  }
  cartTotalPrice.innerText = `Totalt (${totalItems} st): ${totalPrice} SEK`;
}

//------------------------------------------------------

function showCart() {
  cartList.innerHTML = "";

  for (const item of cartItems) {
    const card = document.createElement("li");
    const cardTitle = document.createElement("h5");
    const cardAmount = document.createElement("h6");
    const cardPrice = document.createElement("h6");
    const buttonGroup = document.createElement("div");
    const plusButton = document.createElement("button");
    const minusButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    // styling
    card.classList.add("card", "mb-3");
    cardTitle.classList.add("card-title", "m-3");
    cardAmount.classList.add("mx-3");
    cardPrice.classList.add("mx-3");
    buttonGroup.classList.add("btn-group");
    plusButton.classList.add("btn", "btn-secondary");
    minusButton.classList.add("btn", "btn-secondary", "btn-disabled");
    deleteButton.classList.add("btn", "btn-danger");

    // innehåll
    cardTitle.innerText = item.title;
    cardAmount.innerText = item.amount + " person/er";
    cardPrice.innerText = item.price;
    plusButton.innerText = "+";
    minusButton.innerText = "-";
    deleteButton.innerText = "Ta bort";

    // lägg till element
    card.append(cardTitle, cardAmount, cardPrice, buttonGroup);
    buttonGroup.append(plusButton, minusButton, deleteButton);
    cartList.append(card);

    //sätter upp event
    plusButton.onclick = () => {
      console.log(item);
      addAmount(item);
    };

    minusButton.onclick = () => {
      console.log(item);
      deleteAmount(item);
    };

    deleteButton.onclick = () => {
      deleteItemFromCart(item);
    };
  }

  showTotal();
}

//
function addToCartClick(title) {
  if (cartItems.some((item) => item.title === title)) {
    alert("Produkten finns redan i varukorgen, gå dit för att ändra antal.");
  } else {
    const item = products.find((p) => p.title === title);
    cartItems.push({
      ...item,
      amount: 1,
    });
  }
  showCart();
  showTotal();
  console.log(cartItems);
}

function deleteItemFromCart(title) {
  cartItems = cartItems.filter((item) => item.title !== title);

  showCart();
}

function addAmount(pickeItem) {
  for (const item of cartItems) {
    if (pickeItem === item) {
      item.amount++;
    }
  }
  console.log(cartItems);
  updateCart();
}

function deleteAmount(pickedItem) {
  for (const item of cartItems) {
    if (pickedItem === item) {
      item.amount--;
    }
  }
  updateCart();
  console.log(cartItems);
}
console.log(cartItems);
