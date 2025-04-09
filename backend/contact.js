const path = require('path');
const nodemailer = require('nodemailer');

exports.con = async (req,res)=>{
    // console.log("mailing ...");
    const {name ,email, subject ,message} = req.body;
    console.log(name ,email, subject ,message);

    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
        user: 'hostingweb67@gmail.com',       
        pass: 'pzbh nmbd nthy siph'     
        }
    });


    const mailOptions = {
        from: email,
        to: 'hostingweb67@gmail.com',         
        subject: `New Contact Form: ${subject}`,
        html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
        `
    };

    try {
        // 3. Send mail
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.render("contact", { msg: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.render("contact", { msg: "Failed to send message. Try again later." });
    }
  
}

