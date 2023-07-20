  zenuml
    participant browser
    participant server

    browser-> GET  https://studies.cs.helsinki.fi/exampleapp/notes

    server-> SENT HTML-Document

    browser-> GET https://studies.cs.helsinki.fi/exampleapp/main.css

    server-> SENT main.css

    browser-> GET https://studies.cs.helsinki.fi/exampleapp/main.js

    server-> SENT main.js

    browser-> GET https://studies.cs.helsinki.fi/exampleapp/xyz.json

    server-> SENT xyz.json

    browser-> POST https://studies.cs.helsinki.fi/exampleapp/new_note
                    is sending the message

    server-> takes the message on https://studies.cs.helsinki.fi/exampleapp/new_note
             
    server-> calls the method to create a new eintrag to the xyz.json
