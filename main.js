/* const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parr = document.querySelector('.parr');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parr,
    pid,
    input
});

//manipular el html
h1.innerHTML = 'Modificacion del HTML <br> desde JS';
//obtener algun elemento del html
h1.getAttribute('class');
//agregar clase o algun elemento al html
h1.setAttribute('class', 'rojo');
//esta funciona especificamente con clases css
h1.classList.add('rojo');
//funcion para eliminar clases css
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde'); boolean si tiene esa propiedad

input.value = 'hola mundo';

const img = document.createElement('img');
img.setAttribute('src', 'https://www.latercera.com/resizer/ODARZ4P7eC9v_IrdTDf_Sst7q1E=/900x600/filters:focal(526x210:536x200)/cloudfront-us-east-1.images.arcpublishing.com/copesa/DSSECTVD4JDFXK74SPZA57X4ME.jpg');

pid.innerHTML = '';
pid.append(img); */
//----------------------------------------------------------------
const input = document.querySelector('#cl1');
const input2 = document.querySelector('#cl2');
const btn = document.querySelector('#btncalcular');
const result = document.querySelector('#result');
const formppal = document.querySelector('#formppal');

btn.addEventListener('click', btnOnClick);

function btnOnClick(event){
    let op = Number(input.value) + parseInt(input2.value);
    result.innerHTML = "Resultado: " + op;
}

