let ResponseContainer = document.querySelector('.Response-Container');

export const UserProfile = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach( users =>{
        const { name, username, email, id } = users;
        console.log(name);

        let UFParent = document.createElement('div');
        UFParent.classList.add('UFParent');

        let UFImage = document.createElement('img');
        UFImage.src = "./images/user.jpg";
        let UFName = document.createElement('p');
        UFName.innerHTML =  name;
        let UFUsername = document.createElement('p');
        UFUsername.innerHTML = "Username: "+ username;
        let UFEmail = document.createElement('p');
        UFEmail.innerHTML = "Email: "+ email;
        let MoreInfoBtn = document.createElement('button');
        MoreInfoBtn.innerHTML = "More Info";

        UFImage.classList.add('UFImage');
        UFName.classList.add('UFName');
        UFUsername.classList.add('UFUsername');
        UFEmail.classList.add('UFEmail');
        MoreInfoBtn.classList.add('MoreInfoBtn');

        MoreInfoBtn.addEventListener('click', function(){
          window.location.href = `moreInfo.html?id=${id}`;
        })

        UFParent.append(UFImage, UFName, UFUsername, UFEmail, MoreInfoBtn);
        ResponseContainer.appendChild(UFParent);
      })

    })
    .catch(error => console.error('Error fetching user profile:', error));
};
