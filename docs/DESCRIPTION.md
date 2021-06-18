# Hungrily_Hackathon

In this current scenario we are dealing with a lot of Hunger problems, many NGOs and even the United Nations are trying to resolve the disputes,aiming towards a hunger free region.In this context this is our small effort to bring up this concept with the help of modern technologies backed by IBM cloud and Kubernetes. Our main idea is to develope a data driven AI based platform to connect the needy people with the resources via the help of volunteers so that the help reaches out to them when a request is made.


[Project website] (https://hungrily.netlify.app/)

## ABOUT HUNGRILY

In our data driven AI based web application, HUNGRILY we are mainly focusing on resolving hunger related problems over the globe, primarily in our area as a micro-management topic and further pushing it to macro-management. Our web application starts with a registration page where we have designed two different Login sections, one for the user(person in need) and another for the volunteer(person who will provide help). First for the user login part the user needs to login to the page using their detailed information. As soon as they fill in the information the locator present in their phone tracts their current location using the chatbot, wherein it takes up the food preference of the user and this is again passed on to the volunteers. 
The volunteers on the other hand can login to the page as volunteers after doing so they get a notification if users around 2km are present then based on their preferences the volunteer  needs to provide food to the user. In case if the Volunteer denies to help then after a relapse time of 5sec the user can again ask for the request. Thus this is our small effort to bridge the gap between the User and the volunteer.

# FRONTEND CONCEPT

An user who needs emergency provisions can login to our React application. Upon login, A Watson Assistant based Chatbot will greet them.
A user can send a food request to the chatbot. It will assign a volunteer to bring the food. The details of the volunteer as well as 
the food request and delivery status can be previewed in the Receipt screen. 
A volunteer can see all the requests assigned to them in their feed upon login. They can also preview a heatmap that shows 
the density of food requests in a world map which can then be used to organize food campaigns at scale.

# BACKEND CONCEPT

The backend runs in a node.js application and communicates with a mongoDB database. It provides role based authentication and 
CRUD operations over the database. It also uses a geoJson query aggregation along with our custom algorithm which assigns volunteers
closest to the user creating a request for food.

## Conclusion

Lastly we wanna conclude saying this approach will really help us resolving the hunger problems which is prevailing all over the globe.This connects many poor people together with the resources and helps them to get the food that they need.The approach can be further explained with the concept of DTN in future days wherein we can implement this technology like whenever a volunteer is found within 2km region of the user the virtual map of the user gets automatically shared with the volunteer and a connection is made out of it.Thus this concept can solve a emerging problem . 

### Results

We have a web application which is actively taking in responses from the user(the person in need)on the other window the volunteer gets there user friendly interface for accepting or rejecting the request made by the user.In the whole process for micro management the precise location of the user is provided to the volunteer but whenn we move forward to macro management we can used the concept of DTN and integrate virtual maps so that the volunteer and user can get connected with paths. 

## Acknowledgments

First of all we would like to convey our gratitude to the WITACE and IBM team for giving us such a great oppurtunity to participate in this hackathon with such a noble theme.
We would like to take this opportunity to express our profound gratitude and deep regard to our Project guide Soumyadip Chowdhury , for his exemplary guidance, valuable feedback and constant encouragement throughout the duration of the project. His valuable suggestions were of immense help throughout my project work. His perceptive criticism kept us working to make this project in a much better way. Working under him was an extremely knowledgeable experience for us.

WE would also like to give our sincere gratitude to all the friends who filled in the survey, without which this project would be a incomplete one.


THANKING THE TEAM AND THE MENTOR.
