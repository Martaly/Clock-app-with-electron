const {app, BrowserWindow} =require("electron");
const path = require("path");

function createWindow(){

    //creating window
    let win = new BrowserWindow({
    width:210,
    height:400,
    resizable:false
})

//load html file from our dir
win.loadFile(path.join(__dirname, "index.html"));

//open devtools
win.webContents.openDevTools()

//whe nwindow is closed
win.on("closed", () => {
    win = null;
})

};

//run createWindow function
app.on("ready", createWindow);

//quite when all windows closed
app.on("window-all-closed", () => {
    //check if not darwin platform(mac)
    if(process.platform !== "darwin") {
        app.quit();
    }
})
