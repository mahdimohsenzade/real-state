const params = new URLSearchParams(window.location.search);
const blogId = Number(params.get("id"));
const blog = blogs.find((item) => item.id === blogId);
const container = document.querySelector("#single-blog-container");
if (blog) {
  container.innerHTML = `

<article class="bg-custom-9 border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
    <img src="../images/${blog.image}" alt="${blog.title}" class="w-full aspect-[16/9] object-cover" />

    <div class="p-6 md:p-10">
        <div class="text-sm text-zinc-500 mb-5">${blog.date}</div>

        <h1 class="text-2xl md:text-4xl font-bold text-blue-950 leading-relaxed">${blog.title}</h1>

        <p class="mt-5 text-zinc-600 leading-8">${blog.text}</p>

        <div class="border-t border-zinc-200 mt-8 pt-8">
            <p class="text-zinc-700 leading-9 whitespace-pre-line">${blog.content}</p>
        </div>
    </div>
</article>

`;
} else {
  container.innerHTML = `

<div class="text-center py-20 text-zinc-500">مقاله پیدا نشد</div>

`;
}
