/*
console.log(x);
!ReferenceError: x is not defined
*/

// Buggy Code (Hoisting Issue)
function calculateCartTotal() {
  console.log("Total before discount:", total);
  // undefined due to hoisting
  var total = 500;

  if (total > 400) {
    var discount = 50;
  }

  console.log("Discount applied:", discount);
  // 50 (var is function-scoped & hoisted)
  console.log("Final Total:", total - discount);
}

calculateCartTotal();

// ✅ Correct Code Using let (Fixes Hoisting Confusion)
function calculateCartTotalSolveIssue() {
  // let is not hoisted like var (temporal dead zone)
  let total = 500;
  let discount = 0;
  if (total > 400) {
    discount = 50;
  }

  console.log("Total before discount:", total); // 500
  console.log("Discount applied:", discount); // 50
  console.log("Final Total:", total - discount); // 450
}

calculateCartTotalSolveIssue();
