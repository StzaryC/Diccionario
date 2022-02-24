// const words = fetch('dataWords.json')
//   .then(response => response.json())
//   .then(data => data.forEach(element => {
//       let diccionario = document.querySelector("#diccionario")
//       diccionario.innerHTML+=`
//       <h2 class="word">${element.primerNombre}</h2> <br>
//       <p class="significado">${element.Apellido}</p>
//       `
//     }))

let app = new Vue({
    el: '#app',
    data: {
        title: "Diccionario Regio - Chilango",
        palabras: [
            {Word:"Azorrillar",  Meaning:"achicar, apocar, amedrentar. “No dejes que ese bato te azorrille”."},
            {Word:"Abanico", Meaning: "ventilador"},
            {Word:"Bañarsela",  Meaning: "exagerar, pasarse de lanza: “¡te la bañaste haciendo tanta tarea!”"},
            {Word:"Barra",  Meaning :"mentira, excusa para no hacer algo."},
            {Word:"Vato",  Meaning :"Chavo o joven. En la Academia Mexicana de la Lengua se muestra el ejemplo “un bato de 20 años”. Sin embargo, algunos creen que proviene de “chivato”, que tiene diferentes significados, desde aprendiz hasta soplón. Por lo tanto no es raro encontrarlo escrito de ambas maneras."},
            {Word: "Bordo", Meaning: "tope, reductor de velocidad hecho de cemento. No confundir con boyas, que son las semiesfera metálicas amarillas que tienen el mismo fin." },
            {Word: "Chiflado", Meaning: "mimado, consentido. En el centro del país “chiflado” se usa para expresar que alguien está loco, no confundir."},
            {Word: "Chisqueado", Meaning: "loco"},
            {Word: "Chopo", Meaning: "helado. Allá no pasa el camioncito de los helados, sino el de los chopos."},
            {Word: "Clima", Meaning: "aire acondicionado, indispensable para la vida regia y sus calores pasados de lanza."},
            {Word: "Con-madre", Meaning: "chido, chingón."},
            {Word: "Conchitas", Meaning: "frituras"},
            {Word: "Cuero", Meaning: "Lindo. “Mi novio me regaló rosas porque cumplimos un mes, es un cuero”"},
            {Word: "Dar puche", Meaning: "empujar algo: “dale puche al disco para que jale”."},
            {Word: "De agua", Meaning: "muy fácil."},
            {Word: "Feria", Meaning: "cambio, moneditas, morralla. “Le di uno de a 100 y me devolvieron pura feria”."},
            {Word: "Forro", Meaning: "físicamente atractivo, ya sea hombre o mujer."},
            {Word: "Gorro", Meaning: "molesto, engorroso, fastidioso. “Esa morra me pone mucho gorro”."},
            {Word: "Huerco", Meaning: "niño, chamaco."},
            {Word: "Incaíble", Meaning: "broche para sujetar el cabello. Pasador."},
            {Word: "Jalar", Meaning: "funcionar. “Mi troca ya no jala”."},
            {Word: "Jale", Meaning: "Trabajo. “Hoy no salgo con ustedes, tengo mucho jale”."},
            {Word: "Legajo", Meaning: "carpeta o folder para guardar documentos."},
            {Word: "Lonche", Meaning: "Sándwich"},
            {Word: "Peinar", Meaning: "delatar, acusar, “echar de cabeza”."},
            {Word: "Perrear", Meaning: "faltar a clases, irse de pinta.“teníamos clases pero nos la perreamos”."},
            {Word: "Pisto", Meaning: "chupe, bebida embriagante."},
            {Word: "Pozo", Meaning: "agujero, aun cuando no tenga agua. “Ese huerco tiene la cara llena de pozos”."},
            {Word: "Pulga", Meaning: "tianguis"},
            {Word: "Rebane", Meaning: "divertido, gracioso, chistoso."},
            {Word: "Raza", Meaning: "banda, grupo de cuates."},
            {Word: "Sabalito", Meaning: "congelada, hielo de sabores en bolsita."},
            {Word: "Sordear", Meaning: "no hacer caso. “Deja que ese bato siga hablando, tú sordéate”."},
            {Word: "Troca", Meaning: "camioneta"},
            {Word: "Vulca", Meaning: " vulcanizadora, lugar para arreglar las llantas, generalmente adornado con calendarios de morras encueradas."},
            {Word: "Yonke", Meaning: "deshuesadero"},
            {Word: "Yuki", Meaning: "raspado. Aunque si pides un yuki de anís, el hermoso albur se pierde en la traducción."},
        ],
    },
    methods:{
        showWord(){
            let barraBusqueda = document.getElementById("barraBusqueda").value.toLowerCase()
            let palabra = document.querySelectorAll(".word")
            palabra.forEach(el => {
                if (el.innerText.toLowerCase() === barraBusqueda) {      
                    console.log(el)
                    el.scrollIntoView({block: "start", behavior: "smooth"})
                }
            })
        }
    }   
})
