let profUserName = document.getElementById("Prof-Username");
let profName = document.getElementById('Prof-Name');
let profEmail = document.getElementById("Prof-Email");

let profAStreet = document.getElementById("ProfA-street");
let profASuite = document.getElementById("ProfA-suite");
let profACity = document.getElementById("ProfA-city");
let profAZipcode = document.getElementById("ProfA-zipcode");

let profALat = document.getElementById("ProfA-lat");
let profALng = document.getElementById("ProfA-lng");

let profPhone = document.getElementById("Prof-Phone");
let profWebsite = document.getElementById("Prof-Website");

let profCName = document.getElementById("ProfC-name");
let profCCatchPhrase = document.getElementById("ProfC-catchPhrase");
let profCBs = document.getElementById("ProfC-bs");

export const MoreInfo = (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      const { name, username, email, address, phone, website, company } = data;
      const { street, suite, city, zipcode, geo } = address;
      const { lat, lng } = geo;

      profName.innerHTML = `Name: ${name}`;
      profUserName.innerHTML = `Username: ${username}`;
      profEmail.innerHTML = `Email: ${email}`;

      profAStreet.innerHTML = `Address: ${street}, ${suite}, ${city}`;
      profAZipcode.innerHTML = `Zipcode: ${zipcode}`;

      profALat.innerHTML = `Latitude: ${lat}`;
      profALng.innerHTML = `Longitude: ${lng}`;

      profPhone.innerHTML = `Phone: ${phone}`;
      profWebsite.innerHTML = `Website: ${website}`;

      profCName.innerHTML = `Company Name: ${company.name}`;
      profCCatchPhrase.innerHTML = `Catchphrase: ${company.catchPhrase}`;
      profCBs.innerHTML = `Business Strategy: ${company.bs}`;
    })
    .catch(error => {
      console.error('Error fetching Profile Info:', error);
    });
};
