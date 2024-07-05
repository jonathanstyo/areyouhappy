const yesMessages = [
    "Bagus, Keceriaan itu harus disebarkan",
    "Luar biasa! Tetaplah menyebarkan kebahagiaan",
    "Senang mendengarnya! Teruskan menyebar senyuman",
    "Kebahagiaanmu menular, teruskan!",
    "Hebat! Semangat positifmu bisa menginspirasi banyak orang",
    "Bahagia adalah pilihan yang tepat",
    "Kegembiraanmu adalah inspirasi bagi banyak orang",
    "Teruslah menyebarkan energi positif",
    "Kebahagiaan adalah kunci kehidupan yang sukses",
    "Tetaplah bahagia dan sebarkan kebaikan",
    "Keceriaanmu sangat berharga",
    "Senang melihatmu bahagia! Pertahankan itu",
    "Kebahagiaanmu adalah kekuatanmu",
    "Berbagi kebahagiaan itu indah",
    "Kebahagiaanmu adalah inspirasi bagi kami semua",
    "Semoga kebahagiaanmu selalu berlimpah",
    "Kebahagiaan adalah harta yang paling berharga",
    "Selamat atas kebahagiaanmu! Bagikan kepada dunia",
    "Kebahagiaan adalah pilihan yang bijak",
    "Teruslah menjadi sumber keceriaan"
];

const noMessages = [
    "Jangan khawatir, setiap hari adalah kesempatan baru untuk menjadi lebih baik. - Dalai Lama",
    "Ingat, kebahagiaan datang dari dalam diri kita sendiri",
    "Tidak apa-apa merasa sedih kadang-kadang, esok hari akan lebih baik",
    "Semua akan baik-baik saja, percayalah",
    "Setiap hari adalah awal yang baru",
    "Kamu tidak sendirian, semua orang punya hari-hari buruk",
    "Kegelapan tidak akan bertahan selamanya, ada cahaya di ujung sana",
    "Kamu kuat, dan kamu bisa melewati ini",
    "Setiap tantangan adalah kesempatan untuk tumbuh",
    "Kamu berharga, ingat itu selalu",
    "Jangan menyerah, kebahagiaan akan datang",
    "Kamu lebih kuat dari yang kamu pikirkan",
    "Semangat! Hari yang lebih baik sedang menantimu",
    "Kamu layak untuk bahagia",
    "Setiap masalah pasti ada jalan keluarnya",
    "Kamu mampu melewati semua ini",
    "Ingat, kamu tidak sendirian",
    "Kamu punya kekuatan untuk mengubah hari ini menjadi lebih baik",
    "Semua akan baik-baik saja, percayalah",
    "Setiap hari adalah kesempatan baru untuk memulai lagi"
];

const randomQuotes = [
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Happiness is the secret to all beauty. There is no beauty without happiness. - Christian Dior",
    "Happiness is a direction, not a place. - Sydney J. Harris",
    "Happiness is a state of mind. It's just according to the way you look at things. - Walt Disney",
    "The only thing we have to fear is fear itself, - Franklin D. Roosevelt",
    "I have a dream, - Martin Luther King Jr.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends, - Martin Luther King Jr.",
    "To be, or not to be, that is the question, - William Shakespeare",
    "The only thing necessary for the triumph of evil is for good men to do nothing, - Edmund Burke",
    "That which does not kill us makes us stronger, - Friedrich Nietzsche",
    "I think, therefore I am, - René Descartes",
    "The unexamined life is not worth living, - Socrates",
    "Be the change that you wish to see in the world, - Mahatma Gandhi",
    "In three words I can sum up everything I've learned about life: it goes on, - Robert Frost",
];

const jokesReceh = [
    "Huruf apa yang paling kedinginan, Pak?\n Huruf B. Karena berada di tengah-tengah AC.",
    "Buah, buah apa yang paling receh?\n Buah ha ha ha ha ha.",
    "Telor apa yang sangar?\n Telor asin, soalnya ada tatonya.",
    "Hewan apa yang hobi telat ke sekolah?\n Kaki seribu. Soalnya kelamaan pakai sepatunya.",
    "Hewan apa yang cuma terdiri dari dua huruf?\n U dan G (udang)",
    "Gendang apa yang nggak bisa dipukul?\n Gendang telinga, Pak.",
    "Kalau ditutup kelihatan, tapi kalau dibuka malah nggak ada. Apa hayo?\n Pintu rel kereta api.",
    "Buah apa yang pernah menjajah Indonesia?\n Terong Belanda.",
    "Apa bedanya sepatu sama jengkol?\n Kalau sepatu disemir, kalau jengkol disemur.",
    "Kipas apa yang ditunggu-tunggu cewek?\n Kipastian untuk dilamar.",
    "Ayam apa yang nyebelin?\n Ayamnya sudah habis, nasinya masih banyak.",
    "Apa beda antara semut dan orang?\n Orang bisa kesemutan, tetapi semut nggak bisa keorangan.",
    "Kalau hitam dibilang bersih, kalau putih dibilang kotor?\n Papan tulis.",
    "Kuman apa yang paling bersih?\n Kumandi pakai sabun.",
    "Sepeda apa yang tidak bisa dicat?\n Sepeda hilang.",
    "Tahu nggak kenapa donat tengahnya bolong?\n Karena yang utuh cinta ayah ke bunda.",
    "Uang 100 ribu kalau dilempar jadi apa hayo?\n Jadi rebutan, Pak!",
    "Pocong apa yang paling jadi favorit ibu-ibu?\n Pocongan harga, Pak! Sudah pasti itu!",
    "Kota apa yang banyak bapak-bapaknya?\n Purwodaddy.",
    "Kenapa superman ada huruf S di bajunya?\n Karena kalau pakai M atau XL jadi kegedean.",
    "Monyet apa yang senang maju mundur?\n Monyet-trika baju.",
    "Sabun, sabun apa yang paling genit?\n Sabun colek, dong.",
    "Ikan apa yang matanya sangat banyak?\n Ikan teri satu kilo.",
    "Binatang apa yang paling panjang?\n Ular ngantre beras.",
    "Apa persamaan KTP dan telor asin?\n Sama-sama dicap stempel.",
    "Suku apa yang banyak berkeliaran di mal?\n Suku-riti.",
    "Kalau ayam berkokok, berarti harimau?\n Hari mau pagi.",
    "Gajah apa yang paling baik hati?\n Gajahat.",
    "Hewan apa yang ternyata bersaudara?\n Katak beradik.",
    "Hewan apa yang kalau diinjek nggak marah?\n Kera mik.",
    "Bundaran HI kalau diputerin dua kali jadi apa, Pak?\n HIHI.",
    "Hantu apa yang bisa dilihat setiap hari, Pak?\n Burung hantu.",
    "Apa yang kalau dipotong malah semakin tinggi?\n Celana.",
    "Lele, lele apa yang bisa terbang, Pak?\n Lelelawar.",
    "Ditusuk bukan sate, dijaring bukan ikan?\n Konde.",
    "Orang apa yang berenang tapi rambutnya tak pernah basah?\n Orang botak.",
    "Buah apa yang nggak segar pak?\n Buah alpucat.",
    "Hewan apa yang namanya satu huruf?\n G ajah.",
    "Hewan apa yang paling hening?\n Semute.",
    "Kutu, kutu apa yang menakutkan?\n Kutukan.",
    "Sayur apa yang pintar nyanyi?\n Kolplay.",
    "Kucing apa yang kuno?\n Kucinggalan jaman.",
    "Apa yang jauh di mata dekat di hati?\n Usus.",
    "Jus apa yang turun dari langit?\n Justru itu aku tidak tahu hehe.",
    "Hewan apa yang deket sama teman-temannya?\n A crab.",
    "Pak, tahu nggak kenapa kucing nggak di penjara pas jadi maling?\n Soalnya kucing ga wrong.",
    "Gerakan apa yang paling susah dilakuin?\n Move on.",
    "Sayur apa yang romantis?\n Toge-ther with you.",
    "Kalau pasien yang terkena gejala rindu dibawakan kemana, Dok?\n Ke ruangan i see you.",
    "Ikan apa yang suka berhenti?\n Ikan pause."
];

const gifs = [
    "https://media2.giphy.com/media/yFQ0ywscgobJK/giphy.gif?cid=6c09b952jsxzqyn5drcw9wi63gujyxslb69zp7gvwsc9a9ld&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/lJNoBCvQYp7nq/giphy.gif?cid=6c09b952yd5bsnndvk7t0y098jmv1l0ggn78ooslmmokt5ct&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/uELtzAhhqpRKg/giphy.gif?cid=6c09b9520qrx49r42xppp8q606oqldb959ksz8ln1eh3j6zd&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/co9IXVaipZ0Yg/giphy.gif?cid=6c09b952owo7m9zuowcwo9qfzk9db64fnyft3gufqc9n0k4w&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/giphy.gif?cid=6c09b9526g1e7ex5slgfph98xo8jbw6sezkvu574fqwjsv4r&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/sgmVqNXFMgDjDV1FhY/giphy.gif?cid=6c09b9524lh6ir55nw3f2gznb63ztvbtzoubihotaipqdczi&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/3NtY188QaxDdC/giphy.gif?cid=6c09b952ju9lgmf2x8fy351q212nhsrruyo0h1x1niq5vg09&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
];

const gifDescriptions = [
    "POV: Abis makan siang tapi belum ngopi",
    "POV: Dikejar deadline",
    "POV: Jam 8 pagi udah di kantor tapi belum dandan",
    "POV: Nungguin jam makan siang",
    "POV: Lagi bengong tiba-tiba diajak meeting",
    "POV: Jam 17.00 WIB",
    "POV: Tanggal gajian"
];

document.getElementById('yesButton').addEventListener('click', function() {
    showMessage(yesMessages[Math.floor(Math.random() * yesMessages.length)]);
});

document.getElementById('noButton').addEventListener('click', function() {
    showMessage(noMessages[Math.floor(Math.random() * noMessages.length)]);
});

document.getElementById('quoteButton').addEventListener('click', function() {
    showMessage(randomQuotes[Math.floor(Math.random() * randomQuotes.length)]);
});

document.getElementById('jokesButton').addEventListener('click', function() {
    showMessage(jokesReceh[Math.floor(Math.random() * jokesReceh.length)]);
});

document.getElementById('gifButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const randomGif = gifs[randomIndex];
    const randomDescription = gifDescriptions[randomIndex];
    showGif(randomGif, randomDescription);
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

function showMessage(message) {
    document.getElementById('message').innerText = message;
    document.getElementById('popup').style.display = 'flex';
}

function showGif(gifUrl, description) {
    const gifElement = `<img id="gif" src="${gifUrl}" alt="Gif Lucu"><p>${description}</p>`;
    document.getElementById('message').innerHTML = gifElement;
    document.getElementById('popup').style.display = 'flex';
}
