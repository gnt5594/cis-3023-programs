function $(id)
{
    return document.getElementById(id);
}//function closed



 function calculate_click()
 {
    var subTotal, taxRate , shippingCharges, salesTax, total;
    subTotal = parseFloat($("sub_total").value);
    taxRate = parseFloat($("tax_rate").value);
    shippingCharges = parseFloat($("shipping_charges").value);
    //called the minions
    taxRate = (taxRate/100);
    //made taxRate into decimal
    salesTax = subTotal * taxRate;
    total = subTotal+shippingCharges+salesTax;
    //caluclated totals
    $("sales_tax").value = "$" + salesTax.toFixed(2);
    $("total").value = "$" + total.toFixed(2);
    //return value back to html
    
    return false;
    // makes form return false so calculations go on labels instead of submitting to another form
 }//function closed 
 
 window.onload = function () 
{
    $("sub_total").value = "";
    $("tax_rate").value = "";
    $("shipping_charges").value = "";
    $("sales_tax").value = "";
    $("total").value ="";
    //clears fields when refreshed 
    $("sub_total").focus();
    //put arrow at subtotal 
}; 