function add(){
  let texto_certo = document.querySelector('#certo-texto').value
  let texto_teste = document.querySelector('#teste-texto').value
  let resposta = document.querySelector('.resposta')

  let certo = texto_certo.trim().toLowerCase()
  let teste = texto_teste.trim().toLowerCase()

  if(certo == teste){
    resposta.innerText = 'Esta certo!'
  } else{
    resposta.innerText = 'Errado!'

      }
}
