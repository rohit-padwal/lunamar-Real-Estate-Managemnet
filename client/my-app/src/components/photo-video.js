import React from 'react';

function ServicesInformation(){

    return (
        <>
 <div class="navbar">
        <div>
                    <img src="assets/images/Lunamar-logos.jpeg" alt="subdivision image" height="20%" width="30%"> </img>

        </div>
        <nav>
            <ul id='MenuItems'>
                <li><a href='home.html'>Home</a></li>
                <li><a href='aboutus.html'>About Us</a></li>
                <li><a href='services-information.html'>Services</a></li>
                <li><a href='contact.html'>Contact</a></li>
                <li><a href='login.html'>Login</a></li>
                <li><a href='employee.html'>Employee</a></li>

            </ul>
        </nav>
    </div>


    <div class="sidebar">
    
        <a href='enabled-services-resident.html'>Manage Service</a>
        <a href='manage-visitor-residentview.html'>Manage Visitor</a>
        <a href='upload-pic-video-resident.html'>Upload picture and Video </a>

        <a href='chat-resident.html'>Chat</a>

    </div>

    <div>
        <form >
            <div>
              <label for="file">Choose file to upload</label>
              <input type="file" name="" id="" style="margin-left: 50%;"> </input>
            </div>
            <div>
              <button>Submit</button>
            </div>
           </form>
    </div>
        </>
    );
}

export default ServicesInformation;