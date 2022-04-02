const a = 1;

function x() {
  const b = 10;

  y();
}

function y() {
  console.log(a);
}

x();
y();
