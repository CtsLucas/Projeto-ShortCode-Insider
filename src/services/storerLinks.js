/* Buscar os Links Salvos */
export async function getLinksSave(key){
  const myLinks = await localStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}


/* Salvar Links no Storage */
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);


  /* Verificação de Links */
  const hasLink = linksStored.some( link => link.id === newLink.id )

  if(hasLink){
    console.log('Esse Link já Existe!');
    return;
  }

 

  /* Add Link */
  linksStored.push(newLink)
  await localStorage.setItem(key, JSON.stringify(linksStored))
  console.log("Link Salvo Com Sucesso!")
}
/* Deletear Links */
export function deleteLink(links, id){

  let myLinks = links.filter( item => {
    return( item.id !== id)
  })

  localStorage.setItem('@shortLink', JSON.stringify(myLinks))
  
  return myLinks

}