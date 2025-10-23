# MetricsApp

  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Beta Release

https://scholarsportal.github.io/metrics-report/

<br><br>
<br><br>
<br><br>

![screenshot](imageFolder/screenshot.png)

  ## 📜 Description
**Borealis**, the Canadian Dataverse Repository, is a bilingual, multidisciplinary, secure, Canadian research data repository, supported by academic libraries and research institutions across Canada. Borealis supports open discovery, management, sharing, and preservation of Canadian research data.

**The Borealis Metrics Report** allows users to curate and analyze usage data across the entire platform and within specific collections. The interface is available in English or  _en français_. Please note that Collection names and data are represented in their original language, as are the corresponding metadata.[](https://github.com/scholarsportal/Dataverse-Data-Explorer?tab=readme-ov-file#-description)

The new beta **Borealis Metrics Report** stands separately and expands on the existing platform by offering additional analytics options and tools for exploring Borealis data that were not available in the previous app. The live version of the original Borealis Metrics Report remains active and accessible.

## 🎉 Features

[](https://github.com/scholarsportal/Dataverse-Data-Explorer?tab=readme-ov-file#-features)

-   🌳 **Data Tree** - Navigate collections and dataverses in it's intended data structure
-   🗓️ **Date  Selection** - Adjust date range for select months or timeframe
-   🔁 **Graph Toggle** - Show/hide visualizations
-   📤 **PDF / XLSX Export** - Download selected data in either XLSX or PDF format
-   📥 **Legacy Data** - Download data from the original metrics page  
-   🌐 **Available in English and French**

## 💬 Contact & FAQ

For contact Information or FAQ, make your way through the metrics report demo [https://scholarsportal.github.io/metrics-report/] and navigate your way through the contact and FAQ tabs 

### _Feedback Form_

In order to ensure that the new Borealis Metrics Reporting application is fully functional and beneficial to the Canadian research data community, we are asking Borealis member institutions to take a few moments to provide feedback about their experience using the new Borealis Metrics Report. 

_More information navigate to the contact tab of the metrics report_

## 📖 Guide 
### _Left-hand Panel_

#### **Collections Tree**

The Collections Tree is a configuration tool that allows users to navigate and search over 1,500 collections in their intended, hierarchical data structure. Collections and subcollections follow a nested structure, with reports available for the collection as a whole or for specific subcollections.

To view metrics for a specific collection or subcollection, click the  **“Full Report”**  button in the nested tree structure.

#### **Date Range**

Users can examine data within any specific timeframe, from its creation to the most recent month.

### _Centre and Right-hand Panel_

#### **Graph Dashboard**

Graphs are generated when the  **“Monthly”**  and/or  **“Cumulative”**  metrics are selected at the top of bar graphs or from the legend next to pie graphs. Graph data ranges will adjust based on the selected dates and collections.

#### **Exports**

The Borealis Metrics Report currently supports four export options:

-   **Excel**  – Exports data from the selected collection and date range into a multi-sheet XLSX file.
-   **PDF**  – Exports the graphs and right-hand panel metrics for the selected collections and date range into a single organized PDF.
-   **Legacy**  – Structured data export from a previous version of the Borealis Metrics Report. Data in this export may be formatted differently than other export formats.
-   **Make Data Count**  – Exports usage metrics compliant with Make Data Count standards for research data metrics.

#### **Collections**

The number of collections currently hosted on Borealis. This metric does not update based on date or selected collection as it is representative of current Borealis holdings.

#### **Datasets**

The number of datasets within a selected collection.

#### **Files**

The number of files within a selected collection.

#### **Downloads**

Number of downloaded files from a selected collection.

#### **Users**

The number of user accounts in Borealis.

#### **Authors**

The number of authors with published contributions in a selected collection.

#### **Storage Usage**

Total file size for a selected dataverse.

#### **Subject Breakdown**

Breakdown of assigned subjects for datasets and their distribution within a selected collection.

#### **File Breakdown**

Breakdown of file types and extensions of files within a selected collection, as well as their distribution.

## 📦 Prerequisites
Before you begin, make sure you have the following installed:

-   **Node.js** (v18.x recommended)
    
-   **npm** (comes with Node.js)
    
-   **Angular CLI** (version 18+)
    

Install Angular CLI globally if you haven't:

`npm install -g @angular/cli`

## ⚙️ Installation

#### 1. Clone the Repository

`git clone https://github.com/your-username/metrics-report.git cd metrics-app` 

#### 2. Install Dependencies

`npm install` 

#### 3. Run the App (Development Mode)

`ng serve` 

Navigate to: [http://localhost:4200](http://localhost:4200)

## Code scaffolding
  

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build


Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
