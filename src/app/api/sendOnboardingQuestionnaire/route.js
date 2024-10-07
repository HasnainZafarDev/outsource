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
    subject: "Onboarding Taxi Services Questionnaire ",

    // text: `Company Name: ${formData.companyName}\n
    //        Business Address: ${formData.businessAddress}\n
    //        Contact Person: ${formData.contactPerson}\n
    //        Contact Title: ${formData.contactTitle}\n
    //        Contact Email: ${formData.contactEmail}\n
    //        Contact Phone: ${formData.contactPhone}\n
    //        Current Dispatch System: ${formData.currentDispatchSystem}\n
    //        Company ID: ${formData.companyId}\n
    //        Login Link: ${formData.loginLink}\n
    //        Username: ${formData.username}\n
    //        Password: ${formData.password}\n
    //        Extension No: ${formData.extensionNo}\n
    //        Wallboard Link: ${formData.wallboardLink}\n
    //        Phone Type: ${formData.phoneType}\n
    //        Softphone Link: ${formData.softphoneLink}\n
    //        Softphone Login: ${formData.softphoneLogin}\n
    //        Physical Phone Preferences: ${formData.physicalPhonePref}\n
    //        Operating Hours: ${formData.operatingHours}\n
    //        Peak Hours: ${formData.peakHours}\n
    //        Night Shift Requirements: ${formData.nightShiftRequirements}\n
    //        Staff Required: ${formData.staffRequired}\n
    //        Fleet Size: ${formData.fleetSize}\n
    //        Fleet Types: ${formData.fleetTypes}\n
    //        Vehicle Preferences: ${formData.vehiclePreferences}\n`,

    html: `
    <h2>Onboarding Questionnaire Submission</h2>
    <p><strong>Company Name:</strong> <strong>${
      formData.companyName
    }</strong></p>
    <p><strong>Business Address:</strong> ${formData.businessAddress}</p>
    <p><strong>Contact Person:</strong> ${formData.contactPerson}</p>
    <p><strong>Contact Title:</strong> ${formData.contactTitle}</p>
    <p><strong>Contact Email:</strong> ${formData.contactEmail}</p>
    <p><strong>Contact Phone:</strong> ${formData.contactPhone}</p>
    <p><strong>Current Dispatch System:</strong> ${
      formData.currentDispatchSystem
    }</p>
    <p><strong>Company ID:</strong> ${formData.companyId}</p>
    <p><strong>Login Link:</strong> <a href="${formData.loginLink}">${
      formData.loginLink
    }</a></p>
    <p><strong>Username:</strong> ${formData.username}</p>
    <p><strong>Password:</strong> ${formData.password}</p>
    <p><strong>Extension No:</strong> ${formData.extensionNo}</p>
    <p><strong>Wallboard Link:</strong> <a href="${formData.wallboardLink}">${
      formData.wallboardLink
    }</a></p>
    <p><strong>Wallboard Username:</strong> <a href="${
      formData.wallboardLink
    }">${formData.wallboardUsername}</a></p>
    <p><strong>Wallboard Password:</strong> <a href="${
      formData.wallboardLink
    }">${formData.wallboardPassword}</a></p>
    <p><strong>Phone Type:</strong> ${formData.phoneType}</p>
    <p><strong>Softphone Link:</strong> <a href="${formData.softphoneLink}">${
      formData.softphoneLink
    }</a></p>
    <p><strong>Softphone Username:</strong> <a href="${
      formData.softphoneLink
    }">${formData.softphoneUsername}</a></p>
    <p><strong>Softphone Password:</strong> <a href="${
      formData.softphoneLink
    }">${formData.softphonePassword}</a></p>
    <p><strong>Physical Phone Preferences:</strong> ${
      formData.physicalPhonePref
    }</p>
    <p><strong>Operating Hours:</strong> ${formData.operatingHours}</p>
    <p><strong>Peak Hours:</strong> ${formData.peakHours}</p>
    <p><strong>Expected Call Volumes:</strong> ${
      formData.expectedCallVolumes
    }</p>
    <p><strong>Night Shift Requirements:</strong> ${
      formData.nightShiftRequirements
    }</p>
    <p><strong>Staff Required:</strong> ${formData.staffRequired}</p>
    <p><strong>Fleet Size:</strong> ${formData.fleetSize}</p>
    <p><strong>Fleet Types:</strong> ${formData.fleetTypes}</p>
   <p><strong>Vehicle Counts:</strong> ${Object.entries(formData.vehicleCounts)
     .map(([type, count]) => `${type}: ${count}`)
     .join(", ")}</p>
    <p><strong>Vehicle Preferences:</strong> ${formData.vehiclePreferences}</p>
  `,
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
    return new Response(
      JSON.stringify({ error: "Failed to send onboarding questionnaire" }),
      {
        status: 500,
      }
    );
  }
}
