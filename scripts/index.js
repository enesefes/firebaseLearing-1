const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const acil = document.querySelectorAll('.acil');
const bosSayfa= document.querySelectorAll('.bos');
const  setupUI = (user) =>{
  if (user){
    // account info
    db.collection('users').doc(user.uid).get().then(doc =>{
      const html =`
          <div>Logged in as ${user.email}</div>
          <div>${doc.data().bio}</div>
          <div>${doc.data().name}</div>
          <div>${doc.data().color}</div>
        `;
        accountDetails.innerHTML=html;
        accountDetails.style.backgroundColor=`${doc.data().color}`
        
        

    })
    

    // toggele ui elemenet
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display='none');
    bosSayfa.forEach(item => item.style.display='none');
  }else{

    // hide account details

    //toggele ui element 
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display='block');
    bosSayfa.forEach(item => item.style.display='block');
  }
}

//setup guides

const setupGuides = (data)=>{

  if (data.length){

  
  let html ="";
  data.forEach(doc=>{
    const guide =doc.data();
    const li=`
    
    <div class="col s12 m3">
    
  
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="img/logo.png">
    </div>
    <div class="card-content">
    <div style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis; width:100%">
      <span class="card-title activator grey-text text-darken-4">${guide.title} | ${guide.category}</div><i class="material-icons right">more_vert</i></span>
    
      <div class="row">
      <div class="col">
      <span class="badge red">${guide.category}</span>
      </div>
      
      
      
      </div>
      
      
      
    </div>
    
    <div class="card-reveal">
      
      <span class="card-title grey-text text-darken-4">${guide.title} | ${guide.category}<i class="material-icons right">close</i></span>
      <p>${guide.content}</p> 

      
    </div>
  </div>
  </div>
  <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
  </div>
      
    `;
    html += li
  });

  guideList.innerHTML=html;
}else {
  guideList.innerHTML=``
}
}


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

    
    

    

  
  });
  function bas (){
      

    db.collection('guides').doc(doc.id).delete()
.then(function () { 
    console.log("Document successfully deleted!"); 
}).catch(
    function(error) { 
    console.error("Error removing document: ", error); 
});

    }
  
    (function($){
      $(function(){
    
        $('.sidenav').sidenav();
        $('.parallax').parallax();
    
      }); // end of document ready
    })(jQuery); // end of jQuery name space
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });