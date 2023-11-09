(function() {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Clear the current page content
          document.body.innerHTML = '';
  
          // Create a wrapper container with a polished gradient background
          var wrapper = document.createElement('div');
          wrapper.style.background = 'linear-gradient(to right, #ff43b4a0, #f40e3098)'; // Set the gradient here
          wrapper.style.height = '100vh'; // Fill the entire screen
          wrapper.style.display = 'flex';
          wrapper.style.alignItems = 'center';
          wrapper.style.justifyContent = 'center';
  
          // Create a thank-you container
          var thankYouDiv = document.createElement('div');
          thankYouDiv.classList.add('thank-you-container');
  
          // Create a header with the thank-you message
          var header = document.createElement('h2');
          header.innerHTML = '<h2>Thank you for your message!</h2>';
          thankYouDiv.appendChild(header);
  
          // Add a subheading
          var subheading = document.createElement('h2');
          subheading.textContent = 'We will get back to you as soon as possible.';
          thankYouDiv.appendChild(subheading);

          var backButton = document.createElement('button');
        backButton.textContent = 'Back to Home';
        backButton.classList.add('fbutton');
        backButton.addEventListener('click', function() {
            window.location.href = 'index.html'; // Change the URL as needed
        });
        thankYouDiv.appendChild(backButton);
  
          // Append the thank-you container to the wrapper
          wrapper.appendChild(thankYouDiv);
  
          // Append the wrapper to the body
          document.body.appendChild(wrapper);
      }
  };
  
  
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
  
  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();