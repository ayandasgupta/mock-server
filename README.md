# mock-server
Node.js http server for getting mock JSON data for front end ajax call testing

# Usage
1. Create mock data in a json file and put that inside data folder.
2. If the name of the json file you created is xyz.json then use this URL to fetch the JSON data - localhost:8082/xyz and it will return the data with 200 http status code
3. If for testing error scenario you want to receive some other http status code put that code in the URL like below-
    localhost:8082/xyz?code=400
    This returns the JSON data inside data/xyz.json file with an HTTP status code of 400
    
