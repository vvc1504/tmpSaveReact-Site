import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "ADDPRODUCT": "ADD PRODUCT",
      "Product List": "Product list ",
      "Product Name": "Product Name ",
      "Mrp": 'Mrp',
      "Addproduct": 'Add product',
      "ProductName": 'Product Name',
      "mrp": 'Mrp',
      "HELP Guide": 'HELP Guide',
      "Submit": 'Submit',
      "Home": 'Home',
      "Products": 'Products',
      "Sales": 'Sales',
      "Purchase": 'Purchase',
      "Inventory": 'Inventory',
      "Reports": 'Reports',
      "Employee": 'Employee',
      "ProductDetails": 'ProductDetails',
      "Profile": 'Profile',
      "Product Mrp": 'Product Mrp',
      "cancel": 'cancel',
      "This is menu Bar": 'This is menu Bar',
      "This will redirect to add Product form": 'This will redirect to add Product form',
      "This is Product List": 'This is Product List',
      "This is Product Details": 'This is Product Details',
      "This is  add Product form": 'This is  add Product form',
      "Here enter Product Name": 'Here enter Product Name ',
      "Here enter Product MRP": 'Here enter Product MRP',
      "Enter above both and click here to submit": 'Enter above both and click here to submit',
     
    }
  },
  tel: {
    translation: {
      "ADDPRODUCT": " ఆడ్ ప్రోడక్ట్ ",
      'Product List':'ప్రోడక్ట్ లిస్ట్',
      'Product Name':'ప్రోడక్ట్ పేరు',
      "Mrp": 'ఖరీదు',
      "Addproduct": 'ఆడ్ ప్రోడక్ట్',
      "ProductName": 'ప్రోడక్ట్ పేరు',
      "mrp": 'ఖరీదు',
      "HELP Guide": 'గైడ్ సహాయ',
      "Submit": 'సబ్మిట్',
      "Home": 'హోమ్',
      "Products": 'ప్రొడక్ట్స్',
      "Sales": 'సేల్స్',
      "Purchase": 'పూర్చసే',
      "Inventory": 'ఇన్వెంటరీ',
      "Reports": 'రిపోర్ట్స్',
      "Employee": 'ఎంప్లాయ్',
      "Profile": 'ప్రొఫైల్',
      "ProductDetails": 'ప్రోడక్ట్ వివరాలు',
      "Product Mrp": 'ప్రోడక్ట్ ఖరీదు',
      "cancel": 'కాన్సుల్',
      "This is menu Bar": 'ఇది మెనూ బార్',
      "This will redirect to add Product form": 'ఆడ్ ప్రోడక్ట్ ఫారమ్‌ను కి ఇది మళ్ళించబడుతుంది',
      "This is Product List": 'ఇది ప్రోడక్ట్ లిస్ట్',
      "This is Product Details": 'ఇది ప్రోడక్ట్ వివరాలు',
      "This is  add Product form": 'ఇది ప్రోడక్ట్ ఫారమ్',
      "Here enter Product Name": 'ఇక్కడ ప్రోడక్ట్ పేరును నమోదు చేయండి',
      "Here enter Product MRP": 'ఇక్కడ ప్రోడక్ట్ ఖరీదు ని నమోదు చేయండి',
      "Enter above both and click here to submit": 'పైన రెండింటి ఎంటర్ చేసి సబ్మిట్కి  ఇక్కడ క్లిక్ చేయండి',
      
    }
  }
};
 
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;