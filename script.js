let total = 0;

function addToCart() {
  const volume = document.getElementById("volume");
  const price = parseInt(volume.value);
  const text = volume.options[volume.selectedIndex].text;

  const item = document.createElement("li");
  item.textContent = "Ganymede — " + text;
  document.getElementById("cart-items").appendChild(item);

  total += price;
  document.getElementById("total").textContent = total;
}