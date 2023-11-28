function scanQRCode() {

  // get html objects: video and canvas
  // in order to use JSQR, a canvas object must be utilized for it to read off of
  const videoElement = document.getElementById('videoElement');
  const ticketNumber = document.getElementById('ticketNumber');
  const status = document.getElementById('status');


  // finds and sets up canvas related variables
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  // converts teh image into an ImageData object that JSQR can read
  context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  // check if a qr code is present
  // returns a boolean; true if a qr code is found
  const code = jsQR(imageData.data, imageData.width, imageData.height);
  
  if (code) {
      ticketNumber.innerText = 'TICKET NUMBER: ' + code.data;
      success = sendTicketUpdateRequest(code.data);
      status.innerText = "CONFIRMED";

      videoElement.style.border = '6px solid green';
    // Perform desired actions with the QR code data
  }else{
      videoElement.style.border = '6px solid red';

  }

  // use recursion to continuously check for a qr code
  requestAnimationFrame(scanQRCode);
}

// sends a request to the server to update the ticket to "attended"
// returns "success" or "fail" responses
function sendTicketUpdateRequest(id){
  const url = new URL('/api/scan-tickets/update-ticket', 'http://localhost:8080');
  url.searchParams.append('id', id);

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    } 
  };

  fetch(url, options)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // process the response data
    return "yes";
  })
  .catch(error => {
    console.error(error);
    // handle the error
    return "no";
  });
  

}

// sends a request to the server to generate a qr code, which will be inserted into the html object
// returns the url that is to be inserted into <img src="${url}" alt="QR Code">



// begins the scanning process
function scan(){
  const videoElement = document.getElementById('videoElement');
  const button = document.getElementById('scanButton');
  button.hidden = true;
  videoElement.hidden = false;

  scanQRCode();

}
