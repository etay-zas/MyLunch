function list_all_files_inside_one_folder_without_subfolders(){
    var FOLDER_ID = "1-YRSJoXidyMZ0TXcEh-4zk4J58XMih9S";
    var CURRNET_SPREADSHEET_NAME = "list";
    var DATA_SHEET_NAME = "images list";

    var sheet = SpreadsheetApp.getActive().getSheetByName(DATA_SHEET_NAME);
    var all = sheet.getRange("A:C");
    all.clearContent();

    var folder = DriveApp.getFolderById(FOLDER_ID);

    var list = [];

    var files = folder.getFiles();
    while (files.hasNext()){
        file = files.next();
        if (file.getName() != CURRNET_SPREADSHEET_NAME){
            var row = []
            var full_name = file.getName();
            var name = full_name.split('.')[0];
            row.push(full_name, name, file.getId())
            list.push(row);
        }
    }
    sheet.getRange(1,1,list.length,list[0].length).setValues(list);
}
