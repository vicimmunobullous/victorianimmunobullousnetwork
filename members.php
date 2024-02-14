<?php
  include_once 'header.php'
  ?>

    <header>
        <h1>Members</h1>
    </header>

<!-- Search Bar -->
<div class='search-container' id="search-container">
    <input type="text" id="search-bar" placeholder="Enter names...">
    <button class='btn' onclick="searchTable()">Search</button>
</div>

<!-- Members Table -->
<table id="members-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Specialty</th>
            <th>Appointment</th>
        </tr>
    </thead>
    <tbody>
        <!-- Rows of members will go here -->
        <!-- Example row: -->
        <tr>
            <td>Dr Laura Scardamglia</td>
            <td>Footscray</td>
            <td>Dermatologist</td>
            <td>555-1234</td>
        </tr>
        <tr>
            <td>Dr Tami Yap</td>
            <td>Footscray</td>
            <td>Oral Mucosal Physician</td>
            <td>555-1234</td>
        </tr>
        <tr>
            <td>Dr John Doe</td>
            <td>South Yarra</td>
            <td>Hygienist</td>
            <td>555-1234</td>
        </tr>
        <!-- More rows can be added here later -->
    </tbody>
</table>

</body>
<footer>
        <p>&copy; 2024 Victorian Immunobullous Network. All rights reserved.</p>
    </footer>
</html>
