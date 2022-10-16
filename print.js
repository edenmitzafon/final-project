function printDiv(wrapper1) {
  var printContents = document.getElementById(wrapper1).innerHTML;
  w=window.open();
  w.document.write(printContents);
  w.print();
  w.close();
}