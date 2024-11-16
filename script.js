// let list = document.getEhttps://www.svgrepo.com/show/345221/three-dots.svglementById("band")

const band = [
    'Anywhere But Here',
    'The Bled',
    'Counterparts',
    'The Devil Wears Prada',
    'The Midway State',
    'Norma Jean',
    'Oh, Sleeper',
    'An Old Dog',
    'Pierce the Veil',
    'The Plot in You',
    'Say Anything',
    'A Skylit Drive',
    'We Came as Romans'
  ]
  


  for(let item of band)
  {
    let listItm = document.createElement("li")
    listItm.innerText = item
	      list.setAttribute("id", "bands")

    list.appendChild(listItm)
  }