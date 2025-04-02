const HistogramBuilder = {
  buildObjectBySeenCount: function (list) {
    // return count of each element in the list, keys are x values, values are y values
    return list.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  },

  buildHistogram: function (list) {
    const data = this.buildObjectBySeenCount(list);

    const leftAxis = document.querySelector(".left-axis");
    const bottomAxis = document.querySelector(".bottom-axis");
    const contentAxis = document.querySelector(".content");

    const leftAxisValues = new Set();

    for (const key in data) {
      // set y axis values
      const val = data[key];
      if (!leftAxisValues.has(val)) {
        leftAxisValues.add(val);
        const keyElement = document.createElement("div");
        keyElement.textContent = val;
        leftAxis.appendChild(keyElement);
      }
    }

    const maxFrequency = Math.max(...Array.from(leftAxisValues));

    for (const key in data) {
      const val = data[key];

      // set x axis values
      const keyElement = document.createElement("div");
      keyElement.textContent = key;
      bottomAxis.appendChild(keyElement);

      // set values for bar
      const valElement = document.createElement("div");
      valElement.style.height = (val / maxFrequency) * 100 + "%";
      contentAxis.appendChild(valElement);
    }
  },
};
