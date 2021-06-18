# Submission name

EXPLAIN THE IDEA IN DETAILS

In this current scenario we are dealing with a lot of Hunger problems many NGO and even the united nations are trying to resolve and bring a zero Hunger state.In this context this is our small effort to bring up this concept with the help of technologies.Our main idea is to develope a data driven AI  based platform to connect the poor and needy people with the resources with the help of volunteers. 


[Project website](https://sample-project.s3-web.us-east.cloud-object-storage.appdomain.cloud/)

## Section 1

EXPLAIN THE CONCEPTS AND USES OF THE APPLICATION

In our data driven AI based web application HUNGRILY we are mainly focusing on resolving hunger related problems . In our web application we first have a registration page where there are  two different Login places one for the user and another for the volunteer.First for the user login  part the user needs to login to the page using their detailed information. As soon as they fill the information the locator present in their phone tracts their current location and this information is passed on to the next process wherein the  chatbot takes up the food preference of the user and this is again passed on to the volunteers. 
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
