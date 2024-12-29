
function generatePdf() {
    let p = [];
    let i = 1;
    products.forEach(product => {
      if (product.checked == true) {
        // Only include Product Name, Quantity, and Unit
        p.push([i++, product.name, product.quantity, product.unit]);
      }
    });
  
    props.invoice.table = p;
  
    var pdfObject = jsPDFInvoiceTemplate.default(props);
    console.log('Object created:', pdfObject);
  }
  
  var props = {
    outputType: jsPDFInvoiceTemplate.OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: "solidernet_2024",
    orientationLandscape: false,
    compress: true,
    business: {
      name: "Solidernet",
      address: "Temara , Maroc",
      phone: "(+212) 0667-041734",
      email: "solidernet@hotmail.com",
      website: "https://solidernet.ma",
    },
    contact: {
      label: "Inventaire par :",
      name: localStorage.getItem('clientName'),
    },
    invoice: {
      label: "Inventaire #: ",
      num: 1,
      invDate: "-", // Add date dynamically if needed
      invGenDate: "-", // Add generation date dynamically if needed
      headerBorder: false,
      tableBodyBorder: false,
      header: [
        { 
          title: "#", 
          style: { width: 10 } 
        },
        { 
          title: "Nom du Produit", 
          style: { 
            width: 90, 
            fontSize: 12, 
            fontStyle: 'bold' // Make the product name bold 
          } 
        },
        { 
          title: "Quantité", 
          style: { 
            width: 30, 
            fontSize: 12, 
            fontStyle: 'normal' 
          } 
        },
        { 
          title: "Unité", 
          style: { 
            width: 10, 
            fontSize: 12, 
            fontStyle: 'normal' 
          } 
        }
      ],
      table: [], // This will be dynamically populated
    },
  };
  
  // Update the `generatePdf` function
  function generatePdf() {
    let tableData = [];
    let rowIndex = 1;
    
    products.forEach(product => {
      if (product.checked) {
        tableData.push([
          rowIndex++, 
          product.name, 
          product.quantity, 
          product.unit
        ]);
      }
    });
  
    props.invoice.table = tableData;
  
    const pdfObject = jsPDFInvoiceTemplate.default(props);
    console.log("PDF generated:", pdfObject);
  }
  
  
  