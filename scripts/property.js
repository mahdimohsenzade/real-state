const params = new URLSearchParams(window.location.search);

const propertyId = Number(params.get("id"));

const property = properties.find((item) => item.id === propertyId);

const propertyContainer = document.querySelector("#property-container");

if (property) {
  propertyContainer.innerHTML = `

    <div class="grid lg:grid-cols-2 gap-8">
      <!-- IMAGE -->
      <div class="space-y-4">
            <!-- Main Image -->
            <img
                id="main-image"
                src="../images/adsimages/${property.images[0]}"
                class="w-full aspect-video object-cover rounded-2xl"
            />

            <!-- Thumbnails -->

            <div class="flex flex-wrap gap-3">
                ${property.images
                  .map(
                    (img, index) => `

                <img
                    src="../images/adsimages/${img}"
                    onclick="changeImage('${img}')"
                    class="w-20 h-16 object-cover rounded-xl cursor-pointer border hover:scale-105 transition"
                />

                `,
                  )
                  .join("")}
            </div>
        </div>
      <!-- INFO -->

      <div class="bg-custom-9 rounded-2xl border border-zinc-200 p-6">
        <div class="flex gap-2 mb-5">
          <span class="rounded-full bg-indigo-100 px-3 py-1 text-xs">
            ${property.type}
          </span>

          <span class="rounded-full bg-indigo-100 px-3 py-1 text-xs">
            ${property.deal}
          </span>
        </div>

        <h1 class="text-3xl font-bold text-blue-950">${property.title}</h1>

        <p class="mt-4 text-zinc-600">📍 ${property.location}</p>

        <div class="grid grid-cols-2 gap-4 mt-8">
          <div class="bg-white rounded-xl p-4 border border-custom-7/50">
            <p class="text-custom-4 text-sm">متراژ</p>

            <strong> ${property.area} </strong>
          </div>

          <div class="bg-white rounded-xl p-4 border border-custom-7/50">
            <p class="text-custom-4 text-sm">اتاق</p>

            <strong> ${property.rooms} </strong>
          </div>

          <div class="bg-white rounded-xl p-4 border border-custom-7/50">
            <p class="text-custom-4 text-sm">پارکینگ</p>

            <strong> ${property.parking} </strong>
          </div>

          <div class="bg-white rounded-xl p-4 border border-custom-7/50">
            <p class="text-custom-4 text-sm">قیمت هر متر</p>

            <strong> ${property.meterPrice} </strong>
          </div>
        </div>

        <div class="border-t border-t-custom-7/50 mt-8 pt-5">
          <p class="text-custom-4">قیمت کل</p>

          <h2 class="text-2xl font-IRANYekanBold text-blue-950">
            ${property.totalPrice}

            <span class="text-base"> تومان </span>
          </h2>
        </div>
      </div>
    </div>

    <div class="mt-10 bg-custom-9 border rounded-2xl p-6">
      <h2 class="text-xl font-bold text-blue-950 mb-4">توضیحات ملک</h2>

      <p class="leading-8 text-zinc-600 text-justify">${property.description || "این ملک دارای امکانات مناسب، موقعیت مکانی مطلوب و شرایط ایده‌آل برای خرید یا اجاره می‌باشد. برای دریافت اطلاعات بیشتر با مشاورین ما تماس بگیرید."}</p>
    </div>

    `;
} else {
  propertyContainer.innerHTML = `

    <div class="text-center py-20">ملک مورد نظر پیدا نشد</div>


`;
}

function changeImage(image) {
  document.querySelector("#main-image").src = `../images/adsimages/${image}`;
}
