INIT UPLOAD

I had added a database plan and a wireframe for the basic layout of how my website will work. During the initial setup I will keep everything on the same page, then later split them up. I have not included on the wireframe any stretch goals/plans, but on the database plan, I have included multiple tables but will likely only create the posts table.

---

31/01 - 10am

https://www.w3schools.com/howto/howto_html_file_upload_button.asp

As part of this project I want to set myself the personal goal of having an image upload. Using the above guide I know the form input type to use, however, I don't know where this is being stored/submitted to. From my general understanding I'll have to have it uploaded to a storage site and have a database table. With this in mind I have updated my database plan and added a new image of it (Database Plan 2)

---

31/01 - Lunch

Most of this push was quite easy and basic. The area that I'm currently struggling with is the fetch for the posts. Initially I was going to do it in the app file, but I thought that may end up extremely messy. After writing it and coming across a lot of errors, in spite of it being an exact copy, I've decided to move it to the actual posts file and work on it from there after lunch.

---

31/01 3pm

I started working on the posts section again and realised some of the issue was that I hadn't actually made a const for the set items yet and now everything seems to be working now that I've adjusted it. However, now my server isn't starting due to pg.pool, so I can't yet test that it's worked how I wanted it to. (2 minutes later I figured out it's because I didn't put a capital P on pool)

What I'm now seeing is the data not actually coming through and crashing the server and page refresh. I believe this may be an issue with my connectionstring being wrong somewhere.

I did notice an issue with the env file where I did : instead of =, however even after saving and restarting there were still issues. I decided to just rewrite the server and now it works. Still not completely sure where I went wrong, but the errors were coming up with an issue with the PG-Pool package.

Currently working on the form and submitting them. I'm struggling to figure out how to send the data in react as it seems to be different from the vanilla framework. I am using Manny's demo as a guide, but that doesn't directly include an example for posting it. What I can see is a blocked out version that I don't belive was tested as on the RefactoredForm, I belive comparing to my notes, line 47 is incorrect and should be outside that set of curly brackets, but I may be wrong in this. However, doing it either way isn't currently helping as the main issue appears to be form values const.

I have gotten the form to work, however the current issue is with the server. It's receiving the data correctly in an object, but isn't sending that to the database properly. I've tried a few different ways including one that Sita suggested, but it doesn't seem to be working

---

01/02 Lunch

After a lot of experimenting both with my own code that I previously tried, what Sita recommended and even asking chat GPT, I wiped the slate clean and started again. I referred back to my week 4 assignment code and recreated that. This seemed to have a slightly better effect, but was still leading to null in all sections. I noticed that this time it also included the name of the object as formdata, so I added .formData to the data const and it now seems to work fine and the data is being sent to the database properly.

---

01/02 Midnight

https://www.w3schools.com/js/js_this.asp
https://www.w3schools.com/JSREF/event_target.asp

Now I'm trying to create a like function on the posts. I think this will be easier now than when I've seperated the pages. My current idea is to import the likes in my database to a button, then have that increase the int value on click. I think it will be fairly simple.

The current issue that I'm having is linking the ID to the database to be able to update it. The SQL was easy enough to figure out. I've discovered 'this', however it doesn't seem to want to get the id that I'm giving it which is a pain.

'This' wasn't working, likely because of some issues with react or trying to seperate the components, I'm not completely sure. On some new research, I found that I could target the event itself, so if I do event.target.id, it will give me the id of the object in the event, in the example it's shoving it in a variable which may be useful, but as I'll only need it the once I'm happy to skip that step for now. My only concern is that I'm producing the ID by {item.id}, which may end up clashing with other IDs. If that becomes a problem, I will have to change the ID scheme.

---

02/02 4pm

I immediately changed my mind on the variable and added it. I adjusted the likes function to fetch a post and send the ID, but it doesn't appear to be working. Upon retesting the SQL, I noticed that it doesn't work if the row likes is 0. So I've now updated the form submission SQL to include a section to add a 0. This also means I can remove the if line in the likes button that will give it a 0 if the column shows up as null. However, this isn't the issue with the button because for whatever reason, the data isn't being received by the server, so it appears to be an issue with my fetch request.

Before pushing I noticed an issue with the server suddenly dropping with the new code added to the form post. It seems to be an issue with how I added the 0. I added it directly the the likes section and the server didn't seem to appreciate that, so I've now changed that to $5 and added the 0 to the dbquery below which seems to not be having the same issue.

After removing code and filling in the form to make sure everything was working how it should be, the server crashed on submission. The issue appears to be with the post for the likes, which I already knew was incorrect and was just filler. After sectioning it off, everything seems to be working server side now and the 0 in the likes is being properly posted.

I have completed the server function to increase the likes. I'm not 100% sure on the issue, but it seemed to be caused by only doing /likes, and when I adjusted it to /likes-data, it seemed to just work which is a little frustrating. It may be an issue with the file names, but it works now and going forward I'll try to use that more. I've also adjusted the get to order by ID, as when liking a post, it would shift them around sometimes. From this I can also adjust how it's ordering them, because I could figure out a way to do this by like count too. I'm currently unsure if I'll have to create a new post request too.

---

02/02 5pm

https://www.youtube.com/watch?v=E4Ha35zDngk

Using the above tutorial I have seperated the posts and forms in different pages. I ran into a couple issues with some of the naming, but I feel a lot more comfortable with this now. I have seperated it and changed the nav buttons to links, so I will need to restyle these.

---

02/02 8pm

Initially working on the filter posts I thought it would be easiest to add some buttons to change a let variable and have that be the basis of the get request. However, I thought that would cheese it a little having only preset options. Currently I am trying to have the filter active through a form. The issue I'm having is that while the request is sent fine, it's not actually adjusting the results that are shown.

---

02/02 9pm

Getting my mind away from that for a breather I've started working on the delete button. My current idea is to basically do the same thing client side that I did for the likes button, but have the server side change. Instead of deleting it, I will change the hidden value to true, and add a section to the get request to not show hidden posts. This is technically the 'delete' function, but I think from an audit perspect you should never delete data. I am aware that if I changed this code to DELETE FROM posts WHERE id=$1, it would delete the post instead, but I prefer this alternative.

02/02 - 10pm

I have completed the filter function. I don't have the full brain capacity to currently describe it, but I did it with the assistance of a friend. If you want the full conversation, let me know, but it's a looooot.

The hardest part of this has definitely been the filter function. The other parts were tedious, this was an actual pain in the ass. I wish I could have styled the entire thing better, but unfortunately I didn't have the time to put into this that I would have liked.

<!-- I have it the following goals:

Standard:
• 🎯 Create a client using React.
• 🎯 Use Express to create your server, using both GET and POST endpoints.
• 🎯 Build a React form for users to create posts.
• 🎯 Create multiple pages using React Router.
• 🎯 Design a database schema, and seed the database with some realistic data.
• 🎯 Use SQL to retrieve posts from the database in your Express server.
• 🎯 Display all posts using .map().
ALL DONE

Stretch:
• 🏹 Allow users to delete posts.
• 🏹 Add ‘like’ functionality on posts.
• 🏹 Create dynamic pages using react-router-dom.
• 🏹 Create additional SQL queries to show filtered posts.

Remaining Stretch:
• 🏹 Use react-router-dom to create a dedicated route for the categories
    For example, /posts/:categoryName.

-->
