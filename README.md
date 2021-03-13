# Convert number to english word assignment

##File Structure

credorax assignment
|
------public---- index.html
|         
-------src      
        |       
        ------ App      
        |           --- ConvertNumForm          
        |           |
        ------ components --- index.js ---> export all component from here
        |           |
        |           --- HistoryList
        |                   |
        |                   ---- HistoryItem
        ---- helpers
        |       |  
        |       --- convert-function.js --> containing the algorithm for
        |                                   converting number to english  
        |
        ------ index.js
        |
        ------ index.css

each component folder contain the same structure file.
for example **HistoryList** component:

             ---- index.js ---> functional component
             |
             |
HistoryList--|--- styles --- HistoryList.js ---> makeStyles (hook generator)
             |               for styling the component 
             |
             ---- HistoryList.test.js ---> test file

##Project details

*Using react.js version 18.14 for building the client side web application.
*Using functional component and react hooks.
*Using Material-ui components, makeStyle hook generator and createMuiTheme for design and handle UI components. 
* Responsive design for mobile devices, iPad and all in between... 
* All states are managed in the App component

##Instructions
* clone the repository to your local environment.
*Use `npm install` or `yarn install` for installing all necessary libraries.
* Use `npm start` or `yarn start` for running the application on local host port 3000.
* Dark mode is highly recommended! :) 
* enjoy :)
