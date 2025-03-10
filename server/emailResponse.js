module.exports = (name) => {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 25px; 
                    border: 1px solid #ffd700; border-radius: 10px; background-color: #f4f8ff; 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
            
            <h2 style="color: #004080; margin-bottom: 15px;">Thank You for Reaching Out!</h2>
            
            <p style="color: #333; font-size: 16px;">
                Dear <strong>${name}</strong>,  
                <br><br>
                We appreciate your inquiry and are excited to assist you! Our team has received your request and will get back to you <strong>as soon as possible.</strong>  
            </p>

            <div style="margin: 20px 0; background-color: #004080; color: white; padding: 15px; 
                        border-radius: 8px; font-size: 16px; font-weight: bold;">
                <p style="margin: 0;">If you have urgent queries, feel free to reply to this email, and we’ll prioritize your request.</p>
            </div>

            <p style="color: #333; font-size: 16px;">
                Meanwhile, feel free to explore more about our services on our website.
            </p>

            <a href="https://yourwebsite.com" target="_blank" 
               style="display: inline-block; padding: 12px 20px; background-color: #004080; 
                      color: #ffd700; text-decoration: none; border-radius: 6px; font-size: 16px; 
                      margin-top: 15px; font-weight: bold;">
                Visit Our Website
            </a>

            <p style="color: #555; font-size: 14px; margin-top: 20px;">
                Best regards,  
                <br> <strong>Your Website Team</strong>
            </p>
        </div>
    `;
};
