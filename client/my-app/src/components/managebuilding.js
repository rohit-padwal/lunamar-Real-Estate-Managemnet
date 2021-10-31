import React from 'react';
import sidenavmanager from './sidenavmanager';

function managebuilding(){

    return(
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
  <a href="manage-reports.html">Reports</a>
  <a href="manage-manager.html">Manage Manager</a>
  <a href="manage-building-adminview.html">Manage Building</a>
  <a href="manage-apartment-adminview.html">Manage Apartment</a>
  <a href='manage-resident-adminview.html'>Manage Resident</a>
  <a href='manage-service-adminview.html'>Manage Service</a>
  <a href='manage-visitor-admintview.html'>Manage Visitor</a>
  <a href='manage-amenities-adminview.html'>Manage Amenities</a>
  <a href='chat-admin.html'>Chat</a>

</div>
    <div id='login-form'class='login-page'>
      <div class="form-box">
          <div class='button-box'>
               <div id='btn'></div>
              
          </div>
          
   <div class="login-registering">
      <center>
          <h1>Manage Buildings</h1>
         
      </center>
   </div>
<form id='register' class='input-group-register'>
   <input type='text'class='input-field'placeholder='Name' required> </input>
   <input type="number" class='input-field' placeholder='Floors' required></input>
   <input type='number'class='input-field'placeholder='Total Apartments' required></input>
   <input type="number" class="input-field" placeholder="Occupancy" required></input>
              <button type='submit'class='submit-btn'>Submit</button>
     </form>
      </div>
  </div>
    <center>
<table>
    <tr>
      <th>Name</th>
      <th>Floors</th>
      <th>Total Apartments</th>
      <th>Actions</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>23</td>
      <td>23</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>43</td>
      <td>64</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>53</td>
      <td>344</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>45</td>
      <td>466</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>54</td>
      <td>466</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>53</td>
      <td>465</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
  </table>
</center>
        

      </>
    );
}

export default managebuilding;