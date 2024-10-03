import nodemailer from "nodemailer";

export async function POST(req) {
  // Extract all the form data from the request body
  const formData = await req.json();

  // Transporter setup for sending email
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hasnainpak3@gmail.com",
      pass: "ofrdkwxxqtsknyeg",
    },
  });

  // Prepare email options
  let mailOptions = {
    from: `"${formData.contactEmail}" <hasnainpak3@gmail.com>`,
    to: "hasnainpak3@gmail.com",
    subject: "Onboarding Questionnaire Submission",
    text: `Company Name: ${formData.companyName}\n
           Business Address: ${formData.businessAddress}\n
           Contact Person: ${formData.contactPerson}\n
           Contact Title: ${formData.contactTitle}\n
           Contact Email: ${formData.contactEmail}\n
           Contact Phone: ${formData.contactPhone}\n
           Current Dispatch System: ${formData.currentDispatchSystem}\n
           Company ID: ${formData.companyId}\n
           Login Link: ${formData.loginLink}\n
           Username: ${formData.username}\n
           Password: ${formData.password}\n
           Extension No: ${formData.extensionNo}\n
           Wallboard Link: ${formData.wallboardLink}\n
           Phone Type: ${formData.phoneType}\n
           Softphone Link: ${formData.softphoneLink}\n
           Softphone Login: ${formData.softphoneLogin}\n
           Physical Phone Preferences: ${formData.physicalPhonePref}\n
           Operating Hours: ${formData.operatingHours}\n
           Peak Hours: ${formData.peakHours}\n
           Night Shift Requirements: ${formData.nightShiftRequirements}\n
           Staff Required: ${formData.staffRequired}\n
           Fleet Size: ${formData.fleetSize}\n
           Fleet Types: ${formData.fleetTypes}\n
           Vehicle Preferences: ${formData.vehiclePreferences}\n`,
    replyTo: formData.contactEmail,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Onboarding questionnaire sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error); // Log the error for debugging
    return new Response(JSON.stringify({ error: "Failed to send onboarding questionnaire" }), {
      status: 500,
    });
  }
}
