 // sends a request to the server to pull all of the host's parties
async function getPartiesByHost(id){
    const url = new URL('/api/parties/get-parties-by-host', 'http://localhost:8080');
    url.searchParams.append('host_id', id);
  
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        } 
    };
  
  
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        updateMyEvents(data); // update dashboard
    })
    .catch(error => {
        console.error(error);
    });
   
}

async function updateMyEvents(arr){

    const div = document.getElementById('scrollable-events-data');
  
    arr.forEach((party) => {
        let customElement = document.createElement('party-component');
        customElement.setAttribute("title", party.Name);
        customElement.setAttribute("description", party.Description);

        const date = new Date(party.StartDate);
        const month = date.toLocaleDateString('en-US', { month: 'short' });
        const day = date.toLocaleDateString('en-US', { day: 'numeric' });
        const year = date.toLocaleDateString('en-US', { year: 'numeric' });
        customElement.setAttribute("startDate", `${month} / ${day} / ${year}`);

        customElement.setAttribute("location", `${party.AddressLine1} \n${party.City}, ${party.State}`);

        div.appendChild(customElement); // append party element to event list
  });
}
 
// sends a request to the server to pull all of the host's information
async function getHostInformation(id){
    const url = new URL('/api/users/get-user-by-id', 'http://localhost:8080');
    url.searchParams.append('user_id', id);
  
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        } 
    };
  
  
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        updateHostInformation(data[0]);
        // process the response data
        // return data;
    })
    .catch(error => {
        console.error(error);
        // handle the error
        // return data.json();
    });
   
}

async function updateHostInformation(json){

    const name = document.getElementById('hostName');
    const desc = document.getElementById('hostDesc');
    const joined = document.getElementById('joined');

    name.innerHTML = `Name: ${json.name}`;
    desc.textContent = `Description: ${json.description}`;

    const date = new Date(json.registered);
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.toLocaleDateString('en-US', { day: 'numeric' });
    const year = date.toLocaleDateString('en-US', { year: 'numeric' });
    joined.textContent = `Joined: ${month} / ${day} / ${year}`;

}


// on page load, update events list
const h = "656d0bc954b790022840f8f2";
getPartiesByHost(h);
getHostInformation(h);