let FetchBtn = document.getElementById('Fetch-Btn');

FetchBtn.addEventListener('click', async function(){
  const { UserProfile } = await import('/js/fetchUserProfile.js');
  UserProfile();
})

