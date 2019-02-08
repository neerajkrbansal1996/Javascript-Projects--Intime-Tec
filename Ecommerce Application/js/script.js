var objPeople = [
  {
    username : "neeraj",
    password : 'bansal'
  },
  {
    username : "rounak",
    password : "bansal"
  }
]

function loginFunction() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  for(i=0; i<objPeople.length; i++){
    if(username == objPeople[i].username && password == objPeople[i].password){
      console.log("User Logged In");
      sessionStorage.setItem("username", objPeople[i].username);
      toggleUser();
      return;
    }
  }
  console.log("Incorrect Username and password");
}


function toggleUser(){
  // console.log("sessionStorage length : " + sessionStorage.length);
  if(sessionStorage.length > 0){
    var loggedUserName = document.getElementById("loggedUserName");
    loggedUserName.innerHTML = "Welcome " + sessionStorage.getItem("username");
  }else{
    sessionStorage.removeItem("username");
  }

  updateUI();
}

function updateUI(){
  var loginPage = document.getElementById('loginPage');
  var loggedInPage = document.getElementById('loggedInPage');
  var footer = document.getElementById('footer');

  if (loginPage.style.display === "none") {
    loginPage.style.display = "block";
  } else {
    loginPage.style.display = "none";
  }

  if (loggedInPage.style.display === "none") {
    loggedInPage.style.display = "block";
  } else {
    loggedInPage.style.display = "none";
  }

  if (footer.style.display === "none") {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
}

function logoutFunction(){
  sessionStorage.removeItem("username");
  toggleUser();
}


function Product(isbn, title, img, subtitle, author, published, publisher, pages, description, website){
  var isbn = isbn;
  var title = title || "";
  var img = img || "";
  var subtitle = subtitle || "";
  var author = author || "";
  var published = published || "";
  var publisher = publisher || "";
  var pages = pages || "";
  var description = description || "";
  var website = website || "";

  this.getProductId = function(){
    return isbn;
  }

  this.getProductTitle = function(){
    return title;
  }

  this.getProductDescription = function(){
    return description;
  }

  this.getProductAuthor = function(){
    return author;
  }

  this.getProductPublisher = function(){
    return publisher;
  }

  this.getProductPublished = function(){
    return published;
  }

  this.getProductPages = function(){
    return pages;
  }
}

function loadDoc(url, pageNo, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url+pageNo, true);
  xhttp.send();
}
function getProductList(xhttp) {
 
  var result = JSON.parse(xhttp.responseText);
  addProductCards(result, loadProductData);

}

function addProductCards(result , cFunction){

  var size = result.length;
  var mainDiv = document.getElementById('productsList');
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }

  for(let i=0;i<size;i++){

    var div = document.createElement('div');
    div.className = 'product-card';
    div.dataset.category = result[i].publisher + "," + getPageRange(result[i].pages);
    var div2 = document.createElement('div');
    div2.className = 'card';
    var img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = 'http://placehold.it/500x325';
    var div3 = document.createElement('div');
    div3.className = 'card-body';
    var h5 = document.createElement('h5');
    h5.className = 'card-title';
    var div4 = document.createElement('div');
    div4.className = 'card-footer';
    var btn = document.createElement('BUTTON');
    var t = document.createTextNode("Find Our More!");
    btn.id = 'productBtn'
    btn.appendChild(t); 
    btn.className = 'btn btn-primary';

    div.appendChild(div2);
    div2.appendChild(img);
    div2.appendChild(div3);
    div3.appendChild(h5);
    div2.appendChild(div4);
    div4.appendChild(btn);

    mainDiv.appendChild(div);
  }

  cFunction(result, loadFilters);
 
}

function getPageRange(pageNo){
          let countFrom = 100 * Math.floor(pageNo / 100);
          let countTo = 100 * Math.ceil(pageNo / 100);
          console.log(countFrom + "-" + countTo);
          return (countFrom + "-" + countTo);
};

function loadProductData(result, cFunction){
  var cards = document.querySelectorAll(".card .card-title");
  var btns = document.querySelectorAll(".card .btn");
  var img = document.querySelectorAll(".card .card-img-top");
  var products = new Array;

  console.log(result);
 
  result.forEach(function(data, i){
        cards[i].innerHTML = data.title;
        products.push(new Product(data.isbn, data.title, data.img, data.subtitle, data.author, data.published, data.publisher, data.pages, data.description, data.website));
        btns[i].addEventListener('click', function(event) {
             showProductPage(products[i]);
        });
  });
  
  console.log(products);

  cFunction(products, initializeFilters);  
}

function showProductPage(product){
    toggleElements();
    console.log(product.getProductTitle());
    var title = document.getElementById('product-title');
    var description = document.getElementById('product-description');
    var author = document.getElementById('product-author');
    var publisher = document.getElementById('product-publisher');
    var published = document.getElementById('product-published');

    title.innerHTML = product.getProductTitle();
    description.innerHTML = product.getProductDescription();
    author.innerHTML = product.getProductAuthor();
    publisher.innerHTML = product.getProductPublisher();
    published.innerHTML = product.getProductPublished();

}

function toggleElements() {
  var jumbotron = document.getElementById("jumbotron");
  var mainPage = document.getElementById("mainPage");
  var productPage = document.getElementById("productPage");

  if (jumbotron.style.display === "none") {
    jumbotron.style.display = "block";
  } else {
    jumbotron.style.display = "none";
  }

  if (mainPage.style.display === "none") {
    mainPage.style.display = "block";
  } else {
    mainPage.style.display = "none";
  }

  if (productPage.style.display === "none") {
    productPage.style.display = "block";
  } else {
    productPage.style.display = "none";
  }
}


var initializeProducts = function initializeProducts(pageNo){
  loadDoc("https://my-json-server.typicode.com/neerajkrbansal1996/JsonData/products", pageNo , getProductList);
};

initializeProducts(1);



var loadFilters = function(products, cFunction){
  // console.log("Load Filters Called")
  /** Filter Based On Pages & Publishers **/
  getFilteredPages(products).then(function(pageRange){
    addCheckBoxes(pageRange, 'pages-filter', 'pages');
    return getFilteredPublishers(products);
  }).then(function(publishers){
    addCheckBoxes(publishers, 'author-filter', 'publishers');
    return cFunction();
  });

  /** Filter Based On Publisher **/
  // getFilteredPublishers(products).then(function(publishers){
  //   console.log("Get Filtered Publishers");
  //   addCheckBoxes(publishers, 'author-filter');
  // });

  // cFunction();

}

var getFilteredPublishers = function(products){
    return new Promise(function(resolve, reject){
        var publishers = new Array;

        products.forEach(function(data){
          publishers.push(data.getProductPublisher());
        });

        publishers = publishers.filter((x, i, a) => a.indexOf(x) == i);
        resolve(publishers);
  });
};

var getFilteredPages = function(products){
      return new Promise(function(resolve, reject){
          let maxPages = 0;
          let minPages = Infinity;
          let breakLimit = 100;
          products.forEach(function(data){
              // console.log(data.getProductPages());    
            if(data.getProductPages() > maxPages){
                 maxPages = data.getProductPages();
            }
            if(data.getProductPages() < minPages){
                minPages = data.getProductPages();
            }
          });

          let countFrom = 100 * Math.floor(minPages / 100);;
          let countTo = 100 * Math.ceil(maxPages / 100);;

          console.log("countFrom : "+countFrom);
          console.log("countTo : "+countTo);

          let size = (countTo - countFrom) / 100;

          var pageRange = new Array;

          for(let i=0; i<size; i++){
              pageRange.push(countFrom.toString() +"-"+ (countFrom+breakLimit).toString());
              countFrom += breakLimit;
          }

          resolve(pageRange);
          console.log("Max Pages : " + maxPages );
          console.log("Min Pages : " + minPages);
      });
}

function addCheckBoxes(publishers, element, checkboxName){

  var size = publishers.length;
  var mainDiv = document.getElementById(element);
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }

  for(let i=0;i<size;i++){
    
    var div = document.createElement('div');
    div.className = 'checkbox';
    var label = document.createElement('label');
    // label.innerHTML = publishers[i];
    var input = document.createElement('input');
    input.type = 'checkbox'
    input.value = publishers[i];
    input.name = checkboxName;
    var span = document.createElement('span');
    span.innerHTML = publishers[i];

    div.appendChild(label);
    label.appendChild(input);
    label.appendChild(span);
    mainDiv.appendChild(div);
  }
}

var initializeFilters = function initializeFilters(){
  var $filterCheckboxes = $('input[type="checkbox"]');
  // console.log($filterCheckboxes);
  $filterCheckboxes.on('change', function() {
  // console.log("Changed");

  var selectedFilters = {};

  $filterCheckboxes.filter(':checked').each(function() {

    // console.log(this.value);

    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }

    selectedFilters[this.name].push(this.value);

  });


  // create a collection containing all of the filterable elements
  var $filteredResults = $('.product-card');

  // loop over the selected filter name -> (array) values pairs
  $.each(selectedFilters, function(name, filterValues) {
    // filter each .flower element
    $filteredResults = $filteredResults.filter(function() {

      var matched = false,
      currentFilterValues = $(this).data('category').split(',');

      // loop over each category value in the current .flower's data-category
      $.each(currentFilterValues, function(_, currentFilterValue) {

        // if the current category exists in the selected filters array
        // set matched to true, and stop looping. as we're ORing in each
        // set of filters, we only need to match once

        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });

      // if matched is true the current .flower element is returned
      return matched;

    });
  });

  console.log("Filtered Results : " + $filteredResults.length);


  $('.product-card').hide().filter($filteredResults).show();

});
};

(function checkUser(){
  if(sessionStorage.getItem('username') != undefined){
    toggleUser();
  }
})();