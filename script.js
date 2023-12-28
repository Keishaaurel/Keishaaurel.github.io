data = [{
    'img1': 'nagaga.jpg',
    'img2': 'loml.jpg',
    'title':'Web dan PUBG',
    'subtitle':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, non.',
    'desc':'Untuk project yang pertama adalah WEB saya pernah membuat sebuah web yang berisikan tentang biodata diri dan project yang kedua saya pernah memainkan geme PUBG bisa dibilang saya jago(diri sendiri) dan saya pernah menjadi top global '
}, {
    'img1': 'nagaga.jpg',
    'img2': 'loml.jpg',
    'title':'Capcut dan ChatGPT',
    'subtitle':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, non.',
    'desc':'Salah satu project ketiga saya adalah saya membuat vidio editing dan langsung dipamerkan di papan atas dan project keempat adalah saya pernah menyontek di ChatGPT'
}]

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src="`+element.img1+`" alt="">
        <img src="${element.img2}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <p>${element.desc}</p>
    </div>
    <button class="read-more">Read More</button>
</div>`
});