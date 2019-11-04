
// Define a new module for our app. The array holds the consoles of dependencies if any.
var app = angular.module("instantSearchUSU", ['ngSanitize']);

var cltr = app.controller('ControllerUSU', Controller4);
app.component('firstFloor', {
        templateUrl: 'assets/js/templates/usu-directory-template.html',
        controller: Controller4,
});
var cltr1 = app.controller('ControllerUSU1', Controller5);
var cltr2 = app.controller('ControllerUSU2', Controller6);
// Create the instant search filter

angular.module('instantSearchUSU')
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);

cltr.filter('searchForPlaces', function(){

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchForPlaces:searchStringUSU)

    return function(arr, searchStringUSU) {
        if(!searchStringUSU){
            return arr;
        }
        var result = [];
        var res = searchStringUSU.split(" ");
        var n = 0;
        res.forEach(function(str) {
            str = str.toLowerCase();

            // Using the forEach helper method to loop through the array
            angular.forEach(arr, function(item){
                var titleAndRoom = item.title + " " + item.html4;
                if(titleAndRoom.toLowerCase().indexOf(str) !== -1){
                    result.push(item);
                }
            });
        });
        return result;

    };
});

cltr1.filter('searchForPlaces1', function() {

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchForPlaces:searchStringUSU)

    return function(arr, searchStringUSU) {
        if(!searchStringUSU){
            return arr;
        }
        var result = [];
        var res = searchStringUSU.split(" ");
        var n = 0;
        res.forEach(function(str) {
            str = str.toLowerCase();

            // Using the forEach helper method to loop through the array
            angular.forEach(arr, function(item1){
              var titleAndRoom = item1.title + " " + item1.html4;
              if(titleAndRoom.toLowerCase().indexOf(str) !== -1){
                  result.push(item1);
              }
            });
        });
        return result;

    };
});

cltr2.filter('searchForPlaces2', function(){

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchForPlaces:searchStringUSU)

    return function(arr, searchStringUSU) {
      if(!searchStringUSU){
          return arr;
      }
      var result = [];
      var res = searchStringUSU.split(" ");
      var n = 0;
      res.forEach(function(str) {
          str = str.toLowerCase();

          // Using the forEach helper method to loop through the array
          angular.forEach(arr, function(item2){
            var titleAndRoom = item2.title + " " + item2.html4;
            if(titleAndRoom.toLowerCase().indexOf(str) !== -1){
                result.push(item2);
            }
          });
      });
      return result;

    };                       
});

var place_array = [
  {        
    title: "22 West Media – Magazine",
    html:  "1",
    html2: "<a href='#union-weekly' data-toggle='collapse' aria-expanded='false' aria-controls='union-weekly'>22 West Media – Magazine</a><div class='collapse container-fluid' id='union-weekly'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-112</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-4867</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Thu: 8AM - 6PM, Fri: 8AM - 2PM</small><small><strong>Website: </strong> <a href='https://22westmedia.com' target='_blank'>22 West Magazine</a></small></div></div></div>",
    html3: "<a href='#union-weekly' data-toggle='collapse' aria-expanded='false' aria-controls='union-weekly'><i class='fa fa-caret-down' aria-hidden='1'></i></a>",
    html4: "112",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "ASI Communications Video Productions",
    html:  "2",
    html2: "<a href='#ac-vp' data-toggle='collapse' aria-expanded='false' aria-controls='ac-vp'>ASI Communications Video Productions</a>"+
    "<div class='collapse container-fluid' id='ac-vp'>"+
    "<div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-111</small></div><div class='col-lg-6'><small><strong>Contact :</strong><br /> (562) 985-1321</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Thu: 8AM - 6PM, Fri: 8AM - 2PM</small><small><strong>Website: </strong><a href='../connect/asi-newsreel'>ASI Communications - Video Productions</a></small><br/><small><strong>Email: </strong><a href='mailto:asi-productions@csulb\.edu'>asi-productions@csulb\.edu</a></small></div></div></div>",
    html3: "<a href='#ac-vp' data-toggle='collapse' aria-expanded='false' aria-controls='ac-vp'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "111",
    floor: 1,
    extra: true,
    tag: ""
  },
  {        
    title: "Lactation room",
    html:  "3",
    html2: "Lactation room",
    html3: "",
    html4: "",
    floor: 1,
    extra: true,
    tag: ""
  },
  {        
    title: "Gender Inclusive Restroom",
    html:  "4",
    html2: "Gender Inclusive Restroom",
    html3: "",
    html4: "",
    floor: 1,
    extra: true,
    tag: ""
  },
  {
    title: "Beach Auditorium",
    html:  "5",
    html2: "Beach Auditorium",
    html3: "",
    html4: "",
    floor: 1,
    extra: true,
    tag: ""
  },    
  {        
    title: "22 West Media – Radio",
    html:  "6",
    html2: "<a href='#kbeach-radio' data-toggle='collapse' aria-expanded='false' aria-controls='kbeach-radio'>22 West Media – Radio</a><div class='collapse container-fluid' id='kbeach-radio'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-110</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-1624</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Thu: 8AM - 6PM, Fri: 8AM - 2PM</small><small><strong>Website: </strong> <a href='https://22westmedia.com' target='_blank'>22 West Radio</a></small></div></div></div>",
    html3: "<a href='#kbeach-radio' data-toggle='collapse' aria-expanded='false' aria-controls='kbeach-radio'><i class='fa fa-caret-down' aria-hidden='1'></i></a>",
    html4: "110",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "22 West Media - TV",
    html:  "7",
    html2: "<a href='#cbt-asip' data-toggle='collapse' aria-expanded='false' aria-controls='cbt-asip'>22 West Media - TV</a>"+
    "<div class='collapse container-fluid' id='cbt-asip'>"+
    "<div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-116</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-7021<br /></small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Thu: 8AM - 6PM, Fri: 8AM - 2PM</small><small><strong>Website: </strong><a href='https://22westmedia.com' target='_blank'>22 West Media</a></small></div></div></div>",
    html3: "<a href='#cbt-asip' data-toggle='collapse' aria-expanded='false' aria-controls='cbt-asip'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "116",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "Billards",
    html:  "8",
    html2: "Billards",
    html3: "",
    html4: "",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "Beach Pride Events",
    html:  "9",
    html2: "<a href='#beach-pride' data-toggle='collapse' aria-expanded='false' aria-controls='beach-pride'>Beach Pride Events</a><div class='collapse container-fluid' id='beach-pride'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-108</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-2535</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Fri: 9AM - 5PM</small><small><strong>Website: </strong><a href='../enjoy/beach-pride-center' target='_blank'>Beach Pride Center</a></small></div></div></div>",
    html3: "<a href='#beach-pride' data-toggle='collapse' aria-expanded='false' aria-controls='beach-pride'><i class='fa fa-caret-down' aria-hidden='1'></i></a>",
    html4: "108",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "Sticks Lounge",
    html:  "10",
    html2: "Sticks Lounge",
    html3: "",
    html4: "107",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "103 Lounge",
    html:  "11",
    html2: "103 Lounge",
    html3: "",
    html4: "103",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "Art Gallery &amp; Study Lounge",
    html:  "12",
    html2: "Art Gallery &amp; Study Lounge",
    html3: "",
    html4: "100",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "ATM (Bank of America and Chase)",
    html:  "13",
    html2: "ATM (Bank of America and Chase)",
    html3: "",
    html4: "",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "Bowling Lanes",
    html:  "14",
    html2: "Bowling Lanes",
    html3: "",
    html4: "",
    extra: true,
    floor: 1,
    tag: ""
  },
  {
    title: "Games Center Desk",
    html:  "15",
    html2: "<a href='#games-center' data-toggle='collapse' aria-expanded='false' aria-controls='games-center'>Games Center Desk</a><div class='collapse container-fluid' id='games-center'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />N/A</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-5201</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Thu: 9AM - 5:30PM, Fri: 9AM - 5PM</small><small><strong>Website: </strong><a href='../enjoy/games-center'>Games Center</a></small></div></div></div>",
    html3: "<a href='#games-center' data-toggle='collapse' aria-expanded='false' aria-controls='games-center'><i class='fa fa-caret-down' aria-hidden='1'></i></a>",
    html4: "",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "Vending Machines",
    html:  "16",
    html2: "Vending Machines",
    html3: "",
    html4: "",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "Swimming Pool",
    html:  "17",
    html2: "Swimming Pool",
    html3: "",
    html4: "",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "TV Lounge",
    html:  "18",
    html2: "TV Lounge",
    html3: "",
    html4: "",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "TV Lounge",
    html:  "19",
    html2: "TV Lounge",
    html3: "",
    html4: "",
    extra: true,
    floor: 1,
    tag: ""
  },
  {        
    title: "Table Tennis",
    html:  "20",
    html2: "Table Tennis",
    html3: "",
    html4: "",
    extra: true,
    floor: 1,
    tag: ""
  },  
  {        
    title: "Sunset Lounge",
    html:  "1",
    html2: "Sunset Lounge",
    html3: "",
    html4: "248",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Coffee Bean &amp; Tea Leaf",
    html:  "2",
    html2: "<a href='#coffee-bean' data-toggle='collapse' aria-expanded='false' aria-controls='coffee-bean'>Coffee Bean &amp; Tea Leaf</a><div class='collapse container-fluid' id='coffee-bean'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />N/A</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-3477</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><a href='https://asicsulb.org/food'>Vendor Hours Page</a></small></br><small><strong>Website: </strong><a target='_blank' href='http://www.coffeebean.com/'>Coffee Bean &amp; Tea Leaf</a></small></div></div></div>",
    html3: "<a href='#coffee-bean' data-toggle='collapse' aria-expanded='false' aria-controls='coffee-bean'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Robeks",
    html:  "3",
    html2: "<a href='#robeks-juice' data-toggle='collapse' aria-expanded='false' aria-controls='robeks-juice'>Robeks</a><div class='collapse container-fluid' id='robeks-juice'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />N/A</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-7999</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><a href='https://asicsulb.org/food'>Vendor Hours Page</a></small></br><small><strong>Website: </strong><a target='_blank' href='http://www.robeks.com/'>Robeks Juice</a></small></div></div></div>",
    html3: "<a href='#robeks-juice' data-toggle='collapse' aria-expanded='false' aria-controls='robeks-juice'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Sbarro Pizza",
    html:  "4",
    html2: "<a href='#sbarro' data-toggle='collapse' aria-expanded='false' aria-controls='sbarro'>Sbarro Pizza</a><div class='collapse container-fluid' id='sbarro'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />N/A</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 498-3737</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><a href='https://asicsulb.org/food'>Vendor Hours Page</a></small></br><small><strong>Website: </strong><a target='_blank' href='http://www.sbarro.com/'>Sbarro Pizza</a></small></div></div></div>",
    html3: "<a href='#sbarro' data-toggle='collapse' aria-expanded='false' aria-controls='sbarro'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Wells Fargo",
    html:  "5",
    html2: "<a href='#wells-fargo' data-toggle='collapse' aria-expanded='false' aria-controls='wells-fargo'>Wells Fargo</a><div class='collapse container-fluid' id='wells-fargo'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />N/A</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 597-0513</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><a href='https://asicsulb.org/food'>Vendor Hours Page</a></small></br><small><strong>Website: </strong><a target='_blank' href='https://www.wellsfargo.com/'>Wells Fargo</a></small></div></div></div>",
    html3: "<a href='#wells-fargo' data-toggle='collapse' aria-expanded='false' aria-controls='wells-fargo'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "University Police Substation",
    html:  "6",
    html2: "<a href='#univ-police' data-toggle='collapse' aria-expanded='false' aria-controls='univ-police'>University Police Substation</a><div class='collapse container-fluid' id='univ-police'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-237</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-2313</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Varies</small></div></div></div>",
    html3: "<a href='#univ-police' data-toggle='collapse' aria-expanded='false' aria-controls='univ-police'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "237",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "ASI Communications Main Office",
    html:  "7",
    html2: "<a href='#asi-comm' data-toggle='collapse' aria-expanded='false' aria-controls='asi-comm'>ASI Communications Main Office</a><div class='collapse container-fluid' id='asi-comm'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-235</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-4353</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Thu: 10AM - 6PM, Fri: 9AM - 5PM</small></div></div></div>",
    html3: "<a href='#asi-comm' data-toggle='collapse' aria-expanded='false' aria-controls='asi-comm'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "235",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Seal Beach Room",
    html:  "8",
    html2: "Seal Beach Room",
    html3: "",
    html4: "249",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Naples Island Room",
    html:  "9",
    html2: "Naples Island Room",
    html3: "",
    html4: "252",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Long Beach Ballrooms",
    html:  "10",
    html2: "Long Beach Ballrooms",
    html3: "",
    html4: "251",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Center Courtyard",
    html:  "11",
    html2: "Center Courtyard",
    html3: "",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "USU Information &amp; Ticket Center",
    html:  "12",
    html2: "<a href='#info-ticket-center' data-toggle='collapse' aria-expanded='false' aria-controls='info-ticket-center'>USU Information &amp; Ticket Center</a><div class='collapse container-fluid' id='info-ticket-center'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />2<sup>nd</sup> Floor Lobby</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-4834</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Thu: 9AM - 6:30PM</small><small><strong>Website: </strong><a href='../enjoy/info-ticket-center'>USU Information &amp; Ticket Center</a></small></div></div></div>",
    html3: "<a href='#info-ticket-center' data-toggle='collapse' aria-expanded='false' aria-controls='info-ticket-center'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "South Plaza",
    html:  "13",
    html2: "South Plaza",
    html3: "",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Alamitos Bay Room",
    html:  "14",
    html2: "Alamitos Bay Room",
    html3: "",
    html4: "253",
    extra: true,
    floor: 2,
    tag: ""
  },  
  {        
    title: "Carl's Jr",
    html:  "15",
    html2: "<a href='#carls-jr' data-toggle='collapse' aria-expanded='false' aria-controls='carls-jr'>Carl's Jr</a><div class='collapse container-fluid' id='carls-jr'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />Food Court</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-1883</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><a href='https://asicsulb.org/food'>Vendor Hours Page</a></small></br><small><strong>Website: </strong><a target='_blank' href='http://www.carlsjr.com/'>Carl's Jr</a></small></div></div></div>",
    html3: "<a href='#carls-jr' data-toggle='collapse' aria-expanded='false' aria-controls='carls-jr'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Food Court",
    html:  "16",
    html2: "Food Court",
    html3: "",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },  
  {        
    title: "Building Managers",
    html:  "17",
    html2: "Building Managers",
    html3: "",
    html4: "213",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Candy Corner",
    html:  "18",
    html2: "<a href='#candy-corner' data-toggle='collapse' aria-expanded='false' aria-controls='candy-corner'>Candy Corner</a><div class='collapse container-fluid' id='candy-corner'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />2<sup>nd</sup> Floor Lobby</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-2215</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><a href='https://asicsulb.org/food'>Vendor Hours Page</a></small></div></div></div>",
    html3: "<a href='#candy-corner' data-toggle='collapse' aria-expanded='false' aria-controls='candy-corner'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Center for Scholarship Information",
    html:  "19",
    html2: "<a href='#center-scholarship' data-toggle='collapse' aria-expanded='false' aria-controls='center-scholarship'>Center for Scholarship Information</a><div class='collapse container-fluid' id='center-scholarship'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-218</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-2549</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Fri: 8AM - 5PM</small><small><strong>Website: </strong><a target='_blank' href='http://web.csulb.edu/divisions/students/sld/'>Center for Scholarship Information</a></small></div></div></div></td>",
    html3: "<td><a href='#center-scholarship' data-toggle='collapse' aria-expanded='false' aria-controls='center-scholarship'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "218",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Office of Multicultural Affairs (OMA)",
    html:  "20",
    html2: "<a href='#multicultural-affairs' data-toggle='collapse' aria-expanded='false' aria-controls='multicultural-affairs'>Office of Multicultural Affairs (OMA)</a><div class='collapse container-fluid' id='multicultural-affairs'><div class='row contact-info'><div class='contact-description'><small>The Multicultural Center contributes to the creation of a campus environment that is truly inclusive. We offer a number of diversity lectures, presentations, workshops and training across disciplines.</small></div><div class='col-lg-6'><small><strong>Location</strong><br />USU-224</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-7044</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Fri: 8AM - 5PM</small></div></div></div>",
    html3: "<a href='#multicultural-affairs' data-toggle='collapse' aria-expanded='false' aria-controls='multicultural-affairs'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "224",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Office of the Dean of Students",
    html:  "21",
    html2: "<a href='#dean-student' data-toggle='collapse' aria-expanded='false' aria-controls='dean-student'>Office of the Dean of Students</a><div class='collapse container-fluid' id='dean-student'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-219</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-8670</small></div><div class='col-xs-12'><small><strong>Website: </strong><a target='_blank' href='http://web.csulb.edu/divisions/students/studentdean/'>Office of the Dean of Students</a></small></div></div></div>",
    html3: "<a href='#dean-student' data-toggle='collapse' aria-expanded='false' aria-controls='dean-student'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "219",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Elektric Hair",
    html:  "22",
    html2: "<a href='#elektric-hair' data-toggle='collapse' aria-expanded='false' aria-controls='elektric-hair'>Elektric Hair</a><div class='collapse container-fluid' id='elektric-hair'><div class='row contact-info'><div class='contact-description'><small>The Elektric Hair &amp; Nail Salon services the public with haircuts, hair styling, manicures and a number of other services.</small></div><div class='col-lg-6'><small><strong>Location:</strong><br />USU-236</small></div><div class='col-lg-6'><small><strong>Contact:</strong><br />(562) 985-4522</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><a href='https://asicsulb.org/food'>Vendor Hours Page</a></small></div></div></div>",
    html3: "<a href='#elektric-hair' data-toggle='collapse' aria-expanded='false' aria-controls='elektric-hair'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "236",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Campus Events Office",
    html:  "23",
    html2: "<a href='#conference-events' data-toggle='collapse' aria-expanded='false' aria-controls='conference-events'>Campus Events Office</a><div class='collapse container-fluid' id='conference-events'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-221</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-5205</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Thu: 8AM - 6PM, Fri: 8AM - 5PM</small><small><strong>Website: </strong><a href='../discover/campus-events-office'>Campus Events Office</a></small></div></div></div>",
    html3: "<a href='#conference-events' data-toggle='collapse' aria-expanded='false' aria-controls='conference-events'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "221",
    extra: true,
    floor: 2,
    tag: ""
  },
  // {        
  //   title: "Student Life &amp; Development Advisors",
  //   html:  "23",
  //   html2: "<a href='#student-life' data-toggle='collapse' aria-expanded='false' aria-controls='student-life'>Student Life &amp; Development Advisors</a><div class='collapse container-fluid' id='student-life'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-215</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-4181</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Fri: 8AM - 5PM</small><small><strong>Website: </strong><a target='_blank' href='http://web.csulb.edu/divisions/students/sld/'>Student Life &amp; Development</a></small></div></div></div>",
  //   html3: "<a href='#student-life' data-toggle='collapse' aria-expanded='false' aria-controls='student-life'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
  //   html4: "215",
  //   extra: true,
  //   floor: 2,
  // },
  {        
    title: "VACANT",
    html:  "24",
    html2: "VACANT",
    html3: "",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "ASI Human Resources",
    html:  "25",
    html2: "<a href='#human-resources' data-toggle='collapse' aria-expanded='false' aria-controls='human-resources'>ASI Human Resources</a><div class='collapse container-fluid' id='human-resources'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-227, 232, 235</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-2468</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Thu: 9AM - 6PM, Fri: 9AM - 5PM</small><small><strong>Website: </strong><a href='../work'>ASI Human Resources</a></small></div></div></div>",
    html3: "<a href='#human-resources' data-toggle='collapse' aria-expanded='false' aria-controls='human-resources'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "227, 232, 235",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "ASI Business Office",
    html:  "26",
    html2: "<a href='#business-office' data-toggle='collapse' aria-expanded='false' aria-controls='business-office'>ASI Business Office</a><div class='collapse container-fluid' id='business-office'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-229</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-4994</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Thu: 9AM - 6PM, Fri: 9AM - 5PM</small><small><strong>Website: </strong><a href='business-office'>ASI Business Office</a></small></div></div></div>",
    html3: "<a href='#business-office' data-toggle='collapse' aria-expanded='false' aria-controls='business-office'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "229",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Dr. Stuart L. Farber Senate Chambers",
    html:  "27",
    html2: "Dr. Stuart L. Farber Senate Chambers",
    html3: "",
    html4: "234",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Laguna Beach Room",
    html:  "28",
    html2: "Laguna Beach Room",
    html3: "",
    html4: "204",
    extra: true,
    floor: 2,
    tag: ""
  },    
  {        
    title: "Newport Beach Room",
    html:  "29",
    html2: "Newport Beach Room",
    html3: "",
    html4: "202",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Huntington Beach Room",
    html:  "30",
    html2: "Huntington Beach Room",
    html3: "",
    html4: "205",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "After Hours Study Center",
    html:  "31",
    html2: "<a href='#after-hours-study' data-toggle='collapse' aria-expanded='false' aria-controls='after-hours-study'>After Hours Study Center</a><div class='collapse container-fluid' id='after-hours-study'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />202-205</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />562-985-4834</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours: </strong>Mon-Thu: 11pm - 7am (Fall/Spring)</small><br /><small>Closed Summer</small></div></div></div>",
    html3: "<a href='#after-hours-study' data-toggle='collapse' aria-expanded='false' aria-controls='after-hours-study'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },  
  {        
    title: "49er Shops Convenience Store",
    html:  "32",
    html2: "49er Shops Convenience Store",
    html3: "",
    html4: "207",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "El Pollo Loco",
    html:  "33",
    html2: "<a href='#pollo-loco' data-toggle='collapse' aria-expanded='false' aria-controls='pollo-loco'>El Pollo Loco</a><div class='collapse container-fluid' id='pollo-loco'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />Food Court</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-2362</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><a href='https://asicsulb.org/food'>Vendor Hours Page</a></small></div><small><strong>Website: </strong><a target='_blank' href='http://www.elpolloloco.com/'>El Pollo Loco</a></small></div></div>",
    html3: "<a href='#pollo-loco' data-toggle='collapse' aria-expanded='false' aria-controls='pollo-loco'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Subway",
    html:  "34",
    html2: "<a href='#subway' data-toggle='collapse' aria-expanded='false' aria-controls='subway'>Subway</a><div class='collapse container-fluid' id='subway'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />Food Court</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-2362</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><a href='https://asicsulb.org/food'>Vendor Hours Page</a></small></br><small><strong>Website: </strong><a target='_blank' href='http://www.subway.com/en-us'>Subway</a></small></div></div></div>",
    html3: "<a href='#subway' data-toggle='collapse' aria-expanded='false' aria-controls='subway'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "Sustain U",
    html:  "",
    html2: "<a href='#sustain-u-office' data-toggle='collapse' aria-expanded='false' aria-controls='sustain-u-office'>Sustain U</a><div class='collapse container-fluid' id='sustain-u-office'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-213</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-5851</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Tue: 10:30am - 12:30pm, Wed: 9:30am - 11:30am, Thu: 10:30am - 12:30pm</small><small><strong>Website: </strong><a href='../discover/sustain-u'>Sustain U office</a></small></div></div></div>",
    html3: "<a href='#sustain-u-office' data-toggle='collapse' aria-expanded='false' aria-controls='sustain-u-office'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "238",
    extra: true,
    floor: 2,
    tag: ""
  },
  {        
    title: "ASI Student Government Office",
    html:  "1",
    html2: "<a href='#government-office' data-toggle='collapse' aria-expanded='false' aria-controls='government-office'>ASI Student Government Office</a><div class='collapse container-fluid' id='government-office'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-311</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />N/A</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon- Fri:  9am-5pm</small><small><strong>Website: </strong><a target='_blank' href='http://www.asicsulb.org/gov/'>ASI Student Government Office</a></small></div></div></div>",
    html3: "<a href='#government-office' data-toggle='collapse' aria-expanded='false' aria-controls='government-office'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "311",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "Robert C. Maxson Student Organization Center",
    html:  "2",
    html2: "<a href='#maxson-center' data-toggle='collapse' aria-expanded='false' aria-controls='maxson-center'>Robert C. Maxson Student Organization Center</a><div class='collapse container-fluid' id='maxson-center'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-312</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-2489</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Thu: 8:30AM - 7PM, Fri: 8:30AM - 3PM</small><small><strong>Website: </strong><a target='_blank' href='https://orgsync.com/68583/custom_pages/9091'>Robert C. Maxson Student Organization Center</a></small></div></div></div>",
    html3: "<a href='#maxson-center' data-toggle='collapse' aria-expanded='false' aria-controls='maxson-center'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "312",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "ASI Administration",
    html:  "3",
    html2: "ASI Administration",
    html3: "",
    html4: "313",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "Banner Making Area",
    html:  "4",
    html2: "Banner Making Area",
    html3: "",
    html4: "",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "Office of the Associate Vice President & Student Emergency Intervention and Wellness Program",
    html:  "5",
    html2: "Office of the Associate Vice President & Student Emergency Intervention and Wellness Program",
    html3: "",
    html4: "",
    extra: true,
    floor: 3,
    tag: ""
  },  
  {        
    title: "USU Southeast Plaza",
    html:  "6",
    html2: "USU Southeast Plaza",
    html3: "",
    html4: "",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "USU Reflection Room",
    html:  "7",
    html2: "<a href='#reflection-room' data-toggle='collapse' aria-expanded='false' aria-controls='reflection-room'>USU Reflection Room</a><div class='collapse container-fluid' id='reflection-room'><div class='row contact-info'><div class='contact-description'><small>The reflection room provides a tranquil, calm place for students to reflect, pray or meditate.</small></div><div class='col-lg-6'><small><strong>Location</strong><br />USU-308</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />N/A</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> USU Operating Hours</small></div></div></div>",
    html3: "<a href='#reflection-room' data-toggle='collapse' aria-expanded='false' aria-controls='reflection-room'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "308",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "Puvungna Student Cultural Resource Center",
    html:  "8",
    html2: "Puvungna Student Cultural Resource Center",
    html3: "",
    html4: "310",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "USU Beach Balance",
    html:  "9",
    html2: "<a href='#dream-success' data-toggle='collapse' aria-expanded='false' aria-controls='dream-success'>USU Beach Balance</a><div class='collapse container-fluid' id='dream-success'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-309</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-4834</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Thu: 10AM - 6PM <br /> Fri: 10AM - 4PM</small></div><small><strong>Website: </strong><a target='_blank' href='https://asicsulb.org/corporate/discover/usu-beach-balance'>USU Beach Balance</a></small></div></div>",
    html3: "<a href='#dream-success' data-toggle='collapse' aria-expanded='false' aria-controls='dream-success'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "309",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "Santa Monica Beach Room",
    html:  "10",
    html2: "Santa Monica Beach Room",
    html3: "",
    html4: "307",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "Venice Beach Room",
    html:  "11",
    html2: "Venice Beach Room",
    html3: "",
    html4: "306",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "Manhattan Beach Room",
    html:  "12",
    html2: "Manhattan Beach Room",
    html3: "",
    html4: "305",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "Hermosa Beach Room",
    html:  "13",
    html2: "Hermosa Beach Room",
    html3: "",
    html4: "304",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "Redondo Beach Room",
    html:  "14",
    html2: "Redondo Beach Room",
    html3: "",
    html4: "303",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "ASI Beach Pantry",
    html:  "15",
    html2: "<a href='#beach_pantry' data-toggle='collapse' aria-expanded='false' aria-controls='beach_pantry'>ASI Beach Pantry</a><div class='collapse container-fluid' id='beach_pantry'><div class='row contact-info'><div class='col-lg-6'><small><strong>Location</strong><br />USU-302</small></div><div class='col-lg-6'><small><strong>Contact</strong><br />(562) 985-5264</small></div></div><div class='row contact-info'><div class='col-xs-12'><small><strong>Hours:</strong> Mon - Fri: 10AM - 2PM &amp; 5 to 7PM</small><small><strong>Website: </strong><a target='_blank' href='http://www.asicsulb.org/corporate/resources/beach-pantry'>ASI Beach Pantry</a></small></div></div></div>",
    html3: "<a href='#beach_pantry' data-toggle='collapse' aria-expanded='false' aria-controls='beach_pantry'><i class='fa fa-caret-down' aria-hidden='true'></i></a>",
    html4: "302",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "ASI &amp; USU Administration Office",
    html:  "16",
    html2: "ASI &amp; USU Administration Office",
    html3: "",
    html4: "225",
    extra: true,
    floor: 3,
    tag: ""
  },
  {        
    title: "USU Southwest Plaza",
    html:  "17",
    html2: "USU Southwest Plaza",
    html3: "",
    html4: "",
    extra: true,
    floor: 3,
    tag: ""
  },
];

function Controller4($scope) {
    $scope.items = containsFloor(1,place_array);
}

function Controller5($scope) {
    $scope.items1 = containsFloor(2,place_array);
}

function Controller6($scope) {
    $scope.items2 = containsFloor(3,place_array);
}

function containsFloor(num, list) {
    var x;
    var j = 0;
    var newList = [];
     for (i = 0; i < list.length; i++) {
        if (list[i].floor == num) {
            newList[j] = list[i];
            j = j+1;
        }
    }
    return newList;
}