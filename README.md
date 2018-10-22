# Mechta | Steven Chan, Vasile, Robert, Hanjun, Nasko
# CodeCanon-Hackathon-2017-firstHackathon
Built a Facial-Recognition Home Security Door Camera for Recognizing People

Developed a home security program using the unreleased Modular Camera MM100-WS during Canon's first Hackathon. Our program utilizes the camera to recognize people simulating a door camera for home security.

# What happens beforehand
Before the camera begins scanning people, we set up a Clarifai database that fits our purpose of recognizing people within the household and those that are not. We feed it pictures of people in the household and give it names, true, and false values for different members in the household to distiguish between one another and train the database.

# Let's Scan!
The camera takes a snap and the image is uploaded onto our Clarifai database which verifies if the individual in the snap is recognizable. We tell if it is recognizable, if the provided percentage of closest similarity (to those we trained to Clarifai) is above 75%. If it is above the threshold we provide a name of who the person in the household and database is. If not we return unknown stranger!  

# Things we worked with
Canon Modular MM100-WS Camera for taking snaps wirelessly using react.js. The image is then uploaded onto Imgur (used JSON and Imgur's API for this) and a URL is received of where the image is (we use a URL because Clarifai's make-your-own-application uses URLs to add pictures). JSON arranges Clarifai's probability into an array and determines the individual!
