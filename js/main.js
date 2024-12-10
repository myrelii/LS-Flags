import { flags } from './flags.js';

const flagsContainer = document.getElementById('flags-container');

flags.forEach(flag => {
 
  const flagWrapper = document.createElement('/div');
  flagWrapper.classList.add('flag-wrapper');

  
  const imgElement = document.createElement('img');
  imgElement.src = flag.imagem;
  imgElement.alt = flag.nome; 
  imgElement.id = flag.id;    

 
  const nameElement = document.createElement('/p');
  nameElement.textContent = flag.nome;

 
  flagWrapper.appendChild(imgElement);
  flagWrapper.appendChild(nameElement);

  
  flagsContainer.appendChild(flagWrapper);
});