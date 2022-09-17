const apiCall = new Promise((resolve, reject) => {
  /* console.log('dentro da promise'); */

  setTimeout(() => {
    resolve('Sucesso!');

/*     reject('Erro!')
 */  }, 2000);
})
/* 
apiCall.then((result) => console.log(result)).catch(err => console.log(err));

console.log('Depois da promise...') */

 async function run() {
  try {
    const resposta = await apiCall;
    console.log(resposta);
    console.log('Depois da promise...')

  } catch(err) {
    console.log(err);
  }
}

run();
