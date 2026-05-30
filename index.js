// async function generatePDF() {

//     const { jsPDF } = window.jspdf;

//     const doc = new jsPDF();

//     const customerName =
//         document.getElementById("customerName").value;

//     const customerPhone =
//         document.getElementById("customerPhone").value;

//     const productName =
//         document.getElementById("productName").value;

//     const productCategory =
//         document.getElementById("productCategory").value;

//     const productPrice =
//         document.getElementById("productPrice").value;

//     // اللوجو
//     const logo =
//       "https://via.placeholder.com/120x60.png?text=LOGO";

//     doc.addImage(logo, "PNG", 10, 10, 40, 20);

//     doc.setFontSize(20);
//     doc.text("INVOICE", 105, 20, { align: "center" });

//     doc.setFontSize(12);

//     doc.text(`Customer: ${customerName}`, 10, 50);
//     doc.text(`Phone: ${customerPhone}`, 10, 60);

//     doc.text("---------------------------------",10,75);

//     doc.text(`Product: ${productName}`,10,90);
//     doc.text(`Category: ${productCategory}`,10,100);
//     doc.text(`Price: ${productPrice} EGP`,10,110);

//     doc.text("---------------------------------",10,125);

//     doc.setFontSize(16);
//     doc.text(
//         `Total: ${productPrice} EGP`,
//         10,
//         140
//     );

//     doc.save(`invoice-${customerName}.pdf`);
// }