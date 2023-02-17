
 (function() {
  console.log("called lol")
  
}());




function calc(){
  var sum = 0;

  $("table.items td.itemTotal").each(function(){

    
    var value = $(this).text();
    sum += parseFloat(value);
    $("table.pricing td.subtotal").text("रु" + sum.toFixed(2));
    console.log("sum is "+ sum)
    
  });
}

var removedItem,
    sum = 0;

      
      
    

function updateSubTotal(){
  
  $("table.items td.itemTotal").each(function(){
    var value = $(this).text();
    sum += parseFloat(value);
    $("table.pricing td.subtotal").text("रु" + sum.toFixed(2));
    console.log("sum is "+ sum)
    
  });
}

function addTax() {
  var tax = parseFloat(sum * 0.13).toFixed(2);
  $("table.pricing td.tax").text("रु" + tax);
  console.log("sum is "+ sum)
}

function calculateTotal() {
  var subtotal = $("table.pricing td.subtotal").text(),
      tax = $("table.pricing td.tax").text(),total;
  subtotal = formatNum(subtotal);
  tax = formatNum(tax);
  
  total = (subtotal + tax ).toFixed(2);
  
  $("table.pricing td.orderTotal").text("रु" + total);
  console.log("sum is "+ sum)
}

function calculatePrices() {
  
  updateSubTotal();
  addTax();
  calculateTotal();
  console.log("sum is "+ sum)
}

function formatNum(num) {
  return parseFloat(num.replace(/[^0-9-.]/g, ''));
}



$(function (){


  $(document).on("click", ".Next", function(){
   
    var sum = 0;
  $("table > tbody > tr "). each(function(index, rate1) {

    var rate = $(this).find('td.rate').text();
    var quantity =  $(this).find('td > select.quantity').val();

    var Rsum = rate*quantity;

    sum=sum + Rsum; 

    
    Rsum = 0;

});
console.log(sum)
  });

  $(document).on("click", ".selectRoom", function(){
   
    $("table > tbody > tr "). each(function(index, rate1) {
      
      var quantity = $(this).find('td > select.quantity').val();
    
      var rate = $(this).find('td.rate').text();
      $(this).find('td.itemTotal').text(quantity*rate);


      });

   
      
    
  });

  $(document).on("click", ".cartButton", function(){
   
    $("table > tbody > tr "). each(function(index, rate1) {
      
      var quantity = $(this).find('td > select.quantity').val();
      var rate = $(this).find('td.rate').text();
      $(this).find('td.itemTotal').text(quantity*rate);

      });
    
  });

  $(document).on("change", "select.quantity", function(){
    var val = $(this).val(),
        pricePer,
        total
      sum = 0;
      pricePer = $(this).parents("td").prev("td").text();

      total = parseFloat(val * pricePer).toFixed(2);
   
      $(this).parents("td").siblings(".itemTotal").text(total);

      calculatePrices();
    
  });
  
});
