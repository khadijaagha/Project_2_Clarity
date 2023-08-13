# Clarity ReadMe

**Description**

This is the second project in the Software Engineering Immersive at the General Assembly. The task of this project was to create a web application with all the CRUD functions. I decided to go with a meditation social media app, where users can share and add techniques that have helped them get a step closer to mindfulness. 



**Deployment link**

https://clarity-project-2.fly.dev/







**Getting Started/Code Installation**

Click on the link, sign in through your Google account and start adding posts!




**Timeframe & Working Team (Solo/Pair/Group)**
This was an independent project expected to be completed in a week.




**Technologies Used**

The technologies used include frontend and backend - Node.js, Express frameworks, CSS and HTML.



**Brief**

Overview
This second project will be your first adventure into building a full-stack application. You'll be building a Node/Express/MongoDB app from the ground up yourself.
This is exciting and by the end of this unit we will have given you the all of the tools needed to build your app.
You get to decide what you want to build - as long as it meets the technical requirements outlined below.
You will be working individually for this project. You'll be designing and coding the app yourself. However, you will have access to up to 3 fifteen-minute one-on-one sessions with your instructors.
Additionally as part of the project's requirements, you'll be required to take and pass a Project Assessment.

Project Presentations - __________:
You will have a maximum of 10 minutes to present your project following these guidelines:
Introduce the Project:
☐ Intro your project by paraphrasing the README.
Demonstrate the Project:
☐ Launch the deployed app by clicking the link in the README.
☐ Log out and back in to demonstrate that OAuth is working.
☐ Demonstrate the features of the app, including full-CRUD data operations.
Show/discuss your code:
☐ Show the "main" Mongoose model.
☐ Show your favorite EJS template.
☐ Show the controller for the main model.
Share the experience:
☐ What was your biggest challenge?
☐ What are your key learnings/takeaways?
Q & A + Feedback

Technical Requirements
Your App Must:
☐ Have at least 2 data entities (data resources) in addition to the User Model - one entity that represents the main functional idea for your app and another with a One:Many or Many:Many relationship with that main entity (embedded or referenced).
☐ Use OAuth authentication.
☐ Implement basic authorization that restricts access to features that need a logged in user in order to work (typically CUD data operations) by "protecting" those routes from anonymous users using the ensureLoggedIn middleware from the OAuth lesson. In addition, ensure that editing and deletion of a data resource can only be done by the user that created that data (this is done in the controller - refer to the Guide to User-Centric CRUD).
☐ Have full-CRUD data operations somewhere within the app's features. For example, you can have functionality that Creates & Updates a post and satisfy Delete functionality by implementing the ability to delete comments.
☐ Be styled such that the app looks and feels similar to apps we use on a daily basis - in other words, it should have a consistent and polished user interface.
☐ Be deployed online (Heroku).
Optionally, Your App May:
☐ Consume a third-party API. If you choose to implement this option, it's likely that the data from the API will be a key data resource in your app, therefore it's important to consider how to implement whatever CRUD data operations will apply. For example, how will data from the API find its way into your database? Be sure to discuss with an instructor when planning your app's features.
☐ Expose its own API where it returns data resources as JSON.

Necessary Deliverables
☐ A working full-stack app that meets or exceeds the above technical requirements, built by you, and hosted on Heroku.
A README.md file with these sections (here's a basic template):
☐ App Title: Contains a description of what the app does and optional background info.
☐ Screenshot(s): A screenshot of your app's landing page and any other screenshots of interest.
☐ Technologies Used: List of the technologies used.
☐ Getting Started: Include a link to the deployed app and your Trello board with the project's planning.
☐ Next Steps: Planned future enhancements (icebox items).
Note: Don't underestimate the value of a well crafted README.md. The README.md introduces your project to prospective employers and forms their first impression of your 

**Planning**




![CLARITY WIREFRAME](https://github.com/khadijaagha/Project_2_Clarity/assets/130927994/518228dc-2d86-4cb2-b2c9-695c30a721d3)






Wireframe made using Figma


This is a visual representation and planning of how I wanted my web application to look like. There is a home/landing page (first slide),  a page where all posts should be able to be seen and accessed (third slide) and then a separate slide where a user can create a post. Lastly, a‘show’ page of a particular post that's clicked on. It should show details of the meditation technique and users should be able to post comments.









<img width="892" alt="Screenshot 2023-08-13 at 16 23 59" src="https://github.com/khadijaagha/Project_2_Clarity/assets/130927994/321b3188-3ac9-4e40-8360-2e28bcc28bf6">





ERD diagram | made on Lucidchart

The above ERD shows the data entities that will be implemented in my web application. There is a one to many relationship (1:M) between a user and meditation techniques. And a 1:M relationship between a meditation technique post and its comments. 

I used Trello as a project management tool to ensure I was meeting my checklists and to help organise my project to-dos. This involved creating an ‘icebox’ of user stories I need to add to my web application and then adding whatever I was working on at the moment to ‘Current/MVP’. Once complete, the user story would be moved to the ‘Done’ pile to be marked as complete and to help stay on top of my process.




<img width="881" alt="Screenshot 2023-08-13 at 16 27 30" src="https://github.com/khadijaagha/Project_2_Clarity/assets/130927994/94a282fe-288c-4ebf-a197-dbc2e3b342e3">

Screenshot of my Trello board towards completion of the project.

There was no pseudocode involved but I used past exercises as a reference point which was extremely helpful.

**Build/Code Process**

Throughout the development process, I encountered various functions and pieces of code that posed unique challenges and required deeper understanding. As I aimed to consolidate my knowledge, I devoted significant time to thorough research, utilising documentation and other valuable resources. The following screenshots showcase snippets of code that stood out to me for different reasons, reflecting my dedication to understanding their purpose and achieving optimal outcomes. These instances of code represent pivotal moments in my learning journey, where perseverance and inquisitiveness played essential roles in crafting robust solutions for the project.




<img width="621" alt="Screenshot 2023-08-13 at 16 27 51" src="https://github.com/khadijaagha/Project_2_Clarity/assets/130927994/5658633d-4769-4451-a5c3-2b4bf5d7ce75">

Screenshot showing the ‘create’ function in my controller for my comments feature.

In this screenshot, the create function to allow comments to be added to a post is shown, the reason I have included this is because I struggled on trying to make this particular user story work. Mostly, due to my own understanding of the differences between req.params vs. req.body vs. req.user which was still not as concrete. In this code, I am trying to access the particular post’s ID to which we are adding the comments to (req.params). In the ‘try’ block, I am trying to access the user’s unique ID so that the comment has an element of ownership. Line 20, the comment is being added to the array through the push method and ultimately saved and the user is redirected to the post page with the comment displayed.




<img width="881" alt="Screenshot 2023-08-13 at 16 28 06" src="https://github.com/khadijaagha/Project_2_Clarity/assets/130927994/9f6a614e-6a57-4882-8ea4-aec6ef080818">

Screenshot of ‘create’ function for a post

This screenshot, similarly also shows another ‘create’ function, this function helps run one of the main user stories, where a user can create a new post. Again, this involves the use of the req.body to store the ID of the particular post as well as storing the user ID of the post, that was still an unsure topic for me but with practice my understanding solidified. 



<img width="881" alt="Screenshot 2023-08-13 at 16 28 23" src="https://github.com/khadijaagha/Project_2_Clarity/assets/130927994/435c8cdf-5288-4717-be87-298db73c3f25">

Screenshot of ensureOwner function 

This screenshot shows a function that helps with allowing only the creator of the post to delete, otherwise the site redirects to a page that informs the user they can't delete or edit a post that's not theirs. 


**Challenges**

I came across quite a few challenges as this was my first independent project using node.js and MongoDB that were still quite new to me but a particular challenge was:

Getting the Google OAuth to work with help of my classmates and tutors I was able to trace down the problem.

 Additionally, another challenge was:

The function of adding comments. This involved use of ‘req.user’ and ‘req.body’ and ‘req.params’,  the difference was confusing for me but with help from my instructor, it made a lot more sense and I was able to implement the comment user story. 

Lastly, ensuring that posts could be only deleted by the user that created them, this took some time to implement and it took some fiddling with my ‘if’ statement in the .ejs file that it finally worked.

**Wins**

My favourite page in terms of the visual design is the homepage. 
Some interesting problem solving that I did was trying to make my comments section work, this involved fiddling with my ejs file as well as my controller and using the ‘req.user’ object that I was not using earlier.
My strong sections of code are my delete and create functions in my controllers as I did not face any particular challenge with those. 
I feel my create comment function is also a strong section of code as it took me some time to get it to work the way I wanted it to.

**Key Learnings/Takeaways**

Gained a better understanding of using a database, in this case, MongoDB and node.js in general although I am still at a learning curve.
CRUD functions were more thoroughly understood.
Learned the importance of coherent and polished UI, this involved in my CSS skills .improving as a lot of research was gone into it.
Project planning and organisation of my tasks through the use of Trello.

**Bugs**

No bugs at the moment but features that I could add/improve on.


**Future Improvements**

Like to add a feature where a user can like a particular post and it be added to a collection of their ‘favourites’ and access them from there as well.
Be able to add images. 
Enable the prepopulation of the form when a user chooses to 'edit' a post. This way, users won't have to re-enter all the information from scratch, making the editing process more efficient and user-friendly. By implementing this feature, we can offer a smoother and more convenient editing experience.

