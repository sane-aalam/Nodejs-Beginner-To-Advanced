function calculateCartTotalSolveIssue() {
  // let is not hoisted like var (temporal dead zone)
  let total = 500;
  let discount = 0;

  if (total > 400) {
    discount = 50;
  } else if (total == 500) {
    discount = 100;
  } else if (total < 1000) {
    discount = 10;
  }

  console.log("Total before discount:", total); // 500
  console.log("Discount applied:", discount); // 50
  console.log("Final Total:", total - discount); // 450

  // compare with value
  console.log(total == discount);
  console.log(1 === 1);
  console.log("1" === 1);
}

calculateCartTotalSolveIssue();
