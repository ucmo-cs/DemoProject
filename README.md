<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
--> 
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ucmo-cs/DemoProject">
  
  </a>

<h3 align="center"> UCMO Computer Science - SE Demo Project</h3>

  <p align="center">
    A simple CRUD application that allows users to add, edit, and delete books from a database.
    <br />
    <br />
    <br />
 

  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This Project is suppose to supply an a example for UCMO Computer Science students enrolled in the Software Engineering course. This project is a simple CRUD  (Create, Read, Update, and Delete) application that allows users to add, edit, and delete books from a database. The project is split into two parts, the frontend and the backend. The frontend is a React.js application that uses Bootstrap for styling. The backend is a Spring Boot application that uses a h2 database to store the books. The frontend and backend are connected using REST API calls.



<!--Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `DemoProject`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`-->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Redux][Redux.js]][Redux-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Spring][Spring.io]][Spring.io-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* Have Node.js lts version installed 
* Have OpenJDK 17 installed


### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/ucmo-cs/DemoProject.git 
   ```
2. Go to the path of the project
   ```sh
   cd DemoProject
   ```
3. Goto the spring boot project
   ```sh
   cd SpringReact 
   ```
4. Install Gradle dependencies
   
   ```sh
    ./gradlew build
    ```
5. go to the path of the front end project
   ```sh
   cd ../bookfrontend
   ``` 
6. Install NPM packages
   ```sh
   npm install
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To run the frontend in development server go the path of the frontend project and run the following command.
   ```sh
   npm run dev 
   ```

To build the frontend project as static files first go the path of the frontend project and run the following command.
   ```sh
    npm run build 
  ```

To Run the backend go to the path of the backend project and run the following command.
   ```sh
   ./gradlew bootRun 
   ```





<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ucmo-cs/DemoProject.svg?style=for-the-badge
[contributors-url]: https://github.com/ucmo-cs/DemoProject/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ucmo-cs/DemoProject.svg?style=for-the-badge
[forks-url]: https://github.com/ucmo-cs/DemoProject/network/members
[stars-shield]: https://img.shields.io/github/stars/ucmo-cs/DemoProject.svg?style=for-the-badge
[stars-url]: https://github.com/ucmo-cs/DemoProject/stargazers
[issues-shield]: https://img.shields.io/github/issues/ucmo-cs/DemoProject.svg?style=for-the-badge
[issues-url]: https://github.com/ucmo-cs/DemoProject/issues
[license-shield]: https://img.shields.io/github/license/ucmo-cs/DemoProject.svg?style=for-the-badge
[license-url]: https://github.com/ucmo-cs/DemoProject/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Spring.io-url]: https://spring.io/
[Spring.io]: https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot
[Redux.js]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
