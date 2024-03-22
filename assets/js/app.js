const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//se corrige el selector
const $b = document.querySelector('.blog');//se corrige el selector de clase
const $l = document.querySelector('.location');//se identifica que no existe tal elemento en el archivo HTML
console.log($n,$b,$l);//Se hace uso de un console.log() para ver el funcionamiento de las variables
async function displayUser(username) {//Se agrega la palabra async
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data =await response.json(); //Se agrega la respuesta de la promesa en response
   console.log(data);
    //para las siguientes lines se cambian las comillas simples por backticks
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`; 
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // se corrige el nombre de la variable n a $n
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError); 
