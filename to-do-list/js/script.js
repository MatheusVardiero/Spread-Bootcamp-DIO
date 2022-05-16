function adicionar() {
  
  const addToList = document.getElementById("tarefa").value; //Armazenando o valor do input na variavel addToList.

  if (addToList === "") { //Se o input estiver vazio, apresenta uma mensagem de alerta
    alert("Campo vazio, favor inserir um valor!");
  } else {
    let newCheckBox = document.createElement("input"); //Cria o input

    newCheckBox.setAttribute("type","checkbox"); //Edita o input para o tipo checkbox
    newCheckBox.setAttribute("id","check");

    let newListValue = document.createElement("li"); //Cria o item da lista
    newListValue.innerText = addToList; //Adiciona o valor do input text na lista

    document.getElementById("list").appendChild(newCheckBox); //Mostra o checkbox na lista
    document.getElementById("list").appendChild(newListValue); //Mostra o li na lista

    newListValue.style.listStyle = "none"; // Tira as marcaçoes da lista (bolinhas pretas)
    document.getElementById("tarefa").value = "";

  }
}