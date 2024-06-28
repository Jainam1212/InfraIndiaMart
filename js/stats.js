// const counterNum = document.querySelectorAll(".counter-numbers");
// const speed = 20;

// counterNum.forEach((curElem) => {
//   const updateNumber = () => {
//     const targetNumber = parseInt(curElem.dataset.number);
//     //console.log(targetNumber);

//     const initialNumber = parseInt(curElem.innerText);
//     // console.log(initialNumber);

//     const incrementNumber = Math.trunc(targetNumber / speed);
//     // console.log(incrementNumber);

//     if (initialNumber < targetNumber) {
//       curElem.innerText = `${initialNumber + incrementNumber}+`;
//       setTimeout(updateNumber, 100);
//     }
//   };

//   updateNumber();
// });


document.addEventListener("DOMContentLoaded", () => {
  const counterNum = document.querySelectorAll(".counter-numbers");
  const speed = 20;

  const updateNumber = (curElem) => {
    const targetNumber = parseInt(curElem.dataset.number);
    const initialNumber = parseInt(curElem.innerText);
    const incrementNumber = Math.trunc(targetNumber / speed);

    if (initialNumber < targetNumber) {
      curElem.innerText = `${initialNumber + incrementNumber}+`;
      setTimeout(() => updateNumber(curElem), 50);
    }
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const curElem = entry.target;
        updateNumber(curElem);
        observer.unobserve(curElem); // Stop observing once the animation starts
      }
    });
  }, observerOptions);

  counterNum.forEach((curElem) => {
    observer.observe(curElem);
  });
});
