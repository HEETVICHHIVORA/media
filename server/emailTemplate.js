module.exports = (name, email, message) => {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; 
                    border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
            <h2 style="color: #333;">New Service Inquiry</h2>
            <p style="color: #555;">A potential customer has reached out to inquire about your services:</p>
            
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
            
            <h3 style="color: #333;">Message:</h3>
            <p style="background-color: #eee; padding: 10px; border-radius: 5px;">${message}</p>

            <p style="color: #555;">Please follow up with the user as soon as possible.</p>

            <p style="color: #555;">Best regards, <br> Your Website Team</p>
        </div>
    `;
};
