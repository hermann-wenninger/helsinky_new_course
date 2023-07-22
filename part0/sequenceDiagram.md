sequenceDiagram
    participant browser
    participant server
    
    
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    browser sent to -->>server: the input string


    server->> is calling the save-method saving the string to the json file
    like: [.......{ "content": "the newest content last", "date": "2023-2-2" }]
    
    