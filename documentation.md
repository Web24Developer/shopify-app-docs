**1.Overview**
my-new-awesome-app
A simple react app for creating QR codes
Built with React, Javascript and Remix
Live Demo : 

**2. Installation & Setup**
*# navigate to the project folder*
cd my-new-awesome-project
*# create a new app*
shopify app init
*# get started building your app*
Build a remix app
*# start the developmemt server*
shopify app dev


**3.Project Structure**
/app
  /routes
     app._index.jsx         *# list QR codes*
     app.qrcodes.$id.jsx    *# create a QR code form*
     qrcodes.$id.jsx        *# add a public QR code route*
     qrcodes.$id.scan.jsx   *# redirect the customer to the destination URL*
  /models
     QRCode.server.js       *# get QR code and product data*
/prisma
     schema.prisma          *# add QR code data model to your database*


**4.Features**


**5.Usage Guide**


**6.Running Tests**
*# preview the app*
shopify app dev


