// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


let divTopics = document.querySelector(".topics"); // select the div container for the topics

divTopics.appendChild(topics("ALL"));


axios.get("https://lambda-times-backend.herokuapp.com/topics") // get data from given address

    .then(response => {                 // what to do with data once recieved? 
        let topicsArray = response.data.topics;
        let length = topicsArray.length;
        topicsArray.forEach(item => {                       
            divTopics.appendChild(topics(item));
        })
        
        // .catch((error) => {                    // error msg goes here but its not working????????????//
        //     console.log('Im sorry, ERROR',error) ;

    });





function topics(item) {                           
    const tab = document.createElement("div");
        if (item == "node.js") {
            tab.classList.add("tab", "node");
        } 
        else
            tab.classList.add("tab", item);
        tab.textContent = item;
    return tab
            
    }