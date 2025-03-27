const currentRank = document.getElementById("currentRank");
const targetRank = document.getElementById("targetRank");
const priceOutput = document.getElementById("priceOutput");

function calculatePrice() {
  const current = parseInt(currentRank.value);
  const target = parseInt(targetRank.value);

  if (target <= current) {
    priceOutput.textContent = "Geçersiz Seçim";
    return;
  }

  const diff = target - current;
  const price = diff * 100; // Her seviye için 100₺ örnek fiyat

  priceOutput.textContent = `₺${price}`;
}

currentRank.addEventListener("change", calculatePrice);
targetRank.addEventListener("change", calculatePrice);
