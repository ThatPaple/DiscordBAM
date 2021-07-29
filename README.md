<h3 align="center">DiscordBAM - Ban Appeal Manager</h3>
  <p align="center">
    Google Forms and Google Sheets Discord integration.
    <br />
</p>




<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <ul>
    <li>
      <a href="#google-forms">Google Forms</a> </li>
     <a href="#google-sheets">Google Sheets</a>
    </ul>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project started with a need. We have identified the need for notifications when a ban appeal is submitted through Google Forms, there are options such as Zapier, but we've decided to take the route where we have the most control over what we see and get. It is ideal to mention that the project itself is ideal for moderators already using Google Forms as a ban appeal system. You need a Google Form already set up in order to use this, this is an script that extends the functionality to Discord, not a direct replacement for a ban appeal system!

Here's the *why* :
* Time is valuable, you should not be required to check your ban appeal forms every day, simply, you'll be notified
* This method gives you absolute control over what you see and get (given that you edit the template provided)
* Because cats are liquid

Of course, the templates that I provide may not be the best of both worlds, yet, if you do create a better one or expand on the one I have provided, please check out the <a href="#contributing">contributing</a> section of this readme.

<!-- GETTING STARTED -->
## Getting Started

This project is built for ban appeals that rely on Google Forms.

### Google Forms

* Within your form, open the script editor feature 
* Clear your .gs file and paste in the contents from the google-forms.gs file 
* Please make sure to read the comment within the .gs file that I have provided
* Replace all the necessary values.
* Within your trigger, set the gs script to run "on submit".
* All done!

If all is successful, whenever someone fills in the ban appeal, you will be notified with an embed pushed to the web-hook that you've set up. Essentially, you have the control where the embed ends up based on in what channel the web-hook was created. 

### Google Sheets

This is only useful if : 
* You use Google Sheets to track your ban appeals.
* You use Google Sheets to mark the status of the ban appeal.

Great! If you pointed at your screen while nodding, this is the thing for you.
The script provided has a few expectations.
* The first column within the Google sheet is "status", this is where you'd type in if the appeal is accepted or denied.
* The third column is the discord tag. 

Both expectations can be changed within the code.

How to get this working?
* Within your sheets, open the script editor feature 
* Clear your .gs file and paste in the contents from the google-forms.gs file 
* Please make sure to read the comment within the .gs file that I have provided
* Replace all the necessary values.
* Within your trigger, set the gs script to run "on edit".
* All done!

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ThatPaple/DiscordBAM/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

There is no license, I only ask to get credit in case you create a fork 🧡



<!-- CONTACT -->
## Contact

Discord : thatpaple#9995
Email : thatpaple@gmail.com
Project Link: [https://github.com/ThatPaple/DiscordBAM](https://github.com/ThatPaple/DiscordBAM)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Readme Template](https://github.com/othneildrew/Best-README-Template/)
