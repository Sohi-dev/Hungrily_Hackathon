# Hungrily_Hackathon

In this current scenario we are dealing with a lot of Hunger problems, many NGOs and even the United Nations are trying to resolve the disputes,aiming towards a hunger free region.In this context this is our small effort to bring up this concept with the help of modern technologies backed by IBM cloud and Kubernetes. Our main idea is to develope a data driven AI based platform to connect the needy people with the resources via the help of volunteers so that the help reaches out to them when a request is made.


[Project website](https://sample-project.s3-web.us-east.cloud-object-storage.appdomain.cloud/)

## ABOUT HUNGRILY

In our data driven AI based web application, HUNGRILY we are mainly focusing on resolving hunger related problems over the globe, primarily in our area as a micro-management topic and further pushing it to macro-management. Our web application starts with a registration page where we have designed two different Login sections, one for the user(person in need) and another for the volunteer(person who will provide help).First for the user login  part the user needs to login to the page using their detailed information. As soon as they fill the information the locator present in their phone tracts their current location and this information is passed on to the next process wherein the  chatbot takes up the food preference of the user and this is again passed on to the volunteers. 
The volunteers on the other hand can login to the page as volunteers after doing so they get a notification if users around 2km are present then based on their preferences  the volunteer  needs to provide food to the user. In case if the Volunteer denies to help then after a relapse time of 5sec the user can again ask for the request. Thus this is our small effort to bridge the gap between the User and the volunteer.

### Subsection 1.1

EXPLAIN THE FRONTEND IN NOT MANY WORDS
An user who needs emergency provisions can login to our React application. Upon login, A Watson Assistant based Chatbot will greet them.
A user can send a food request to the chatbot. It will assign a volunteer to bring the food. The details of the volunteer as well as 
the food request and delivery status can be previewed in the Receipt screen. 

A volunteer can see all the requests assigned to them in their feed upon login. They can also preview a heatmap that shows 
the density of food requests in a world map which can then be used to organize food campaigns at scale.

### Subsection 1.2

EXPLAIN THE BACKEND IN NOT MANY WORDS

The backend runs in a node.js application and communicates with a mongoDB database. It provides role based authentication and 
CRUD operations over the database. It also uses a geoJson query aggregation along with our custom algorithm which assigns volunteers
closest to the user creating a request for food.

## Conclusion

WHAT WE COULD ESTABLISH IN THE PROCESS, WHAT MORE WE CAN DO WITH IT IN ABOUT 100 WORDS

### Results

THE DESIRED OUTCOME ON HOST SERVER.

## Acknowledgments

APLLICATIONS AND RESOURCES USED, THANKING THE TEAM AND THE MENTOR.
