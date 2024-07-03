const sortArray = (arr: string[]): string[] => {
  return arr.sort((a, b) => {
    //แยกตัวอักษรและตัวเลข
    const regex = /^([A-Za-z]*)(\d*)/;
    const matchA = a.match(regex);
    const matchB = b.match(regex);

    if (matchA && matchB) {
      const textA = matchA[1];
      const numA = matchA[2] ? parseInt(matchA[2]) : NaN;

      const textB = matchB[1];
      const numB = matchB[2] ? parseInt(matchB[2]) : NaN;

      //ถ้าเป็นตัวเลข เปรียบเทียบตัวเลข
      if (!textA && !textB) {
        return numA - numB;
      }

      //เปรียบเทียบตัวอักษร
      if (textA < textB) return -1;
      if (textA > textB) return 1;

      //ถ้าตัวอักษรเหมือน เปรียบเทียบตัวเลข
      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }
    }

    //เท่ากัน
    return 0;
  });
};

//TEST CASE
console.log(sortArray(["TH19", "SG20", "TH2"])); // ["SG20", "TH2", "TH19"]
console.log(sortArray(["TH10", "TH3Netflix", "TH1", "TH7"])); // ["TH1", "TH3Netflix", "TH7", "TH10"]
console.log(sortArray(["2", "9", "7", "9"])); // ["2", "7", "9", "9"]
console.log(sortArray(["A2", "9", "7", "K9"])); // ["7", "9", "A2", "K9"]
console.log(sortArray(["A", "F", "B", "K"])); // ["A", "B", "F", "K"]
