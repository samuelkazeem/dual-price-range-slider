const range1 = document.getElementById('range1'),
      rangeV1 = document.getElementById('rangeV1'),
      range2 = document.getElementById('range2'),
      rangeV2 = document.getElementById('rangeV2');

const minGap = 100; // Minimum difference between range1 and range2 values

const setValue = (range, rangeV) => {
  const newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 10 - (newValue * 0.2);
  rangeV.innerHTML = `₦ ${range.value}`;
  rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
};

const updateRanges = () => {
  let value1 = parseInt(range1.value);
  let value2 = parseInt(range2.value);

  // Ensure the thumbs don't overlap
  if (value1 + minGap >= value2) {
    if (range1 === document.activeElement) {
      range1.value = value2 - minGap;
    } else {
      range2.value = value1 + minGap;
    }
  }

  setValue(range1, rangeV1);
  setValue(range2, rangeV2);
};

document.addEventListener("DOMContentLoaded", () => {
  setValue(range1, rangeV1);
  setValue(range2, rangeV2);
});

range1.addEventListener('input', updateRanges);
range2.addEventListener('input', updateRanges);