<?php
  include_once 'header.php'
  ?>
  
    <header>
        <h1>Register with us</h1>
    </header>

    <main>
        <section class="contact-form-section">
            <form id="contact-form" action="#" method="post" class="contact-form">
                <div class="input-group">
                    <label name="name" for="name" class="contact-label">Full Name</label>
                    <input type="text" id="name" name="name" class="contact-input" required>
                </div>
                
                <div class="input-group">
                    <label name="email" for="email" class="contact-label">Email</label>
                    <input type="email" id="email" name="email" class="contact-input" required>
                </div>

                <div class="input-group">
                    <label name="service" for="service" class="contact-label">Service</label>
                    <input type="text" id="service" name="service" class="contact-input" required>
                </div>
                
                <div class="input-group">
                    <label name="message" for="message" class="contact-label">Message</label>
                    <textarea id="message" name="message" class="contact-textarea" rows="6" required></textarea>
                </div>
                
                <div class="input-group">
                    <button type="submit" class="btn">Send Message</button>
                </div>
            </form>
        </section>
    </main>


</body>
<footer>
        <p>&copy; 2024 Victorian Immunobullous Network. All rights reserved.</p>
    </footer>
</html>
