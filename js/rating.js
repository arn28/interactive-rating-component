(function () {
  //Object with Properties
  var propRating = {
    ratingElements: document.getElementsByClassName('ratingOptions')[0].children,
    ratingValue : null,
    submite : document.querySelector('input[type="submit"]'),
    ratingState:document.getElementsByClassName('ratingState')[0],
    thankyouState:document.getElementsByClassName('thankyouState')[0],
    messageContainer: document.getElementsByClassName('confirmation')[0],
    isSelected: false
  }

  //Object with Methods
  var metRating = {
    start: function () {
      for (let i = 0; i < propRating.ratingElements.length; i++) {
        propRating.ratingElements[i].addEventListener('click', metRating.selectRating);        
      }
      propRating.submite.addEventListener('click', metRating.validate)
      propRating.submite.addEventListener('click', metRating.confirmMessage)
    },

    selectRating: function () {
      if (this.className == ''){
        for (let i = 0; i < propRating.ratingElements.length; i++) {
          propRating.ratingElements[i].className = '';        
        }
        this.className = 'active';
        propRating.isSelected = true;
        propRating.ratingValue = this.innerHTML;
      }       
    },

    validate: function (e) {
      if (propRating.isSelected) {
        propRating.ratingState.style.display = 'none';
        propRating.thankyouState.style.display = 'block';
      }else{
        e.preventDefault();
      }
    },

    confirmMessage: function () {
      propRating.messageContainer.innerHTML = '<p>You selected '+ propRating.ratingValue +' out of 5</p>'      
    }
  }
  metRating.start();  
}())