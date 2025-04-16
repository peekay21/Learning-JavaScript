function sendCustomizedEmails() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    const data = sheet.getDataRange().getValues();
  
    // Skip header row
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const subject = row[0]; // Assuming Subject is in column A
      const email = row[1];   // Assuming Email is in column B
      const pdfLink = row[2]; // Assuming PDF Link is in column C (optional)
      //const fileId = getFileIdFromUrl(pdfLink);
      const fileId = row[3];  // Assuming File ID is in column D
  
      const message = `Dear Candidate,
  
                        Kindly download your admit card by clicking the link below.
  
                        Best regards,
                        Pradip Kumar Murmu`;
  
      try {
        // Get the file from Drive
        const file = DriveApp.getFileById(fileId);
        const pdfBlob = file.getAs(MimeType.PDF);
  
        // Send the email with the PDF attachment
        GmailApp.sendEmail(email, subject, message, {
          attachments: [pdfBlob],
          name: "Pradip Kumar Murmu"
        });
  
        Logger.log(`Email sent to ${email}`);
      } catch (error) {
        Logger.log(`Failed to send email to ${email}: ${error}`);
      }
    }
  }
  