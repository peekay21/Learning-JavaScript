function onOpen(){
  const ui = SpreadsheetApp.getUi();
  const menu=ui.createMenu("AutoFill Docs");
  menu.addItem("Create New Docs", "createNewGoogleDocs");
  menu.addToUi();
}

function createNewGoogleDocs(){
  const googleDocTemplate = DriveApp.getFileById("1VNmkW1JD1GN6eaLjdQe89A8dhUyqzR0R0wHq6_Bvmok");
  const destinationFolder = DriveApp.getFolderById("1uQSGQw2BI-onmAFx869gkBQuI7fj57h9");

  const sheet = SpreadsheetApp.getActive().getSheetByName('Sheet1');
  const rows = sheet.getDataRange().getValues();
  Logger.log(rows);
  rows.forEach(function(row,index){

    if(index === 0) return;
    if(row[5]) return;
    Logger.log(row);

    const copy=googleDocTemplate.makeCopy(`${row[1]},${row[2]} Employee Details`,destinationFolder);
    const doc = DocumentApp.openById(copy.getId());
    const body = doc.getBody();
    const friendlyDate = new Date(row[3]).toLocaleDateString();

    body.replaceText('{{First Name}}', row[0]);
    body.replaceText('{{Last Name}}', row[1]);
    body.replaceText('{{Position}}', row[2]);
    body.replaceText('{{Hire Date}}', friendlyDate);
    body.replaceText('{{Hourly Wage}}', row[4]);

    doc.saveAndClose();
    const pdfBlob = doc.getAs('application/pdf');
    const pdfFile = destinationFolder.createFile(pdfBlob.setName(copy.getName() + '.pdf'));
    const url = pdfFile.getUrl();
    sheet.getRange(index + 1, 6).setValue(url);




  })


}