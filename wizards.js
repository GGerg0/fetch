function fetching(id)
{
    fetch(`https://surveys-5jvt.onrender.com/api/wizards/`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(wizards => {
    console.log(wizards[id].name)
    display(wizards[id])
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}


function display(wizard)
{

    document.getElementById("list").style.display = "block"
    document.getElementById("name").textContent = "Név: " + wizard.name
    document.getElementById("id").textContent = "Azonosító: : " + wizard.id
    document.getElementById("house").textContent = "Ház: : " + wizard.house
    document.getElementById("boggart").textContent = "Mumus: : " + wizard.boggart
}

function search()
{
    id = document.getElementById("idInput").value
    fetching(id-1)
}