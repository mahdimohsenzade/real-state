const adsContainer = document.querySelector("#ads-container");

function createCard(property) {
  return `

<article class="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-custom-9 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">


<a href="./property.html?id=${property.id}" class="relative block aspect-4/3 overflow-hidden">


<img 
src="../images/adsimages/${property.images[0]}"
loading="lazy"
alt="${property.title}"
class="size-full object-cover transition duration-500 hover:scale-105">


<div class="absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-between gap-2">

<span class="rounded-full bg-indigo-100 px-3 py-1 text-xs font-IRANYekanMedium text-blue-950">
${property.type}
</span>

<span class="rounded-full bg-indigo-100 px-3 py-1 text-xs font-IRANYekanMedium text-blue-950">
${property.deal}
</span>

</div>


</a>



<div class="flex flex-1 flex-col p-4">


<h3 class="text-base font-bold leading-6 text-zinc-800">

${property.title}

</h3>



<ul class="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-zinc-600 font-IRANYekanMedium">

<li>${property.area}</li>

<li>•</li>

<li>${property.rooms}</li>

<li>•</li>

<li>${property.parking}</li>

</ul>



<div class="mt-3 flex items-center gap-2 text-sm text-zinc-700">

<svg class="w-3.5 h-3.5">
<use href="#cart-map"></use>
</svg>

<span>
${property.location}
</span>

</div>



<dl class="mt-2 space-y-3 border-t border-zinc-100 pt-4 text-sm">


<div class="flex justify-between">

<dt class="text-custom-3">
قیمت کل:
</dt>

<dd class="font-IRANYekanBold text-custom-8">

${property.totalPrice}

<span class="text-custom-3">
تومان
</span>

</dd>

</div>



<div class="flex justify-between">

<dt class="text-custom-3">
قیمت هر متر:
</dt>

<dd class="font-IRANYekanBold text-custom-8">

${property.meterPrice}

<span class="text-custom-3">
تومان
</span>

</dd>

</div>


</dl>


</div>


</article>

`;
}

function renderProperties(items) {
  adsContainer.innerHTML = "";

  const resultCount = document.querySelector("#result-count");

  if (resultCount) {
    resultCount.innerHTML = `${items.length} آگهی پیدا شد`;
  }

  if (items.length === 0) {
    adsContainer.innerHTML = `
        <div class="col-span-full text-center py-20">
            <p class="text-zinc-500 text-lg">
                آگهی‌ای با این مشخصات پیدا نشد
            </p>
        </div>`;
    return;
  }

  items.forEach((property) => {
    adsContainer.innerHTML += createCard(property);
  });
}
// first dispaly

renderProperties(properties);

// filters

const typeFilter = document.querySelector("#type-filter");
const dealFilter = document.querySelector("#deal-filter");
const cityFilter = document.querySelector("#city-filter");
const filterBtn = document.querySelector("#filter-btn");

filterBtn.addEventListener("click", () => {
  const filteredProperties = properties.filter((property) => {
    return (typeFilter.value === "" || property.type === typeFilter.value) && (dealFilter.value === "" || property.deal === dealFilter.value) && (cityFilter.value === "" || property.location.includes(cityFilter.value));
  });

  renderProperties(filteredProperties);
});
