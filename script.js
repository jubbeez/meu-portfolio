const btn_eng_software = document.querySelector(".btn_eng_software");
const btn_psico = document.querySelector(".btn_psico");
const btn_alura = document.querySelector(".btn_alura");
const btn_gen = document.querySelector(".btn_gen");

btn_eng_software.addEventListener('click', ()=> {

    swal({
        title: "Conteúdo: ",
        text: "Banco de Dados, Design de Sistemas, Pré-Cálculo, Fundamentos de: (Desenvolvimento de Software, Infraestrutura de TI, Computação)."
    });
});

btn_psico.addEventListener('click', ()=> {

    swal({
        title: "Conteúdo: ",
        text: "Ética Profissional, Neurofisiologia, Diversidade Étnico-Cultural, Psicologia Social, Teorias da Personalidade, Família - Perspectivas Teóricas, Teorias de Aprendizagem, Sociologia, Bases Biológicas."
    });
});

btn_alura.addEventListener('click', ()=> {

    swal({
        title: "Conteúdo: ",
        text: "Flexbox, Layouts Responsivos, Manipulação de DOM, Programação Orientada a Objetos, CRUD."
    });
});

btn_gen.addEventListener('click', ()=> {

    swal({
        title: "Conteúdo: ",
        text: "Java, MySQL, Spring Framework, Testes Unitários, Git e GitHub, SCRUM, BootsTrap, Node.js, TypeScript."
    });
});


// ENVIO DE FORMULÁRIO
  
const linkCurriculo = document.querySelector('a[href="./Curriculo-Julia-Guarnieri.pdf"]');


linkCurriculo.addEventListener('click', (event) => {
  event.preventDefault();
  const url = event.target.href;
  const fileName = 'Curriculo.Julia.Guarnieri.pdf';
  downloadFile(url, fileName);
});

function downloadFile(url, fileName) {
  const element = document.createElement('a');
  element.setAttribute('href', url);
  element.setAttribute('download', fileName);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}


  
